/* eslint-disable @next/next/no-img-element -- static export serves images as-is */
import { site } from "@/content/site";
import { DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

const iconLink =
  "inline-flex size-10 sm:size-11 items-center justify-center rounded-full border border-white/20 text-white/85 transition-colors hover:border-[#b3a369] hover:text-[#b3a369]";

/** Always GT navy with white text and gold accents, in both themes. */
export function Hero() {
  const { links, headshot } = site;

  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative overflow-hidden bg-[#003057] text-white"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_30rem_at_85%_-10%,rgba(179,163,105,0.18),transparent_60%)]"
      />
      <div className="relative mx-auto grid max-w-5xl gap-10 px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24 md:grid-cols-[1fr_auto] md:items-center">
        <div className="fade-in max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#b3a369] sm:text-sm">
            {site.eyebrow}
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {site.name}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-[#dbe3ea] sm:text-xl">
            {site.positioning}
          </p>
          <p className="mt-3 text-sm text-[#a9b6c4]">
            B.S. Computer Science · Georgia Tech · GPA 3.91 · {site.location}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-2 sm:gap-3">
            <a
              href={site.resumePath}
              download
              className="inline-flex h-11 items-center gap-2 rounded-full bg-[#b3a369] px-5 text-sm font-semibold text-[#00223e] transition-colors hover:bg-[#eaaa00]"
            >
              <DownloadIcon width={18} height={18} />
              Download résumé
            </a>
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub (opens in a new tab)"
              className={iconLink}
            >
              <GitHubIcon />
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn (opens in a new tab)"
              className={iconLink}
            >
              <LinkedInIcon />
            </a>
            <a
              href={`mailto:${links.email}`}
              aria-label={`Email ${links.email}`}
              className={iconLink}
            >
              <MailIcon />
            </a>
          </div>
        </div>

        {headshot && (
          <img
            src={headshot.src}
            alt={headshot.alt}
            width={headshot.width}
            height={headshot.height}
            className="fade-in size-40 rounded-full object-cover ring-4 ring-[#b3a369]/60 sm:size-52 md:order-last"
          />
        )}
      </div>
      <div aria-hidden className="h-1 bg-[#b3a369]" />
    </section>
  );
}
