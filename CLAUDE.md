@AGENTS.md

# Portfolio: project notes

Personal portfolio for Guillermo A. Reyes Villalta, live at https://guillermo-reyes1.github.io
(repo `Guillermo-Reyes1/guillermo-reyes1.github.io`). See README.md for run/deploy/add-a-project steps.

## Stack & deploy
- Next.js 16 App Router + TypeScript + Tailwind v4, `output: "export"` (static, writes `out/`),
  `trailingSlash: true`, `images.unoptimized`. No backend, no paid services.
- Runtime deps are only next/react/react-dom. Keep it that way; explain any new library to the user.
- Push to `main` → `.github/workflows/deploy.yml` lints, builds, deploys to GitHub Pages.
  Settings → Pages → Source is "GitHub Actions" (set 2026-09-23).
- Verify before pushing: `npm run typecheck && npm run lint && npm run build`.

## Conventions
- ALL copy lives in `content/*.ts` (typed in `content/types.ts`). Edit data, not components.
- Adding a project = one object in `content/projects.ts`. `featured: true` → gets `/projects/<slug>/`
  and a sitemap entry automatically.
- Any link starting with `TODO_` is hidden on the site (`isPlaceholder` in `content/types.ts`).
- Colors are CSS tokens at the top of `app/globals.css`: Georgia Tech navy `#003057`, gold `#B3A369`.
  Light mode gold *text* uses `#7A6A2E` for AA contrast. The Hero is always navy in both themes.
  The two dark-token blocks in globals.css must stay in sync.
- OG image is generated from `content/site.ts` at build time by `app/og.png/route.tsx`
  (config in `lib/seo.ts`). Don't switch back to `opengraph-image.tsx`: it exports without a
  file extension and GitHub Pages serves it with the wrong content type.
- Motion is CSS-only and gated by `prefers-reduced-motion`. Don't put fade-in on Hero text (it hurt LCP).

## Writing rules (from the user)
- Concise, impact-first bullets. Keep every number exactly as given. Never invent metrics,
  employers or technologies. Use `TODO_` placeholders for anything missing.
- Never put the user's phone number on the site. Never commit secrets or `.env` files.
- One commit per logical step.

## Open TODOs (as of 2026-09-23)
1. `public/resume.pdf`: missing; the hero "Download résumé" button 404s until added.
2. Headshot: add `public/headshot.jpg`, uncomment `headshot` in `content/site.ts` (`TODO_HEADSHOT`).
3. Bottoms Up!: `TODO_GITHUB_LINK`, `TODO_SPEC_LINK` in `content/projects.ts`.
4. Medical Portal: `TODO_GITHUB_LINK` (delete if the code stays private).
5. Career Fair Contact Manager: `TODO_SPEC_LINK`.
6. Project screenshots: optional `image` field per project; files go in `public/projects/`.
7. Wording to confirm with the user (inferred, not given):
   - project roles ("Spec author & developer", "Designer, developer & seller",
     "API & data model designer")
   - bio closing line "I'm looking for software engineering internships."
   - hero line "Atlanta, GA · from El Salvador"
   - SQL appears in both Languages and Data & Cloud (user may want one removed)
8. User will send more projects later: add them as objects in `content/projects.ts`.

After finishing TODOs: re-run Lighthouse (last run: mobile 98/100/100/100, desktop 100×4) and
remove completed items from this list.
