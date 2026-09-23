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

## Source of truth
The user's résumé is the source of truth for all content. Public copy: `public/resume.pdf`
(page 1 only, no phone number), extracted from the user's Google Docs export. Their full export
has a page 2 of "Unused" notes and stays local; `.gitignore` blocks `public/*Resume*.pdf` except
`resume.pdf`. When the user sends a new résumé: re-read it, confirm there's no phone number and
no scratch pages, re-extract page 1, and re-align `content/` with it.

## Open TODOs (as of 2026-09-23)
1. Bottoms Up!: `TODO_GITHUB_LINK`, `TODO_SPEC_LINK` in `content/projects.ts`.
2. Medical Portal: `TODO_GITHUB_LINK` (delete if the code stays private).
3. Career Fair Contact Manager: `TODO_SPEC_LINK`.
4. Project screenshots: optional `image` field per project; files go in `public/projects/`.
5. User will send more projects later: add them as objects in `content/projects.ts`.

Done: headshot (600×600 JPG), résumé published (1 page, phone-free), content aligned to résumé
incl. TypeScript. User confirmed (2026-09-23) content that isn't on the résumé but is correct:
GT threads (AI & Cybersecurity), Fintech minor, "Atlanta, GA · from El Salvador", and the bio's
closing line about internships. Last Lighthouse: mobile 96/100/100/100, desktop 100×4.
