# CV PDF Viewer Fit — Audit

**Date:** 2026-07-04
**Scope:** Fix the embedded Curriculum Vitae PDF viewer so it opens fitted to the viewer area with the document outline/sidebar closed by default.

## Files changed

| File | Change |
| --- | --- |
| `src/modules/cv/pages/cv-page.tsx` | Updated the embedded PDF iframe URL fragment parameters, made the iframe height responsive with `clamp()`, and constrained the PDF window to a centered `max-w-4xl`. |
| `audit/cv-pdf-viewer-fit-audit.md` | Created this audit note. |

## What was fixed

- The embedded CV PDF no longer relies only on `view=FitH`, which left the browser/PDF viewer free to open at 100%.
- The iframe now requests an initial page-width fit so the white PDF page uses the available dark viewer area more naturally.
- The viewer now requests the first page on load and asks the PDF viewer to keep the outline/sidebar closed by default.
- The existing `Download` and `Open PDF` buttons still point to the raw `cvUrl`, so they are not affected by viewer-only hash parameters.
- The viewer height now uses `h-[clamp(420px,74vh,860px)]` instead of a fixed `72vh` plus desktop-oriented minimum height.
- The PDF window is now centered and capped at `max-w-4xl`, so the page fits into a narrower dark viewer instead of stretching across the full `max-w-6xl` content area.

## Exact implementation approach used

The CV page still uses the browser/native PDF iframe approach. The viewer URL is now built with `URLSearchParams`:

```ts
const cvViewerParams = new URLSearchParams({
  page: "1",
  zoom: "page-width",
  pagemode: "none",
  toolbar: "1",
  navpanes: "0",
  view: "FitH",
});
const cvViewerUrl = `${cvUrl}#${cvViewerParams.toString()}`;
```

- `zoom=page-width` targets PDF.js-style fit-width behavior.
- `pagemode=none` asks PDF.js-compatible viewers to keep the sidebar closed.
- `navpanes=0` is kept as a compatibility hint for browser/Adobe-style PDF parameters.
- `view=FitH` is kept as an additional fit-width style hint for viewers that honor PDF Open Parameters.

## Validation commands run and results

| Command | Result |
| --- | --- |
| `npm run build` | Passed. TypeScript and Vite production build completed successfully. |
| `npm run lint` | Failed before rule checks due to the existing repo-wide ESLint `parserOptions.project` issue: every TS/TSX file reports “file was not found in any of the provided project(s)”. |
| `curl -I http://127.0.0.1:5173/cv` | Passed. Returned `HTTP/1.1 200 OK`. |
| `curl -I http://127.0.0.1:5173/src/data/CV.pdf` | Passed. Returned `HTTP/1.1 200 OK` with `Content-Type: application/pdf`. |
| `curl -s http://127.0.0.1:5173/src/modules/cv/pages/cv-page.tsx` | Passed. Served module includes `zoom: "page-width"`, `pagemode: "none"`, `navpanes: "0"`, and `view: "FitH"`. |

## Screenshots / manual checks needed

- Open `http://127.0.0.1:5173/cv` in the target browser and confirm the PDF initially fills the viewer width instead of opening at 100%.
- Confirm the document outline/sidebar is closed on first load.
- Resize the browser window and confirm the PDF viewer remains usable and the container height responds.
- Click `Download` and confirm it downloads `Vo-Quoc-Linh-CV.pdf`.
- Click `Open PDF` and confirm it opens the raw PDF in a new tab.

## Risks or caveats

- Browser-native PDF viewers vary in how much of the PDF URL fragment they honor. The implementation includes PDF.js-style and PDF Open Parameter-style hints, but exact toolbar/sidebar behavior can differ between Chrome, Edge, Firefox, and Safari.
- If strict, identical behavior across browsers is required later, use an app-controlled PDF.js viewer or `react-pdf` with a measured container width.
- ESLint remains blocked by the existing project configuration issue and was not repaired as part of this focused viewer change.

## Git status

Expected status after this audit file is added:

```text
 M src/App.tsx
 M src/modules/home/components/hero-section.tsx
 M src/shared/components/layout/nav-bar.tsx
?? audit/cv-pdf-viewer-fit-audit.md
?? src/data/CV.pdf
?? src/modules/cv/
```

## Recommended next steps

1. Manually verify the `/cv` page in the browsers you care about most, especially Chrome and Safari.
2. Commit `src/data/CV.pdf` with the CV route files so the deployed site can bundle the asset.
3. Fix the repo-wide ESLint `parserOptions.project` configuration so `npm run lint` can be used as a normal validation gate.
4. Consider a dedicated PDF.js/`react-pdf` implementation only if browser-native PDF behavior is not consistent enough.
