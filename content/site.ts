import type { SiteConfig } from "./types";

export const site: SiteConfig = {
  name: "Guillermo A. Reyes Villalta",
  shortName: "Guillermo Reyes",
  url: "https://guillermo-reyes1.github.io",
  positioning:
    "CS student at Georgia Tech working where AI, security, and finance meet.",
  eyebrow: "Software Engineering · AI · Cybersecurity · Fintech",
  location: "Atlanta, GA · from El Salvador",
  bio: [
    "I'm a Computer Science student at Georgia Tech, concentrating in AI and cybersecurity with a minor in fintech. I grew up in El Salvador and have been shipping software for real users since high school: a patient-records system I sold to three doctors, company-wide AI training at Applaudo, and a coding club for middle schoolers.",
    "I like work that starts with a clear spec and ends with something people rely on. I'm looking for software engineering internships.",
  ],
  // Drop your PDF at /public/resume.pdf
  resumePath: "/resume.pdf",
  headshot: {
    src: "/headshot.jpg",
    alt: "Portrait of Guillermo Reyes",
    width: 600,
    height: 600,
  },
  links: {
    github: "https://github.com/guillermo-reyes1",
    linkedin: "https://linkedin.com/in/guillermo-reyes1",
    email: "reyesguillermo2024@gmail.com",
  },
  education: [
    {
      school: "Georgia Institute of Technology",
      degree: "B.S. Computer Science",
      details: [
        "Threads: Artificial Intelligence & Cybersecurity",
        "Minor in Fintech (in progress)",
        "GPA 3.91 / 4.0",
      ],
      location: "Atlanta, GA",
      date: "Expected May 2029",
    },
    {
      school: "Academia Británica Cuscatleca",
      degree: "IB Diploma",
      details: ["GPA 4.0 / 4.0"],
      location: "El Salvador",
      date: "June 2024",
    },
  ],
  seoDescription:
    "Guillermo Reyes: Georgia Tech Computer Science student (AI & Cybersecurity threads, Fintech minor) building software across AI, security and fintech. Experience, projects and leadership.",
  keywords: [
    "Guillermo Reyes",
    "Guillermo Reyes Villalta",
    "Georgia Tech",
    "Computer Science",
    "Software Engineering Intern",
    "AI",
    "Cybersecurity",
    "Fintech",
  ],
};
