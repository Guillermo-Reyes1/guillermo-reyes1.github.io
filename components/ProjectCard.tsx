/* eslint-disable @next/next/no-img-element -- static export serves images as-is */
import Link from "next/link";
import { isPlaceholder, type Project } from "@/content/types";
import { ArrowUpRightIcon, FileIcon, GitHubIcon } from "./icons";
import { StatusBadge, Tag } from "./ui";

export function ProjectLinks({ project }: { project: Project }) {
  const { github, demo, caseStudy } = project.links;
  const items = [
    { href: github, label: "Code", Icon: GitHubIcon },
    { href: demo, label: "Live demo", Icon: ArrowUpRightIcon },
    { href: caseStudy, label: "Spec", Icon: FileIcon },
  ].filter((l) => !isPlaceholder(l.href));

  if (items.length === 0) return null;

  return (
    <ul className="flex flex-wrap gap-4">
      {items.map(({ href, label, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 inline-flex items-center gap-1.5 text-sm font-medium text-accent-text hover:underline"
          >
            <Icon width={16} height={16} />
            {label}
            <span className="sr-only">
              {" "}
              for {project.title} (opens in a new tab)
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const href = `/projects/${project.slug}/`;

  return (
    <article className="group relative flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-accent">
      {project.image && (
        <img
          src={project.image.src}
          alt={project.image.alt}
          width={project.image.width}
          height={project.image.height}
          loading="lazy"
          className="mb-5 aspect-video w-full rounded-lg border border-line object-cover"
        />
      )}
      <div className="flex items-center justify-between gap-3">
        <StatusBadge status={project.status} />
        <span className="font-mono text-xs text-muted">{project.year}</span>
      </div>

      <h3 className="mt-4 text-xl font-semibold tracking-tight text-fg-strong">
        {project.featured ? (
          <Link
            href={href}
            className="after:absolute after:inset-0 after:rounded-2xl focus-visible:outline-none"
          >
            {project.title}
          </Link>
        ) : (
          project.title
        )}
      </h3>
      <p className="mt-2 leading-relaxed text-fg">{project.summary}</p>

      <ul aria-label="Tech stack" className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <li key={t}>
            <Tag>{t}</Tag>
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-6">
        <ProjectLinks project={project} />
        {project.featured && (
          <span
            aria-hidden
            className="ml-auto inline-flex items-center gap-1 text-sm font-medium text-fg-strong transition-transform group-hover:translate-x-0.5"
          >
            Details <ArrowUpRightIcon width={16} height={16} />
          </span>
        )}
      </div>
    </article>
  );
}
