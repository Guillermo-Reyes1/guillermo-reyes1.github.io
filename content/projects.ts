import type { Project } from "./types";

/**
 * To add a project, append one object to this array.
 * - `featured: true` gives it a detail page at /projects/<slug>/ and sorts it first.
 * - Links that start with "TODO_" are hidden until you replace them.
 * - `image` is optional; put files under /public/projects/.
 */
export const projects: Project[] = [
  {
    slug: "bottoms-up",
    title: "Bottoms Up!",
    year: "2026",
    summary:
      "Privacy-first iOS app for group social sessions with real-time scoring and ephemeral photos.",
    description: [
      "Bottoms Up! is an iOS app for group social sessions, with real-time scoring and ephemeral photo storage, built in Swift and SwiftUI on Firebase.",
      "The project follows Spec Driven Development (SDD). I authored a 400+ line technical spec covering identity, the data model and safety-by-design requirements, and the architecture is privacy-first.",
    ],
    tags: ["Swift", "SwiftUI", "Firebase", "iOS", "SDD", "Privacy"],
    role: "Spec author & developer",
    outcomes: [
      "Authored a 400+ line technical spec covering identity, data model and safety-by-design requirements.",
      "Real-time scoring across group sessions.",
      "Ephemeral photo storage within a privacy-first architecture.",
    ],
    links: {
      github: "TODO_GITHUB_LINK",
      caseStudy: "TODO_SPEC_LINK",
    },
    featured: true,
    status: "In progress",
  },
  {
    slug: "medical-portal",
    title: "Medical Portal",
    year: "2024",
    summary:
      "Patient-records system sold to three doctors, saving each about two hours per workday.",
    description: [
      "From April to August 2024 I designed, developed and sold a medical portal to three doctors. It digitizes patient records in MongoDB.",
      "The portal also automates prescription-note printing. Together, these changes saved each doctor about two hours per workday.",
    ],
    tags: ["MongoDB", "Healthcare", "Automation"],
    role: "Designer, developer & seller",
    outcomes: [
      "Sold to three doctors.",
      "Saved each doctor about two hours per workday.",
      "Digitized patient records in MongoDB and automated prescription-note printing.",
    ],
    links: {
      github: "TODO_GITHUB_LINK",
    },
    featured: true,
    status: "Shipped",
  },
  {
    slug: "career-fair-contact-manager",
    title: "Career Fair Contact Manager",
    year: "2026",
    summary:
      "Cross-platform personal CRM for networking contacts: offline-first iOS with real-time sync to web.",
    description: [
      "A personal CRM for tracking the people I meet at career fairs and networking events. The iOS client is offline-first and syncs to a web client in real time over WebSockets.",
      "I designed a RESTful, JWT-authenticated API and the data model for contacts, interaction logs and follow-up tracking.",
    ],
    tags: ["iOS", "WebSockets", "REST API", "JWT", "Offline-first"],
    role: "API & data model designer",
    outcomes: [
      "Designed a RESTful, JWT-authenticated API.",
      "Data model for contacts, interaction logs and follow-up tracking.",
      "Offline-first iOS client with real-time WebSocket sync to web.",
    ],
    links: {
      caseStudy: "TODO_SPEC_LINK",
    },
    featured: true,
    status: "Spec/Design",
  },
];

/** Featured first, then original order. */
export const sortedProjects = [...projects].sort(
  (a, b) => Number(b.featured) - Number(a.featured),
);

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
