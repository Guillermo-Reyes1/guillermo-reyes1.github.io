import type { Experience } from "./types";

// Most recent first.
export const experience: Experience[] = [
  {
    company: "Applaudo",
    role: "Technology Intern",
    team: "AI Implementation Program",
    start: "May 2026",
    end: "Jul 2026",
    bullets: [
      "Designed and delivered company-wide AI-usage training for every employee, technical and non-technical.",
      "Owned a weekly executive dashboard and CEO briefing for 13 weeks, tracking AI adoption, including Spec Driven Development (SDD), across 3 client projects (airline, retail, medical).",
      "Led company-wide AI implementation documentation across QA, Data, Design and DevOps.",
      "Ran root-cause defect analysis on production sprint data.",
    ],
    tags: ["AI adoption", "Spec Driven Development", "Analytics"],
  },
  {
    company: "LinkBait Latam",
    role: "Summer Intern",
    start: "Jun 2024",
    end: "Aug 2024",
    bullets: [
      "Tracked product-level sales trends in a restaurant SaaS product to inform pricing and inventory decisions.",
    ],
    tags: ["SaaS", "Data analysis"],
  },
  {
    company: "Applaudo",
    role: "Software Development Intern",
    start: "Jun 2023",
    end: "Aug 2023",
    bullets: [
      "Built and deployed a Python inventory management solution that cut manual workload by 60%.",
      "Improved the company's ticketing system to speed up resolution times.",
    ],
    tags: ["Python", "Automation"],
  },
];
