"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { CloseIcon, MenuIcon } from "./icons";
import { ThemeToggle } from "./ThemeToggle";

export const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "leadership", label: "Leadership" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-bg/85 backdrop-blur-md">
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8"
      >
        <Link
          href="/#top"
          className="flex items-center gap-2 font-mono text-sm font-semibold tracking-tight text-fg-strong"
        >
          <span
            aria-hidden
            className="grid size-8 place-items-center rounded-md bg-btn text-xs font-bold text-btn-fg"
          >
            GR
          </span>
          <span className="sr-only sm:not-sr-only">{site.shortName}</span>
        </Link>

        <div className="flex items-center gap-1">
          <ul className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={`/#${item.id}`}
                  className="rounded-md px-3 py-2 text-sm text-muted transition-colors hover:text-fg-strong"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-full text-muted hover:bg-surface hover:text-fg md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line md:hidden">
          <ul className="mx-auto max-w-5xl px-5 py-3">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={`/#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-3 text-base text-fg hover:bg-surface"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
