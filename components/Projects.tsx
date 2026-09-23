"use client";

import { useMemo, useState } from "react";
import { sortedProjects } from "@/content/projects";
import { ProjectCard } from "./ProjectCard";
import { Section } from "./ui";

const ALL = "All";

export function Projects() {
  const [active, setActive] = useState(ALL);

  const tags = useMemo(() => {
    const counts = new Map<string, number>();
    for (const p of sortedProjects)
      for (const t of p.tags) counts.set(t, (counts.get(t) ?? 0) + 1);
    // Most-used tags first, then alphabetical
    return [...counts.entries()]
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .map(([t]) => t);
  }, []);

  const visible =
    active === ALL
      ? sortedProjects
      : sortedProjects.filter((p) => p.tags.includes(active));

  return (
    <Section id="projects" index="03" title="Projects">
      <div
        role="group"
        aria-label="Filter projects by tag"
        className="mb-8 flex flex-wrap gap-2"
      >
        {[ALL, ...tags].map((tag) => {
          const pressed = tag === active;
          return (
            <button
              key={tag}
              type="button"
              aria-pressed={pressed}
              onClick={() => setActive(tag)}
              className={`rounded-full border px-3 py-1.5 font-mono text-xs transition-colors ${
                pressed
                  ? "border-btn bg-btn text-btn-fg"
                  : "border-line text-muted hover:border-accent hover:text-fg"
              }`}
            >
              {tag}
            </button>
          );
        })}
      </div>

      <p aria-live="polite" className="sr-only">
        Showing {visible.length} project{visible.length === 1 ? "" : "s"}
        {active !== ALL && ` tagged ${active}`}
      </p>

      <ul className="grid gap-6 sm:grid-cols-2">
        {visible.map((p) => (
          <li key={p.slug} className="reveal">
            <ProjectCard project={p} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
