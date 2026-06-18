import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import type { ElementType } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/shared/components/ui/dialog";

export type ModalBadge = { label: string; icon: ElementType; color: string };

/** Normalized shape so projects and research render in the exact same modal. */
export type ProjectModalItem = {
  title: string;
  date: string;
  description: string;
  image: string;
  tags: string[];
  badge: ModalBadge;
  accent: "emerald" | "cyan";
  demo?: string;
  github?: string;
  paper?: string;
};

type ProjectModalProps = {
  /** The selected item, or null when the modal is closed. */
  item: ProjectModalItem | null;
  /** Called whenever the dialog requests to close (button / backdrop / Escape). */
  onClose: () => void;
};

type ModalLink = { href: string; label: string; icon: ElementType };

const ACCENT: Record<ProjectModalItem["accent"], { tag: string; link: string }> = {
  emerald: {
    tag: "border-emerald-800/40 bg-emerald-950/50 text-emerald-300",
    link: "hover:border-emerald-700 hover:text-emerald-300",
  },
  cyan: {
    tag: "border-cyan-800/30 bg-cyan-950/40 text-cyan-300",
    link: "hover:border-cyan-700 hover:text-cyan-300",
  },
};

export function ProjectModal({ item, onClose }: ProjectModalProps) {
  const BadgeIcon = item?.badge.icon;
  const accent = item ? ACCENT[item.accent] : ACCENT.emerald;

  // Only render links that actually exist — empty strings are skipped.
  const links: ModalLink[] = item
    ? [
        { href: item.demo ?? "", label: "Demo", icon: ExternalLink },
        { href: item.github ?? "", label: "Code", icon: Github },
        { href: item.paper ?? "", label: "Paper", icon: ArrowUpRight },
      ].filter((link) => link.href.trim() !== "")
    : [];

  return (
    <Dialog open={item !== null} onOpenChange={(open) => !open && onClose()}>
      {/* Uniform width + image; height hugs the content and only scrolls when it would overflow the viewport. */}
      <DialogContent className="flex max-h-[85vh] w-full max-w-2xl flex-col gap-0 overflow-hidden border-zinc-800 bg-zinc-900 p-0 text-white">
        {item && BadgeIcon && (
          <>
            <div className="relative h-56 w-full shrink-0 overflow-hidden bg-zinc-800">
              {item.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              )}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent" />
              <span
                className={`absolute top-3 left-3 inline-flex items-center gap-1 rounded border px-2 py-0.5 text-[10px] font-medium ${item.badge.color}`}
              >
                <BadgeIcon className="h-2.5 w-2.5" />
                {item.badge.label}
              </span>
              <span className="absolute top-3 right-12 rounded bg-zinc-900/70 px-2 py-0.5 text-[10px] text-zinc-100">
                {item.date}
              </span>
            </div>

            <div className="flex min-h-0 flex-col gap-4 overflow-y-auto p-6">
              <DialogHeader className="gap-1 text-left">
                <DialogTitle className="text-lg font-semibold text-white">
                  {item.title}
                </DialogTitle>
                <DialogDescription className="text-xs text-zinc-400">
                  {item.badge.label} · {item.date}
                </DialogDescription>
              </DialogHeader>

              <p className="text-sm leading-relaxed text-zinc-300">
                {item.description}
              </p>

              {item.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`rounded border px-2 py-0.5 text-[10px] ${accent.tag}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {links.length > 0 && (
                <div className="flex flex-wrap gap-3 border-t border-zinc-800 pt-4">
                  {links.map(({ href, label, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className={`inline-flex items-center gap-1.5 rounded-md border border-zinc-700 px-3 py-1.5 text-xs text-zinc-300 transition-colors ${accent.link}`}
                    >
                      <Icon className="h-3.5 w-3.5" /> {label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
