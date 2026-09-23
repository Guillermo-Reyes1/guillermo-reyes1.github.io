import { experience } from "@/content/experience";
import { Section, Tag } from "./ui";

export function Experience() {
  return (
    <Section id="experience" index="02" title="Experience">
      <ol className="relative space-y-12 border-l border-line pl-6 sm:pl-8">
        {experience.map((job) => (
          <li
            key={`${job.company}-${job.start}`}
            className="reveal relative"
          >
            <span
              aria-hidden
              className="absolute -left-[calc(1.5rem+5px)] top-2 size-2.5 rounded-full bg-accent ring-4 ring-bg sm:-left-[calc(2rem+5px)]"
            />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <h3 className="text-lg font-semibold text-fg-strong">
                {job.role}
                <span className="text-muted"> · </span>
                <span className="text-accent-text">{job.company}</span>
              </h3>
              <p className="shrink-0 font-mono text-xs text-muted sm:text-sm">
                <time>{job.start}</time> – <time>{job.end}</time>
              </p>
            </div>
            {job.team && <p className="mt-0.5 text-sm text-muted">{job.team}</p>}
            <ul className="mt-4 space-y-2 text-fg">
              {job.bullets.map((b) => (
                <li key={b} className="flex gap-3 leading-relaxed">
                  <span aria-hidden className="mt-[0.7em] h-px w-3 shrink-0 bg-accent" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            {job.tags && (
              <ul aria-label="Topics" className="mt-4 flex flex-wrap gap-2">
                {job.tags.map((t) => (
                  <li key={t}>
                    <Tag>{t}</Tag>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}
