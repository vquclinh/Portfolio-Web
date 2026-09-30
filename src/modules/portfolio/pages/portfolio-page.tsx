import { ExternalLink, Github, Bot, Gamepad2, Globe, Layers, Code2, Cpu, ArrowUpRight, AppWindow, Trophy, BookOpen, FileText, Presentation } from "lucide-react";
import { useState, type ElementType } from "react";
import { publications, projects, skills, type Publication, type Project, type ProjectDomain } from "../../../data/prj-work";
import { ProjectModal, type ProjectModalItem } from "../components/ProjectModal";

// Domain config
const DOMAIN_CONFIG: Record<ProjectDomain, {
  icon: ElementType;
  label: string;
  color: string;
}> = {
  AI:                    { icon: Bot,        label: "AI",    color: "text-teal-400  bg-teal-950/50   border-teal-800/50"   },
  Game:                  { icon: Gamepad2,   label: "Game",  color: "text-amber-400 bg-amber-950/50  border-amber-800/50"  },
  Web:                   { icon: Globe,      label: "Web",   color: "text-sky-400   bg-sky-950/50    border-sky-800/50"    },
  App:                   { icon: AppWindow,  label: "App",   color: "text-rose-400  bg-rose-950/50   border-rose-800/50"   },
  "Tool/Infrastructure": { icon: Cpu,        label: "Infra", color: "text-violet-300 bg-violet-950/50 border-violet-800/50" },
  "App/TUI":             { icon: Code2,      label: "TUI",   color: "text-lime-300  bg-lime-950/50   border-lime-800/50"   },
};

// Skill groups
type SkillGroup = { label: string; icon: ElementType; items: string[] };
const SKILL_GROUPS: SkillGroup[] = [
  { label: "Frontend",      icon: Layers, items: skills.slice(0, 6)  },
  { label: "Backend",       icon: Code2,  items: skills.slice(6, 12) },
  { label: "Tools & Infra", icon: Cpu,    items: skills.slice(12)    },
];

// Section label
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <p className="text-xs tracking-[0.25em] text-zinc-50 uppercase shrink-0">{children}</p>
      <div className="h-px flex-1 bg-zinc-400" />
    </div>
  );
}

function projectToModalItem(item: Project): ProjectModalItem {
  const config = DOMAIN_CONFIG[item.domain];
  return {
    title: item.title,
    date: item.date,
    description: item.description,
    image: item.image,
    tags: item.tags,
    badge: { label: config.label, icon: config.icon, color: config.color },
    accent: "emerald",
    demo: item.demo,
    github: item.github,
    paper: item.paper,
  };
}

