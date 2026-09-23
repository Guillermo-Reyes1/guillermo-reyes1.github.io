import { leadership } from "@/content/leadership";
import { Section } from "./ui";

export function Leadership() {
  return (
    <Section id="leadership" index="04" title="Leadership & Impact">
      <ul className="grid gap-5 md:grid-cols-2">
        {leadership.map((item) => (
          <li
            key={item.organization}
            className="reveal flex flex-col rounded-2xl border border-line p-6"
          >
            {item.highlight && (
              <p className="mb-3 text-2xl font-semibold tracking-tight text-accent-text">
                {item.highlight}
              </p>
            )}
            <h3 className="font-semibold text-fg-strong">{item.role}</h3>
            <p className="text-sm text-fg">
              {item.organization}
              {item.location && `, ${item.location}`}
            </p>
            <p className="mt-1 font-mono text-xs text-muted">
              {item.start} – {item.end}
            </p>
            <ul className="mt-4 space-y-1.5 text-sm leading-relaxed text-fg">
              {item.bullets.map((b) => (
                <li key={b} className="flex gap-3">
                  <span aria-hidden className="mt-[0.7em] h-px w-3 shrink-0 bg-accent" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  );
}
