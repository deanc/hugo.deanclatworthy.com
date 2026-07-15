const root = document.documentElement;
const toggle = document.querySelector("[data-theme-toggle]");
const themeColor = document.querySelector("[data-theme-color]");
const colorPreference = matchMedia("(prefers-color-scheme: dark)");
const themeMotionPreference = matchMedia("(prefers-reduced-motion: reduce)");
let themeTransitionActive = false;

function storedTheme() {
  try {
    const theme = localStorage.getItem("suomi-theme");
    return theme === "light" || theme === "dark" ? theme : null;
  } catch (_) {
    return null;
  }
}

const preferredTheme = () => colorPreference.matches ? "dark" : "light";

function applyTheme(theme, persist = true) {
  const dark = theme === "dark";
  if (dark) root.dataset.theme = "dark";
  else delete root.dataset.theme;

  toggle?.setAttribute("aria-pressed", String(dark));
  toggle?.setAttribute("aria-label", dark ? "Use light theme" : "Use dark theme");
  toggle?.setAttribute("title", dark ? "Use light theme" : "Use dark theme");
  if (themeColor) themeColor.content = dark ? "#07131f" : "#ffffff";

  if (persist) {
    try { localStorage.setItem("suomi-theme", dark ? "dark" : "light"); } catch (_) {}
  }
}

applyTheme(storedTheme() || preferredTheme(), false);

toggle?.addEventListener("click", () => {
  if (themeTransitionActive) return;

  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
  if (!document.startViewTransition || themeMotionPreference.matches) {
    applyTheme(nextTheme);
    return;
  }

  const bounds = toggle.getBoundingClientRect();
  const x = bounds.left + bounds.width / 2;
  const y = bounds.top + bounds.height / 2;
  const radius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y)
  );

  root.style.setProperty("--theme-transition-x", `${x}px`);
  root.style.setProperty("--theme-transition-y", `${y}px`);
  root.style.setProperty("--theme-transition-radius", `${radius}px`);
  root.dataset.themeTransition = "active";
  toggle.classList.add("is-switching");
  themeTransitionActive = true;

  const finish = () => {
    delete root.dataset.themeTransition;
    toggle.classList.remove("is-switching");
    themeTransitionActive = false;
  };

  try {
    const transition = document.startViewTransition(() => applyTheme(nextTheme));
    transition.finished.then(finish, finish);
  } catch (_) {
    finish();
    applyTheme(nextTheme);
  }
});

addEventListener("storage", event => {
  if (event.key === "suomi-theme") applyTheme(storedTheme() || preferredTheme(), false);
});

colorPreference.addEventListener?.("change", event => {
  if (!storedTheme()) applyTheme(event.matches ? "dark" : "light", false);
});
