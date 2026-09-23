import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Leadership } from "@/components/Leadership";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { site } from "@/content/site";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  email: `mailto:${site.links.email}`,
  jobTitle: "Computer Science Student",
  alumniOf: site.education.map((e) => ({
    "@type": "EducationalOrganization",
    name: e.school,
  })),
  knowsLanguage: ["Spanish", "English", "German"],
  sameAs: [site.links.github, site.links.linkedin],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Leadership />
      <Skills />
      <Contact />
    </>
  );
}
