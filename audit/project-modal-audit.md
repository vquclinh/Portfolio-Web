# Project Detail Modal — Audit

**Date:** 2026-06-18
**Scope:** Add a clickable project-card → detail-modal interaction to the Portfolio page.

## Files created or modified

| File | Change |
| --- | --- |
| `src/modules/portfolio/components/ProjectModal.tsx` | **Created.** New reusable modal component that renders full project details. |
| `src/modules/portfolio/pages/portfolio-page.tsx` | **Modified.** Added `selectedProject` state, made `ProjectCard` clickable, rendered `<ProjectModal>`. |
| `src/data/prj-work.tsx` | **Modified.** Exported the existing `Project` type and added an optional `paper?: string` field. No project data changed. |

## Summary of changes

- **Reused the existing Radix-based Dialog** (`src/shared/components/ui/dialog.tsx`) instead of building a modal from scratch. This component already provides backdrop dimming, Escape-to-close, backdrop-click-to-close, focus trapping, `role="dialog"`, `aria-modal="true"`, and an accessible close button (`<span class="sr-only">Close</span>`).
- **`ProjectModal.tsx`** renders a **normalized `ProjectModalItem`** (or `null`): image, badge, title, date, full (non-truncated) description, tags, and any available links. It does not hardcode any item — everything is driven by the passed object.
- **Consistent layout, content-hugging height:** the modal uses a uniform width (`max-w-2xl`) and a fixed `h-56` image across all items, but its height now hugs the content (`max-h-[85vh]` cap, no forced height). Short descriptions yield a compact modal with no empty space; long descriptions grow until the cap, then the body scrolls. (Earlier a fixed height was used, but it left dead space under short descriptions — this is the fix.)
- **Both `ProjectCard` and `ResearchCard`** are now `role="button"` elements with `cursor-pointer`, keyboard support (Enter/Space), a focus ring, an `aria-label`, and a "View details ↗" affordance that fades in on hover. Each card maps itself into a `ProjectModalItem` via `projectToModalItem` / `researchToModalItem`.
- Projects use the emerald accent + their domain badge; research uses the cyan accent + a "Research" badge — so the modal stays visually consistent with the originating card while keeping one identical layout/size.
- Inner Demo/Code/Paper anchors call `stopPropagation()` so they still work as direct links without also opening the modal. They also gained `target="_blank" rel="noreferrer"`.

## How the project modal works

1. `PortfolioPage` holds `const [selectedProject, setSelectedProject] = useState<Project | null>(null)`.
2. Each `ProjectCard` calls `onSelect(item)` on click / Enter / Space, setting that project as selected.
3. `<ProjectModal project={selectedProject} ... />` renders. The Dialog is `open` whenever `project !== null`.
4. Closing — via the close button, backdrop click, or Escape — fires `onOpenChange(false)` → `onClose()` → `setSelectedProject(null)`.
5. Links render conditionally: an empty/whitespace `demo`, `github`, or `paper` string is filtered out, so absent links never appear as buttons.

## Validation commands run

| Command | Result |
| --- | --- |
| `npm run build` (`tsc -b && vite build`) | ✅ **Passed** — no TypeScript errors, built in ~6.5s. |
| `npm run lint` (`eslint .`) | ⚠️ **Pre-existing config failure** — every file (including untouched ones like `vite.config.ts`) reports the same `Parsing error: "parserOptions.project" ... file was not found in any of the provided project(s)`. This is an existing ESLint/tsconfig misconfiguration unrelated to this change; no rule violations specific to the new code were reported. |

## What was intentionally left unchanged

- All project and research **data** in `prj-work.tsx` (descriptions, links, etc.).
- The `ResearchCard` component and the Skills section.
- Card layout, the `line-clamp-5` truncation on the card (cards stay compact as requested).
- Existing Tailwind/animation styling and the shared Dialog component.
- The pre-existing ESLint configuration (out of scope; not introduced by this change).

## Risks / caveats

- **ESLint config** is broken repo-wide and was not fixed here — `npm run lint` cannot currently be used as a gate. Type safety was validated via `npm run build` instead.
- The optional `paper?` field on `Project` is currently unused by any project entry; it is forward-compatible and renders only when populated.
- `ProjectCard` uses `role="button"` on a `div` (to preserve the existing nested anchors). This is keyboard-accessible, though a future refactor could split the links out of the clickable region.

## Git status after completion

```
 M src/data/prj-work.tsx
 M src/modules/portfolio/pages/portfolio-page.tsx
?? src/modules/portfolio/components/   (ProjectModal.tsx)
```
No commits were made.

## Recommended next steps

1. Fix the repo-wide ESLint `parserOptions.project` configuration so linting can run.
2. Optionally add the same click-to-detail modal to `ResearchCard` (it already has a matching shape with `paper`/`github`).
3. Optionally lazy-load / compress the large project images flagged in the build output (several >1 MB).
4. Manual QA: verify Escape, backdrop click, and the close button on both desktop and mobile widths.
