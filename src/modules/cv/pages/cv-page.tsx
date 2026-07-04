import { Download, ExternalLink, FileText } from "lucide-react";

import { Button } from "@/shared/components/ui/button";

const cvUrl = new URL("../../../data/CV.pdf", import.meta.url).href;
const cvViewerParams = new URLSearchParams({
  page: "1",
  zoom: "page-width",
  pagemode: "none",
  toolbar: "1",
  navpanes: "0",
  view: "FitH",
});
const cvViewerUrl = `${cvUrl}#${cvViewerParams.toString()}`;

export function CVPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="pt-24" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs tracking-[0.25em] text-zinc-500 uppercase mb-3">
              Resume
            </p>
            <div className="flex items-center gap-3">
              <FileText className="size-8 text-zinc-300" />
              <h1 className="text-4xl font-bold tracking-tight">Curriculum Vitae</h1>
            </div>
            <div className="mt-4 h-px w-16 bg-gradient-to-r from-zinc-400 to-transparent" />
          </div>

          <div className="flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="bg-white text-black hover:bg-zinc-200"
            >
              <a href={cvUrl} download="Vo-Quoc-Linh-CV.pdf">
                <Download className="size-4" />
                Download
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-transparent text-white border-white/20 hover:bg-white/10 hover:text-white"
            >
              <a href={cvUrl} target="_blank" rel="noreferrer">
                <ExternalLink className="size-4" />
                Open PDF
              </a>
            </Button>
          </div>
        </div>

        <section className="mx-auto mt-8 max-w-4xl overflow-hidden rounded-lg border border-white/10 bg-zinc-900 shadow-2xl shadow-black/40">
          <iframe
            title="Vo Quoc Linh CV"
            src={cvViewerUrl}
            className="block h-[clamp(420px,74vh,860px)] w-full bg-zinc-900"
          />
        </section>
      </div>
    </div>
  );
}