// Publication Panel
function PublicationPanel({ item }: { item: Publication }) {
  const paperUrl = item.paperUrl?.trim();
  const githubUrl = item.githubUrl?.trim();
  const posterUrl = item.posterUrl?.trim();
  const proceedingsUrl = item.proceedingsUrl?.trim();

  return (
    <article className="rounded-lg border border-zinc-800 bg-zinc-900/80 p-4 sm:p-5">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="min-w-0 flex-1">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-md border border-cyan-800/50 bg-cyan-950/45 px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.14em] text-cyan-200">
              <BookOpen className="h-3 w-3" />
              Paper
            </span>
            <span className="text-xs text-zinc-500">{item.date}</span>
          </div>

          <h3 className="text-base font-semibold leading-snug text-cyan-200 sm:text-lg">
            {item.title}
          </h3>
          <p className="mt-1.5 text-sm text-zinc-100">{item.authors}</p>

          <div className="mt-2 flex flex-wrap items-center gap-2">
            <span className="text-sm text-zinc-300">{item.venue}</span>
            {item.venueTag && (
              <span className="rounded border border-amber-700/40 bg-amber-950/25 px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.14em] text-amber-200">
                {item.venueTag}
              </span>
            )}
          </div>
        </div>

        <div className="flex shrink-0 flex-wrap gap-2 md:w-36 md:flex-col">
          {paperUrl && (
            <a
              href={paperUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-zinc-700 bg-zinc-950 px-3 py-2 text-xs font-medium text-zinc-200 transition-colors hover:border-cyan-700 hover:text-cyan-200"
            >
              <FileText className="h-3.5 w-3.5" />
              Paper PDF
            </a>
          )}
          {posterUrl && (
            <a
              href={posterUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-zinc-700 bg-zinc-950 px-3 py-2 text-xs font-medium text-zinc-200 transition-colors hover:border-cyan-700 hover:text-cyan-200"
            >
              <Presentation className="h-3.5 w-3.5" />
              Poster
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-zinc-700 bg-zinc-950 px-3 py-2 text-xs font-medium text-zinc-200 transition-colors hover:border-cyan-700 hover:text-cyan-200"
            >
              <Github className="h-3.5 w-3.5" />
              GitHub
            </a>
          )}
          {proceedingsUrl ? (
            <a
              href={proceedingsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-zinc-700 bg-zinc-950 px-3 py-2 text-xs font-medium text-zinc-200 transition-colors hover:border-cyan-700 hover:text-cyan-200"
            >
              <ArrowUpRight className="h-3.5 w-3.5" />
              Proceedings
            </a>
          ) : (
            <button
              type="button"
              disabled
              title="Link will be added once the paper appears in the proceedings."
              className="inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-md border border-zinc-800 bg-zinc-950/60 px-3 py-2 text-xs font-medium text-zinc-500"
            >
              <ArrowUpRight className="h-3.5 w-3.5" />
              Proceedings
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

// Project Card
function ProjectCard({ item, onSelect }: { item: Project; onSelect: (modalItem: ProjectModalItem) => void }) {
  const config     = DOMAIN_CONFIG[item.domain];
  const DomainIcon = config.icon;

  // Keep the inner links working as direct navigation without triggering the card's detail modal.
  const stop = (e: React.MouseEvent) => e.stopPropagation();
  const comp = item.competition;

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`View details for ${item.title}`}
      onClick={() => onSelect(projectToModalItem(item))}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(projectToModalItem(item));
        }
      }}
      className={`group relative cursor-pointer rounded-xl border border-zinc-800 bg-zinc-900 hover:border-emerald-900/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 transition-all duration-200 overflow-hidden flex flex-col${comp ? " has-competition" : ""}`}
    >
      <span className="competition-rail" aria-hidden="true" />

      <div className="relative h-50 overflow-hidden bg-zinc-800 shrink-0">
        {item.image && (
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover opacity-100 group-hover:opacity-80 group-hover:scale-[1.08] transition-all duration-500"
          />
        )}
        <div className="absolute top-2.5 left-2.5">
          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] border font-medium ${config.color}`}>
            <DomainIcon className="w-2.5 h-2.5" />
            {config.label}
          </span>
        </div>
        <span className="absolute top-2.5 right-2.5 text-[10px] text-zinc-100 bg-zinc-900/70 px-2 py-0.5 rounded">
          {item.date}
        </span>
        <span className="absolute bottom-2.5 right-2.5 inline-flex items-center gap-1 rounded bg-zinc-900/80 px-2 py-0.5 text-[10px] text-emerald-300 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
          View details <ArrowUpRight className="w-2.5 h-2.5" />
        </span>
      </div>

      {comp && (
        <div className="competition-passport px-4 py-1.5" aria-label={`Competition: ${comp.name}`}>
          <div className="competition-passport__short flex items-center gap-2 min-w-0">
            <Trophy className="w-3 h-3 shrink-0 text-teal-300" />
            <span className="text-[11px] font-semibold text-teal-200 whitespace-nowrap">{comp.short}</span>
            <span className="hidden sm:block text-[10px] text-zinc-400 truncate">{comp.subtitle}</span>
          </div>
          <div className="competition-passport__full">
            <div>
              <p className="text-[11px] font-medium text-teal-100 truncate">{comp.name}</p>
              <p className="text-[10px] text-zinc-300/90 truncate">{comp.subtitle}</p>
            </div>
          </div>
        </div>
      )}

      <div className="p-5 flex flex-col flex-1 gap-3">
        <div>
          <div className="flex items-center flex-wrap gap-2 mb-2">
            <h3 className="text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors duration-200">{item.title}</h3>
            {comp && (
              <span className="competition-pill" aria-label={`Competition entry: ${comp.name}`}>
                <Trophy className="w-2.5 h-2.5" aria-hidden="true" />
                {comp.short}
              </span>
            )}
          </div>
          <p className="text-xs text-zinc-300 leading-relaxed line-clamp-5">{item.description}</p>
        </div>

        <div className="flex flex-wrap gap-1 mt-auto pt-1">
          {item.tags.map((tag) => (
             <span key={tag} className="px-2 py-0.5 rounded text-[10px] bg-emerald-950/50 text-emerald-300 border-emerald-800/40">
               {tag}
             </span>
          ))}
        </div>

        <div className="flex gap-3 pt-3 border-t border-zinc-800">
          {item.demo && (
            <a href={item.demo} target="_blank" rel="noreferrer" onClick={stop} className="flex items-center gap-1 text-xs text-zinc-400 hover:text-emerald-300 transition-colors">
              <ExternalLink className="w-3 h-3" /> Demo
            </a>
          )}
          {item.github && (
            <a href={item.github} target="_blank" rel="noreferrer" onClick={stop} className="flex items-center gap-1 text-xs text-zinc-400 hover:text-emerald-300 transition-colors">
              <Github className="w-3 h-3" /> Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export function PortfolioPage() {
  const [selectedItem, setSelectedItem] = useState<ProjectModalItem | null>(null);

  const featuredProjects = projects.filter((project) => project.section === "featured");
  const archiveProjects  = projects.filter((project) => project.section === "archive");

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="pt-24" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-16">

        <div>
          <p className="text-xs tracking-[0.25em] text-zinc-500 uppercase mb-3">Work & Projects</p>
          <h1 className="text-4xl font-bold tracking-tight">Portfolio</h1>
          <div className="mt-4 h-px w-16 bg-gradient-to-r from-zinc-400 to-transparent" />
        </div>

        {publications.length > 0 && (
          <section>
            <SectionLabel>Publications</SectionLabel>
            <div className="space-y-4">
              {publications.map((item) => <PublicationPanel key={item.id} item={item} />)}
            </div>
          </section>
        )}

        <section>
          <SectionLabel>Featured Work</SectionLabel>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredProjects.map((item) => <ProjectCard key={item.id} item={item} onSelect={setSelectedItem} />)}
          </div>
        </section>

        <section>
          <SectionLabel>Project Archive</SectionLabel>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {archiveProjects.map((item) => <ProjectCard key={item.id} item={item} onSelect={setSelectedItem} />)}
          </div>
        </section>

        <section>
          <SectionLabel>Skills & Tools</SectionLabel>
          <div className="grid sm:grid-cols-3 gap-4">
            {SKILL_GROUPS.map((group) => {
              const GroupIcon = group.icon;
              return (
                <div key={group.label} className="rounded-xl border border-zinc-800 bg-zinc-900 p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <GroupIcon className="w-3.5 h-3.5 text-zinc-200" />
                    <span className="text-[10px] tracking-widest text-zinc-200 uppercase">{group.label}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((skill) => (
                      <span key={skill} className="px-2.5 py-1 rounded-md text-xs bg-zinc-700 text-zinc-200 border border-zinc-700/40 hover:border-zinc-500 hover:text-white transition-colors cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

      </div>

      <ProjectModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </div>
  );
}
