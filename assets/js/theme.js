/**
 * Sangguniang Bayan & Municipal Government of Tumauini
 * Centralized Civic Theme Engine (Light / Dark Mode Controller)
 * Strictly follows GEMINI.md Design System Guidelines.
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'tumauini-theme';

  function getSystemPreference() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function getSavedTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function applyTheme(theme) {
    if (theme === 'dark' || theme === 'light') {
      document.documentElement.setAttribute('data-theme', theme);
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    updateToggleButtons(theme || getSystemPreference());
  }

  function updateToggleButtons(activeTheme) {
    document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
      const isDark = activeTheme === 'dark';
      btn.setAttribute('aria-label', isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode');
      btn.setAttribute('title', isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode');
    });

    document.querySelectorAll('.theme-mode-badge').forEach(badge => {
      badge.textContent = activeTheme === 'dark' ? 'Dark' : 'Light';
    });
  }

  window.toggleTheme = function () {
    const currentAttr = document.documentElement.getAttribute('data-theme');
    const isCurrentlyDark = currentAttr === 'dark' || (!currentAttr && getSystemPreference() === 'dark');
    const nextTheme = isCurrentlyDark ? 'light' : 'dark';

    try {
      localStorage.setItem(STORAGE_KEY, nextTheme);
    } catch (e) {}

    applyTheme(nextTheme);
  };

  // Immediate execution on load
  const initialTheme = getSavedTheme();
  if (initialTheme) {
    applyTheme(initialTheme);
  }

  // Listen for OS system theme changes if user hasn't explicitly set a preference
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      if (!getSavedTheme()) {
        updateToggleButtons(e.matches ? 'dark' : 'light');
      }
    });
  }

  // Update button icons on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      const current = document.documentElement.getAttribute('data-theme') || getSystemPreference();
      updateToggleButtons(current);
    });
  } else {
    const current = document.documentElement.getAttribute('data-theme') || getSystemPreference();
    updateToggleButtons(current);
  }
})();
