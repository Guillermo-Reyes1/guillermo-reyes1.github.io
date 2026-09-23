import { site } from "@/content/site";
import { Section } from "./ui";

export function About() {
  return (
    <Section id="about" index="01" title="About">
      <div className="grid gap-10 md:grid-cols-[1.5fr_1fr]">
        <div className="reveal space-y-5 text-lg leading-relaxed text-fg">
          {site.bio.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <div className="reveal space-y-4">
          <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
            Education
          </h3>
          <ul className="space-y-4">
            {site.education.map((edu) => (
              <li
                key={edu.school}
                className="rounded-xl border border-line bg-surface p-5"
              >
                <p className="font-semibold text-fg-strong">{edu.school}</p>
                <p className="text-sm text-fg">{edu.degree}</p>
                <p className="mt-1 font-mono text-xs text-accent-text">
                  {edu.date}
                  {edu.location && ` · ${edu.location}`}
                </p>
                {edu.details.length > 0 && (
                  <ul className="mt-3 space-y-1 text-sm text-muted">
                    {edu.details.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
