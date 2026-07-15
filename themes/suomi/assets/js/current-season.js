const HELSINKI = { latitude: 60.1699, longitude: 24.9384 };
const phaseNames = ["dawn", "day", "dusk", "night"];
const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
const phasePicker = document.querySelector("[data-day-phase-picker]");
const sceneWrap = document.querySelector(".scene-wrap");
const sceneExperience = document.querySelector("[data-season-experience]");
const sceneLoader = document.querySelector("[data-scene-loader]");
const seasonInputs = [...document.querySelectorAll('input[name="season"]')];
let manualPhase = null;
let sceneInView = false;
let seasonBusy = false;
let loaderTimer;

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

function responsiveSrcset(stem, format) {
  return `${stem}-720.${format} 720w, ${stem}-1100.${format} 1100w, ${stem}.${format} 1536w`;
}

function setLayerSource(layer, stack, phase) {
  const source = layer.querySelector("source");
  const image = layer.querySelector("img");
  const stem = stack.dataset[`${phase}Stem`];
  source.srcset = responsiveSrcset(stem, "avif");
  image.srcset = responsiveSrcset(stem, "webp");
  image.src = `${stem}.webp`;
  return image;
}

function clearLayer(layer) {
  layer.querySelector("source").removeAttribute("srcset");
  const image = layer.querySelector("img");
  image.removeAttribute("srcset");
  image.removeAttribute("src");
  delete layer.dataset.phase;
}

async function imageIsReady(image) {
  try { await image.decode(); } catch (_) { /* A failed decode is checked below. */ }
  return image.complete && image.naturalWidth > 0;
}

async function showPhase(stack, phase, animate = true) {
  if (!phaseNames.includes(phase)) return false;
  if (stack.dataset.phase === phase) return true;

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

  const loaded = await imageIsReady(image);
  if (stack.dataset.transitionToken !== token) return false;
  if (!loaded) {
    clearLayer(target);
    return false;
  }

  stack.dataset.phase = phase;
  scene.dataset.dayPhase = phase;

  if (firstLoad || !animate || reducedMotion.matches) {
    stack.classList.remove("is-transitioning");
    current.classList.add("is-visible");
    if (next !== current) {
      next.classList.remove("is-visible");
      clearLayer(next);
    }
    return true;
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
  return true;
}

function stackForSeason(season) {
  return document.querySelector(`.scene-art-stack[data-season="${season}"]`);
}

function activeStack() {
  const selected = document.querySelector('input[name="season"]:checked');
  return stackForSeason(selected.id.replace("season-", ""));
}

function refreshTime(animate = true) {
  const phase = manualPhase || currentDayPhase();
  document.documentElement.dataset.dayPhase = phase;
  return showPhase(activeStack(), phase, animate && sceneInView && !document.hidden);
}

function setSceneBusy(busy) {
  seasonBusy = busy;
  sceneWrap?.toggleAttribute("aria-busy", busy);
  seasonInputs.forEach(input => { input.disabled = busy; });
  phasePicker?.querySelectorAll("button").forEach(button => { button.disabled = busy; });
}

function queueLoader() {
  clearTimeout(loaderTimer);
  loaderTimer = setTimeout(() => { sceneLoader.hidden = false; }, 140);
}

function hideLoader() {
  clearTimeout(loaderTimer);
  sceneLoader.hidden = true;
}

function transitionToPanel(currentPanel, targetPanel) {
  if (currentPanel === targetPanel) return Promise.resolve();

  targetPanel.classList.add("is-transitioning-in");
  if (reducedMotion.matches) return Promise.resolve();

  return new Promise(resolve => {
    requestAnimationFrame(() => requestAnimationFrame(() => {
      targetPanel.classList.add("is-visible");
      setTimeout(resolve, 950);
    }));
  });
}

async function selectSeason(input) {
  const season = input.id.replace("season-", "");
  const targetPanel = document.querySelector(`.season-panel-${season}`);
  const currentPanel = document.querySelector(".season-panel.is-active");
  if (targetPanel === currentPanel) return;

  const phase = manualPhase || currentDayPhase();
  const targetStack = stackForSeason(season);
  const needsLoad = targetStack.dataset.phase !== phase;
  const currentSeason = currentPanel.className.match(/season-panel-(winter|spring|summer|autumn)/)?.[1];

  setSceneBusy(true);
  if (needsLoad) queueLoader();
  document.documentElement.dataset.dayPhase = phase;

  const loaded = await showPhase(targetStack, phase, false);
  hideLoader();

  if (!loaded) {
    document.querySelector(`#season-${currentSeason}`).checked = true;
    setSceneBusy(false);
    return;
  }

  await transitionToPanel(currentPanel, targetPanel);
  currentPanel.classList.remove("is-active");
  targetPanel.classList.add("is-active");
  targetPanel.classList.remove("is-transitioning-in", "is-visible");
  setSceneBusy(false);
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
sceneExperience?.classList.add("is-enhanced");
document.querySelectorAll(".season-panel").forEach(panel => {
  panel.classList.toggle("is-active", panel.classList.contains(`season-panel-${automaticSeason}`));
});
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

seasonInputs.forEach(input => {
  input.addEventListener("change", () => selectSeason(input));
});

phasePicker?.addEventListener("click", event => {
  const button = event.target.closest("button[data-phase]");
  if (!button) return;
  manualPhase = button.dataset.phase === "auto" ? null : button.dataset.phase;
  updatePhasePicker(button.dataset.phase);
  refreshTime();
});

setInterval(() => {
  if (!document.hidden && !seasonBusy) refreshTime();
}, 60000);

reducedMotion.addEventListener?.("change", updateMotionState);
document.addEventListener("visibilitychange", () => {
  updateMotionState();
  if (!document.hidden && !seasonBusy) refreshTime(sceneInView);
});
