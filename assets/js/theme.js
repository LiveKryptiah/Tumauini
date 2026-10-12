/**
 * Sangguniang Bayan & Municipal Government of Tumauini
 * Centralized Civic Theme Engine (Light / Dark Mode Controller)
 * Strictly follows GEMINI.md Design System Guidelines.
 * Default Mode: Light Mode.
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'tumauini-theme';

  function getSavedTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function getActiveTheme() {
    const saved = getSavedTheme();
    return saved === 'dark' ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    const effectiveTheme = theme === 'dark' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', effectiveTheme);
    updateThemeColorMeta(effectiveTheme);
    updateToggleButtons(effectiveTheme);
  }

  function updateThemeColorMeta(activeTheme) {
    const themeColor = activeTheme === 'dark' ? '#060e06' : '#f2f9f2';
    document.querySelectorAll('meta[name="theme-color"]').forEach(meta => {
      meta.setAttribute('content', themeColor);
    });
  }

  function updateToggleButtons(activeTheme) {
    const isDark = activeTheme === 'dark';
    document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
      btn.setAttribute('aria-label', isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode');
      btn.setAttribute('title', isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode');
    });

    document.querySelectorAll('.theme-mode-badge').forEach(badge => {
      badge.textContent = isDark ? 'Dark' : 'Light';
    });
  }

  window.toggleTheme = function () {
    const currentAttr = document.documentElement.getAttribute('data-theme') || 'light';
    const nextTheme = currentAttr === 'dark' ? 'light' : 'dark';

    try {
      localStorage.setItem(STORAGE_KEY, nextTheme);
    } catch (e) {}

    applyTheme(nextTheme);
  };

  // Immediate synchronous execution on load (in <head>)
  const initialTheme = getActiveTheme();
  applyTheme(initialTheme);

  // Update button icons on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      updateToggleButtons(current);
    });
  } else {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    updateToggleButtons(current);
  }
})();
