# guillermo-reyes1.github.io

Personal portfolio of **Guillermo A. Reyes Villalta**: live at <https://guillermo-reyes1.github.io>.

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · static export · Georgia Tech navy & gold.

## Run it locally

Requires Node.js 20.9+.

```bash
npm install
npm run dev        # http://localhost:3000 with hot reload
```

Other scripts:

| Command             | What it does                                              |
| ------------------- | --------------------------------------------------------- |
| `npm run build`     | Builds the static site into `out/`                        |
| `npm start`         | Serves `out/` locally (run `build` first)                 |
| `npm run lint`      | ESLint (Next.js + TypeScript rules)                       |
| `npm run typecheck` | `tsc --noEmit`                                            |

## Where everything lives

```
content/          ← ALL site copy. Edit these; you rarely need to touch components.
  site.ts           name, positioning line, bio, links, education, SEO text, headshot
  experience.ts     jobs (timeline, most recent first)
  projects.ts       projects (cards, filter tags, detail pages)
  leadership.ts     leadership & impact
  skills.ts         skill groups
  types.ts          the TypeScript types for all of the above
components/       section components (Hero, About, Experience, Projects, …)
app/              routes: home, /projects/[slug], 404, sitemap, robots, favicon, /og.png
public/           static files served as-is (resume.pdf, headshot, project images)
```

### Placeholders

Any link that starts with `TODO_` (for example `TODO_GITHUB_LINK`) is **hidden on the site** until
you replace it with a real URL, so you can publish before every link exists. To find them all:

```bash
grep -rn "TODO_" content/
```

## Add a project

Append one object to the `projects` array in [`content/projects.ts`](content/projects.ts):

```ts
{
  slug: "my-new-project",            // URL: /projects/my-new-project/
  title: "My New Project",
  year: "2026",
  summary: "One line shown on the card.",
  description: [
    "First paragraph for the detail page.",
    "Second paragraph.",
  ],
  tags: ["Python", "Flask"],          // also become filter chips automatically
  role: "Solo developer",
  outcomes: ["Impact-first bullet with a real number."],
  links: {
    github: "https://github.com/guillermo-reyes1/my-new-project",
    demo: "https://…",                // optional
    caseStudy: "https://…",           // optional (spec / write-up)
  },
  image: {                            // optional; put the file in public/projects/
    src: "/projects/my-new-project.png",
    alt: "Screenshot of the dashboard showing …",
    width: 1600,
    height: 900,
  },
  featured: true,                     // true = gets its own page + sorts first
  status: "Shipped",                  // "Shipped" | "In progress" | "Spec/Design"
},
```

TypeScript checks the shape: `npm run typecheck` will tell you if a field is missing or misspelled.
The sitemap and project pages update on their own.

### Other common edits

- **Résumé:** put your PDF at `public/resume.pdf` (the button already links there).
- **Headshot:** add `public/headshot.jpg`, then uncomment `headshot` in `content/site.ts`.
  It appears in the hero.
- **New job / leadership role:** add an object at the top of `experience.ts` / `leadership.ts`.
  `highlight` on a leadership item shows as a big gold number.
- **Colors:** tokens live at the top of `app/globals.css` (light and dark blocks).

## Deploy

### GitHub Pages (current setup)

Every push to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which
lints, builds the static export and publishes `out/` to GitHub Pages.

One-time setup: **Settings → Pages → Build and deployment → Source: “GitHub Actions”.**

Because this repo is named `guillermo-reyes1.github.io`, the site is served from the domain root,
so no `basePath` is needed. If you ever move it to a project repo (e.g. `/portfolio`), add
`basePath: "/portfolio"` to `next.config.ts` and update `url` in `content/site.ts`.

### Vercel (alternative)

1. Go to <https://vercel.com/new> and import `guillermo-reyes1/guillermo-reyes1.github.io`.
2. Vercel auto-detects Next.js. Keep the defaults and click **Deploy**.
   `output: "export"` works on Vercel as-is.
3. Update `url` in `content/site.ts` to the Vercel domain (it drives canonical URLs, the sitemap
   and Open Graph tags), commit and push.

## Notes

- **No runtime dependencies** beyond `next`, `react` and `react-dom`. Icons are inline SVG; the
  theme toggle and tag filter are hand-written; motion is CSS-only and disabled under
  `prefers-reduced-motion`.
- Fonts (Geist, Geist Mono) are self-hosted at build time via `next/font`, so no requests go to
  Google at runtime.
- The Open Graph image is rendered from `content/site.ts` at build time (`app/og.png/route.tsx`).
