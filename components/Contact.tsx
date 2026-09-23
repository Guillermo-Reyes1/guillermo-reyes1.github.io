import { site } from "@/content/site";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./icons";
import { Section } from "./ui";

export function Contact() {
  const { email, linkedin, github } = site.links;
  const items = [
    { href: `mailto:${email}`, label: "Email", value: email, Icon: MailIcon },
    {
      href: linkedin,
      label: "LinkedIn",
      value: linkedin.replace(/^https?:\/\/(www\.)?/, ""),
      Icon: LinkedInIcon,
    },
    {
      href: github,
      label: "GitHub",
      value: github.replace(/^https?:\/\//, ""),
      Icon: GitHubIcon,
    },
  ];

  return (
    <Section id="contact" index="06" title="Contact">
      <div className="reveal max-w-2xl">
        <p className="text-lg leading-relaxed text-fg">
          I&apos;m looking for software engineering internships. If you&apos;re
          hiring or want to talk about AI, security or fintech, the fastest way
          to reach me is email.
        </p>
        <ul className="mt-8 divide-y divide-line border-y border-line">
          {items.map(({ href, label, value, Icon }) => {
            const external = href.startsWith("http");
            return (
              <li key={label}>
                <a
                  href={href}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group flex items-center gap-4 py-4 transition-colors"
                >
                  <Icon className="shrink-0 text-accent-text" />
                  <span className="w-20 shrink-0 font-mono text-xs uppercase tracking-wider text-muted">
                    {label}
                  </span>
                  <span className="min-w-0 break-all font-medium text-fg-strong group-hover:underline">
                    {value}
                  </span>
                  {external && (
                    <span className="sr-only"> (opens in a new tab)</span>
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
