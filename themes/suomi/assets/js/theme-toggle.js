const root = document.documentElement;
const toggle = document.querySelector("[data-theme-toggle]");
const themeColor = document.querySelector("[data-theme-color]");
const colorPreference = matchMedia("(prefers-color-scheme: dark)");

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
  applyTheme(root.dataset.theme === "dark" ? "light" : "dark");
});

addEventListener("storage", event => {
  if (event.key === "suomi-theme") applyTheme(storedTheme() || preferredTheme(), false);
});

colorPreference.addEventListener?.("change", event => {
  if (!storedTheme()) applyTheme(event.matches ? "dark" : "light", false);
});
