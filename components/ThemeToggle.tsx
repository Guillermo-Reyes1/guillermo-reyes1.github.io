"use client";

import { MoonIcon, SunIcon } from "./icons";

/** Runs in <head> before first paint so there's no flash of the wrong theme. */
export const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=t}catch(e){}})()`;

export function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage can be unavailable (private mode); the toggle still works for this visit.
    }
  }

  // Both icons render; CSS shows the right one, so server and client HTML match.
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
      className="inline-flex size-10 items-center justify-center rounded-full text-muted transition-colors hover:bg-surface hover:text-fg"
    >
      <MoonIcon className="dark:hidden" />
      <SunIcon className="hidden dark:block" />
    </button>
  );
}
