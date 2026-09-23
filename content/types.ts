/**
 * Shared content types. Every section of the site renders from typed data in
 * /content, so editing copy never requires touching a component.
 *
 * Placeholder convention: any URL or path that starts with "TODO_" is treated
 * as missing and is NOT rendered on the site (see `isPlaceholder`).
 */

export type ProjectStatus = "Shipped" | "In progress" | "Spec/Design";

export interface ProjectLinks {
  github?: string;
  demo?: string;
  /** Technical spec, write-up or case study */
  caseStudy?: string;
}

export interface ImageAsset {
  /** Path under /public, e.g. "/projects/bottoms-up.png" */
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Project {
  /** URL segment for the detail page: /projects/<slug>/ */
  slug: string;
  title: string;
  /** Display year or range, e.g. "2026" or "2024" */
  year: string;
  /** One line shown on the card */
  summary: string;
  /** Longer description, one string per paragraph (detail page) */
  description: string[];
  /** Tech stack / topic tags; also drive the project filter */
  tags: string[];
  role: string;
  /** Key outcomes and metrics, impact first */
  outcomes: string[];
  links: ProjectLinks;
  image?: ImageAsset;
  /** Featured projects get their own page and sort first */
  featured: boolean;
  status: ProjectStatus;
}

export interface Experience {
  company: string;
  role: string;
  /** Optional program / team name shown under the role */
  team?: string;
  location?: string;
  start: string;
  end: string;
  bullets: string[];
  tags?: string[];
}

export interface Leadership {
  organization: string;
  role: string;
  location?: string;
  start: string;
  end: string;
  /** Headline number or fact pulled out visually, e.g. "$100K raised" */
  highlight?: string;
  bullets: string[];
}

export interface SkillGroup {
  name: string;
  items: string[];
}

export interface Education {
  school: string;
  degree: string;
  details: string[];
  location?: string;
  date: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  /** Canonical site URL, no trailing slash */
  url: string;
  positioning: string;
  /** Short line shown above the name in the hero */
  eyebrow: string;
  location: string;
  bio: string[];
  resumePath: string;
  headshot?: ImageAsset;
  links: SocialLinks;
  education: Education[];
  seoDescription: string;
  keywords: string[];
}

export function isPlaceholder(value?: string): boolean {
  return !value || value.startsWith("TODO_");
}
