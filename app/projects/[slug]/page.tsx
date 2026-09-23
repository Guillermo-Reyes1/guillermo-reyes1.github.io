/* eslint-disable @next/next/no-img-element -- static export serves images as-is */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeftIcon } from "@/components/icons";
import { ProjectLinks } from "@/components/ProjectCard";
import { StatusBadge, Tag } from "@/components/ui";
import { featuredProjects, getProject } from "@/content/projects";
import { ogImage } from "@/lib/seo";

// Only featured projects get a page; anything else 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return featuredProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const path = `/projects/${project.slug}/`;
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: path },
    openGraph: {
      title: project.title,
      description: project.summary,
      url: path,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.summary,
      images: [ogImage.url],
    },
  };
}

export default async function ProjectPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project || !project.featured) notFound();

  return (
    <article className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 text-sm text-muted hover:text-fg-strong"
      >
        <ArrowLeftIcon width={16} height={16} />
        All projects
      </Link>

      <header className="fade-in mt-10">
        <div className="flex flex-wrap items-center gap-3">
          <StatusBadge status={project.status} />
          <span className="font-mono text-sm text-muted">{project.year}</span>
        </div>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-fg-strong sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 text-xl leading-relaxed text-fg">
          {project.summary}
        </p>
        <div className="mt-6">
          <ProjectLinks project={project} />
        </div>
      </header>

      {project.image && (
        <img
          src={project.image.src}
          alt={project.image.alt}
          width={project.image.width}
          height={project.image.height}
          className="mt-10 w-full rounded-xl border border-line"
        />
      )}

      <dl className="mt-10 grid gap-6 border-y border-line py-6 sm:grid-cols-[auto_1fr] sm:gap-x-10">
        <dt className="font-mono text-xs uppercase tracking-[0.18em] text-accent-text">
          Role
        </dt>
        <dd className="text-fg">{project.role}</dd>
        <dt className="font-mono text-xs uppercase tracking-[0.18em] text-accent-text">
          Stack
        </dt>
        <dd>
          <ul className="flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <li key={t}>
                <Tag>{t}</Tag>
              </li>
            ))}
          </ul>
        </dd>
      </dl>

      <section aria-labelledby="overview" className="mt-12">
        <h2 id="overview" className="text-xl font-semibold text-fg-strong">
          Overview
        </h2>
        <div className="mt-4 space-y-4 text-lg leading-relaxed text-fg">
          {project.description.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>

      <section aria-labelledby="outcomes" className="mt-12">
        <h2 id="outcomes" className="text-xl font-semibold text-fg-strong">
          Key outcomes
        </h2>
        <ul className="mt-4 space-y-3 text-lg text-fg">
          {project.outcomes.map((o) => (
            <li key={o} className="flex gap-3 leading-relaxed">
              <span aria-hidden className="mt-[0.75em] h-px w-4 shrink-0 bg-accent" />
              <span>{o}</span>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
