import { skills } from "@/content/skills";
import { Section } from "./ui";

export function Skills() {
  return (
    <Section id="skills" index="05" title="Skills">
      <dl className="grid gap-8 sm:grid-cols-2">
        {skills.map((group) => (
          <div key={group.name} className="reveal">
            <dt className="font-mono text-xs uppercase tracking-[0.18em] text-accent-text">
              {group.name}
            </dt>
            <dd className="mt-3">
              <ul className="flex flex-wrap gap-2">
                {group.items.map((s) => (
                  <li
                    key={s}
                    className="rounded-lg border border-line bg-surface px-3 py-1.5 text-sm text-fg"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
