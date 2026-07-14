const HELSINKI = { latitude: 60.1699, longitude: 24.9384 };
const phaseNames = ["dawn", "day", "dusk", "night"];
const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
const phasePicker = document.querySelector("[data-day-phase-picker]");
const sceneWrap = document.querySelector(".scene-wrap");
let manualPhase = null;
let sceneInView = false;

const helsinkiClock = new Intl.DateTimeFormat("en", {
  timeZone: "Europe/Helsinki",
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  hourCycle: "h23",
});

const clockParts = (date = new Date()) => Object.fromEntries(
  helsinkiClock.formatToParts(date)
    .filter(({ type }) => type !== "literal")
    .map(({ type, value }) => [type, Number(value)])
);

const normaliseDegrees = value => (value + 360) % 360;
const normaliseMinutes = value => (value + 1440) % 1440;
const radians = degrees => degrees * Math.PI / 180;
const degrees = value => value * 180 / Math.PI;

function solarEventUtc(parts, sunrise) {
  const date = Date.UTC(parts.year, parts.month - 1, parts.day);
  const start = Date.UTC(parts.year, 0, 0);
  const dayOfYear = Math.floor((date - start) / 86400000);
  const longitudeHour = HELSINKI.longitude / 15;
  const approximateTime = dayOfYear + ((sunrise ? 6 : 18) - longitudeHour) / 24;
  const meanAnomaly = .9856 * approximateTime - 3.289;
  const trueLongitude = normaliseDegrees(
    meanAnomaly
    + 1.916 * Math.sin(radians(meanAnomaly))
    + .02 * Math.sin(radians(2 * meanAnomaly))
    + 282.634
  );

  let rightAscension = normaliseDegrees(degrees(Math.atan(.91764 * Math.tan(radians(trueLongitude)))));
  rightAscension += Math.floor(trueLongitude / 90) * 90 - Math.floor(rightAscension / 90) * 90;
  rightAscension /= 15;

  const sinDeclination = .39782 * Math.sin(radians(trueLongitude));
  const cosDeclination = Math.cos(Math.asin(sinDeclination));
  const cosHourAngle = (
    Math.cos(radians(90.833))
    - sinDeclination * Math.sin(radians(HELSINKI.latitude))
  ) / (cosDeclination * Math.cos(radians(HELSINKI.latitude)));

  if (cosHourAngle > 1 || cosHourAngle < -1) return null;

  const hourAngle = (sunrise
    ? 360 - degrees(Math.acos(cosHourAngle))
    : degrees(Math.acos(cosHourAngle))) / 15;
  const localMeanTime = hourAngle + rightAscension - .06571 * approximateTime - 6.622;
  return normaliseMinutes((localMeanTime - longitudeHour) * 60);
}

function currentSeason(parts) {
  const date = parts.month * 100 + parts.day;
  if (date >= 320 && date < 621) return "spring";
  if (date >= 621 && date < 922) return "summer";
  if (date >= 922 && date < 1221) return "autumn";
  return "winter";
}

function currentDayPhase(now = new Date()) {
  const parts = clockParts(now);
  const sunrise = solarEventUtc(parts, true);
  const sunset = solarEventUtc(parts, false);
  if (sunrise === null || sunset === null) return "day";

  const minute = now.getUTCHours() * 60 + now.getUTCMinutes();
  if (minute >= sunrise - 75 && minute < sunrise + 45) return "dawn";
  if (minute >= sunrise + 45 && minute < sunset - 60) return "day";
  if (minute >= sunset - 60 && minute < sunset + 75) return "dusk";
  return "night";
}

function setLayerSource(layer, stack, phase) {
  const source = layer.querySelector("source");
  const image = layer.querySelector("img");
  source.srcset = stack.dataset[`${phase}Avif`];
  image.src = stack.dataset[`${phase}Webp`];
  return image;
}

function clearLayer(layer) {
  layer.querySelector("source").removeAttribute("srcset");
  layer.querySelector("img").removeAttribute("src");
  delete layer.dataset.phase;
}

async function showPhase(stack, phase, animate = true) {
  if (!phaseNames.includes(phase) || stack.dataset.phase === phase) return;

  const scene = stack.closest(".season-scene");
  const layers = [...stack.querySelectorAll(".scene-art-layer")];
  const current = layers.find(layer => layer.classList.contains("is-visible")) || layers[0];
  const next = layers.find(layer => layer !== current);
  const firstLoad = !stack.dataset.phase;
  const target = firstLoad ? current : next;
  const token = String(Number(stack.dataset.transitionToken || 0) + 1);
  stack.dataset.transitionToken = token;

  const image = setLayerSource(target, stack, phase);
  target.dataset.phase = phase;

  try { await image.decode(); } catch (_) { /* The load event remains a safe fallback. */ }
  if (stack.dataset.transitionToken !== token) return;

  stack.dataset.phase = phase;
  scene.dataset.dayPhase = phase;

  if (firstLoad || !animate || reducedMotion.matches) {
    stack.classList.remove("is-transitioning");
    current.classList.add("is-visible");
    if (next !== current) {
      next.classList.remove("is-visible");
      clearLayer(next);
    }
    return;
  }

  stack.classList.add("is-transitioning");
  requestAnimationFrame(() => {
    target.classList.add("is-visible");
    current.classList.remove("is-visible");
  });

  setTimeout(() => {
    if (stack.dataset.transitionToken === token) {
      clearLayer(current);
      stack.classList.remove("is-transitioning");
    }
  }, 1900);
}

function activeStack() {
  const selected = document.querySelector('input[name="season"]:checked');
  return document.querySelector(`.scene-art-stack[data-season="${selected.id.replace("season-", "")}"]`);
}

function refreshTime(animate = true) {
  const phase = manualPhase || currentDayPhase();
  document.documentElement.dataset.dayPhase = phase;
  showPhase(activeStack(), phase, animate && sceneInView && !document.hidden);
}

function updateMotionState() {
  sceneWrap?.classList.toggle(
    "motion-paused",
    reducedMotion.matches || document.hidden || !sceneInView
  );
}

function updatePhasePicker(selected) {
  phasePicker?.querySelectorAll("button").forEach(button => {
    button.setAttribute("aria-pressed", String(button.dataset.phase === selected));
  });
}

const nowParts = clockParts();
const automaticSeason = currentSeason(nowParts);
const automaticSeasonInput = document.querySelector(`#season-${automaticSeason}`);
automaticSeasonInput.checked = true;
refreshTime(false);

if (sceneWrap && "IntersectionObserver" in window) {
  const sceneObserver = new IntersectionObserver(([entry]) => {
    sceneInView = entry.isIntersecting;
    updateMotionState();
  }, { rootMargin: "100px 0px", threshold: 0 });
  sceneObserver.observe(sceneWrap);
} else {
  sceneInView = true;
  updateMotionState();
}

document.querySelectorAll('input[name="season"]').forEach(input => {
  input.addEventListener("change", () => refreshTime(false));
});

phasePicker?.addEventListener("click", event => {
  const button = event.target.closest("button[data-phase]");
  if (!button) return;
  manualPhase = button.dataset.phase === "auto" ? null : button.dataset.phase;
  updatePhasePicker(button.dataset.phase);
  refreshTime();
});

setInterval(() => {
  if (!document.hidden) refreshTime();
}, 60000);

reducedMotion.addEventListener?.("change", updateMotionState);
document.addEventListener("visibilitychange", () => {
  updateMotionState();
  if (!document.hidden) refreshTime(sceneInView);
});
