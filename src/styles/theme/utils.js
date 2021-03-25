/* istanbul ignore next line */
export const isSystemDark = window?.matchMedia
  ? window.matchMedia('(prefers-color-scheme: light)')?.matches
  : undefined;

export function saveTheme(theme) {
  window.localStorage && localStorage.setItem('selectedTheme', theme);
}

/* istanbul ignore next line */
export function getThemeFromStorage() {
  return window.localStorage
    ? localStorage.getItem('selectedTheme') || null
    : null;
}
