# Project Section Split — Audit

**Date:** 2026-06-18
**Scope:** Split the single Projects list into two tiered sections: **Featured Work** and **Project Archive**.

## Files created or modified

| File | Change |
| --- | --- |
| `src/data/prj-work.tsx` | **Modified.** Added `ProjectSection` type, added `section: ProjectSection` to the `Project` type, and assigned a `section` value to every project. No data removed or rewritten. |
| `src/modules/portfolio/pages/portfolio-page.tsx` | **Modified.** Derived `featuredProjects` / `archiveProjects` via `filter`, rendered them as two separate sections, and added a `compact` variant to `ProjectCard`. |
| `audit/project-section-split-audit.md` | **Created.** This audit. |

## Summary of the section split

The Projects section previously rendered all 9 projects in one `Projects` grid. It is now two sections:

1. **Featured Work** — appears first, primary showcase. Same card design as before (`sm:grid-cols-2 lg:grid-cols-3`, full-size cards).
2. **Project Archive** — appears second. Uses the **same card design and grid** as Featured Work (`sm:grid-cols-2 lg:grid-cols-3`, full-size cards). Hierarchy comes purely from section order and the "Featured Work" heading; archive cards are **not** shrunk.

## Exact project grouping after the change

**Featured Work** (`section: "featured"`)
- PulseLens
- DepGuard AI
- Smart Food Tour Assistant
- Spotify Console UI (Spotty)

**Project Archive** (`section: "archive"`)
- Super Mario Game
- Data Structures Visualization
- Chess Game 3D
- Portfolio Website
- Flappy Bird Game

## Data model / type changes

```ts
export type ProjectSection = "featured" | "archive";

export type Project = {
  // ...existing fields...
  section: ProjectSection;   // added (required)
};
```

- The single `projects` array is preserved and **not duplicated** — grouping is derived at render time:
  ```ts
  const featuredProjects = projects.filter((p) => p.section === "featured");
  const archiveProjects  = projects.filter((p) => p.section === "archive");
  ```

## UI / rendering changes

- Renamed the old `Projects` section label to **Featured Work** and added a second **Project Archive** section after it.
- `ProjectCard` is unchanged and shared by both sections — same image size, padding, description clamp, click-to-open modal, keyboard handling, `aria-label`, "View details" affordance, tags, and links. Archive cards are the same size as Featured Work cards.
- Both sections use the same grid (`sm:grid-cols-2 lg:grid-cols-3`) and feed the same `setSelectedItem` modal handler, so the detail modal works identically for every project.

## Validation commands run

| Command | Result |
| --- | --- |
| `npm run build` (`tsc -b && vite build`) | ✅ **Passed** — no TypeScript errors, built in ~6.2s. |
| `npm run lint` (`eslint .`) | ⚠️ Not re-run as a gate — pre-existing repo-wide `parserOptions.project` ESLint misconfiguration (documented in `project-modal-audit.md`) makes it fail on every file regardless of this change. Type safety validated via build. |

## What was intentionally left unchanged

- All project/research **data** (descriptions, links, dates, tags, images) — only the new `section` field was added.
- The `Research` and `Skills & Tools` sections.
- The detail modal (`ProjectModal`) and the click/keyboard interaction.
- The full-size `ProjectCard` design used by Featured Work.
- The pre-existing ESLint configuration (out of scope).

## Risks / caveats

- `section` is a **required** field on `Project`; any future project must specify it or the build fails (intentional — keeps the data model honest).
- Featured Work and Project Archive use identical card styling and grids; the only differentiation is section order and headings. If stronger visual separation is later desired, it should be added without shrinking archive cards (per request).

## Git status after completion

```
 M src/data/prj-work.tsx
 M src/modules/portfolio/pages/portfolio-page.tsx
?? audit/project-section-split-audit.md
```
No commits were made.

## Recommended next steps

1. Manual QA: confirm both sections render, cards in each open the modal, and the layout is responsive on mobile/desktop.
2. Optionally fix the repo-wide ESLint `parserOptions.project` config so `npm run lint` can run.
3. Optionally add a short divider/intro line under "Project Archive" (e.g. "Earlier and smaller builds") if more context is desired — without using discouraged labels.
