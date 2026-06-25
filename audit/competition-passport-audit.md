# Competition Passport Strip + Neon Identity Rail — Audit

**Date:** 2026-06-18
**Scope:** Add a unique competition-metadata display system to project cards that belong to a competition — without adding any new overlay on top of the thumbnail.

> Note: the project's established convention is a `audit/` directory with descriptive `*-audit.md` filenames (`project-modal-audit.md`, `project-section-split-audit.md`). This file follows that convention rather than a separate numbered `audits/` directory.

## Files changed

| File | Change |
| --- | --- |
| `src/data/prj-work.tsx` | Added `Competition` type, added optional `competition?: Competition` to `Project`, and populated competition data for **Sim2Real-ReID** and **FastMCQ Agent**. |
| `src/index.css` | Added CSS for `.competition-rail` (+ scanner keyframes), `.competition-pill`, `.competition-passport` (+ holographic sweep), `.competition-passport__full` reveal, and a `prefers-reduced-motion` block. |
| `src/modules/portfolio/pages/portfolio-page.tsx` | Imported `Trophy`; in `ProjectCard` added the `has-competition` class + left rail, the title-row competition pill, and the passport strip between thumbnail and content. |
| `audit/competition-passport-audit.md` | This audit. |

## Data structure changes

```ts
export type Competition = {
  name: string;
  subtitle: string;
  short: string;
  url?: string;
};

export type Project = {
  // ...existing fields...
  competition?: Competition;   // added (optional)
};
```

Example data added:

- **Sim2Real-ReID** → `{ name: "AI City Challenge 2026", subtitle: "Track 4 · Co-hosted with ECCV 2026", short: "AIC 2026" }`
- **FastMCQ Agent** → `{ name: "Vietnamese Student HackAIthon 2026", subtitle: "BTC Evaluation", short: "HackAIthon 2026" }`

No existing data was removed or rewritten; only the new optional field was added.

## UI behavior added

Only cards where `project.competition` is set (`.has-competition`) get the new treatment; all other cards are byte-for-byte unchanged.

1. **Neon identity rail** (`.competition-rail`) — a 2.5px gradient rail (teal → purple) on the card's left edge with a vertical scanner dot that travels top→bottom. Brightens slightly on hover. `aria-hidden`.
2. **Competition pill** (`.competition-pill`) — a small, rounded, glassy neon pill with a trophy icon + `competition.short`, placed in a wrapping flex row beside the title so it never breaks the layout. Visually distinct from the emerald tech tags.
3. **Passport strip** (`.competition-passport`) — a thin holographic credential bar **below the thumbnail, outside the image**:
   - Default: trophy + `competition.short` + (on ≥sm) a truncated `subtitle` fragment.
   - Hover / focus-within: smoothly expands to reveal the full `competition.name` and `subtitle` (`.competition-passport__full`, `grid-template-rows 0fr→1fr`), plus a soft holographic sweep (`::before`).
4. **Untouched:** thumbnail image, category badge (top-left), year badge (top-right), View details action (bottom-right), title, description, tags, and code links. No new overlay was added on top of the thumbnail. Competition metadata is kept entirely separate from the normal tech tags.

## Animation / accessibility notes

- **CSS-based** animations only (the card uses Tailwind/CSS transitions, not Framer Motion), so no new dependency or JS.
- **`prefers-reduced-motion: reduce`** disables the scanner travel (dot becomes a static glow) and the holographic sweep transition; the reveal degrades to a short opacity fade. Static styling stays fully legible.
- The full reveal also triggers on `:focus-within`, so keyboard users (the card is `tabIndex=0`) get the expanded info, not just mouse hover.
- Pill carries an `aria-label`; the rail is `aria-hidden`; the passport has an `aria-label` naming the competition.
- Contrast: teal text (`text-teal-200/100`) on the dark glass strip stays within readable range against the `zinc-900` card.

## Responsive behavior

- Title row uses `flex-wrap`, so the pill drops to a new line gracefully instead of overflowing.
- Passport short row uses `min-w-0` + `truncate`; the subtitle fragment is hidden below `sm` to avoid crowding.
- Full-reveal texts use `truncate` so long names never overflow horizontally.
- Rail is a thin 2.5px element; unobtrusive on small screens.

## Validations run

| Command | Result |
| --- | --- |
| `npm run build` (`tsc -b && vite build`) | ✅ Passed, no TypeScript errors (~6s). |
| `npm run lint` | Not used as a gate — pre-existing repo-wide `parserOptions.project` ESLint misconfiguration fails on every file regardless of this change (documented in `project-modal-audit.md`). |

## Manual checks (recommended, not yet run in a browser)

- Verify the two competition cards (Sim2Real-ReID, FastMCQ Agent) show rail + pill + passport; non-competition cards look identical to before.
- Hover a competition card → passport expands to full name + subtitle with a sweep; scanner dot travels the rail.
- Toggle OS "reduce motion" → scanner/sweep stop; layout/text remain readable.
- Resize to mobile width → no horizontal overflow; pill wraps under the title if needed.

## Risks / caveats

- `grid-template-rows: 0fr → 1fr` reveal relies on a modern browser (fine for this Vite/React 19 app; degrades to a non-animated show on very old engines).
- The rail overlaps the extreme left 2.5px edge of the whole card (including beside the image) by design — it is a card-edge rail, not a thumbnail overlay badge, so it satisfies the "no new thumbnail overlay" constraint.
- `competition` is **not** surfaced in the detail modal (`ProjectModal`) — out of scope for this task; can be added later if desired.
- The passport hover-reveal has no hover on touch devices; the default short state is intentionally self-sufficient (short name + subtitle fragment).

## Git status after completion

```
 M src/data/prj-work.tsx
 M src/index.css
 M src/modules/portfolio/pages/portfolio-page.tsx
?? audit/competition-passport-audit.md
```
(plus prior uncommitted work from earlier tasks). No commits were made.

## Recommended next steps

1. Manual QA in the browser per the checklist above (desktop + mobile + reduced-motion).
2. Optionally surface `competition` (as the same pill) inside `ProjectModal` for consistency.
3. If `competition.url` is later populated, make the pill/passport a link (with `stopPropagation` so it doesn't open the modal).
4. Optionally fix the repo-wide ESLint `parserOptions.project` config so `npm run lint` can run.
