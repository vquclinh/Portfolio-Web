import { ExternalLink, Github, FlaskConical, Bot, Gamepad2, Globe, Layers, Code2, Cpu, ArrowUpRight, AppWindow } from "lucide-react";
import type { ElementType } from "react";
import { research, projects, skills, type ProjectDomain } from "../../../data/prj-work";

// Domain config
const DOMAIN_CONFIG: Record<ProjectDomain, {
  icon: ElementType;
  label: string;
  color: string;
}> = {
  AI:   { icon: Bot,        label: "AI",  color: "text-teal-400  bg-teal-950/50  border-teal-800/50"  },
  Game: { icon: Gamepad2,   label: "Game",color: "text-amber-400 bg-amber-950/50 border-amber-800/50" },
  Web:  { icon: Globe,      label: "Web", color: "text-sky-400   bg-sky-950/50   border-sky-800/50"   },
  App:  { icon: AppWindow,  label: "App", color: "text-rose-400  bg-rose-950/50  border-rose-800/50"  },
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
      <p className="text-xs tracking-[0.25em] text-zinc-500 uppercase shrink-0">{children}</p>
      <div className="h-px flex-1 bg-zinc-800" />
    </div>
  );
}

// Research Card
function ResearchCard({ item }: { item: (typeof research)[number] }) {
  return (
    <div className="group rounded-xl border border-zinc-800 bg-zinc-900 hover:border-violet-800/60 transition-all duration-200 overflow-hidden flex flex-col">

      <div className="relative h-50 overflow-hidden bg-zinc-800 shrink-0">
        {item.image && (
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover opacity-100 group-hover:opacity-70 group-hover:scale-[1.03] transition-all duration-300"
          />
        )}
        <div className="absolute top-2.5 left-2.5">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] border font-medium text-violet-300 bg-violet-950/70 border-violet-800/50">
            <FlaskConical className="w-2.5 h-2.5" />
            Research
          </span>
        </div>
        <span className="absolute top-2.5 right-2.5 text-[10px] text-zinc-500 bg-zinc-900/70 px-2 py-0.5 rounded">
          {item.date}
        </span>
      </div>

      <div className="p-5 flex flex-col flex-1 gap-4">
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-white mb-2 leading-snug">{item.title}</h3>
          <p className="text-xs text-zinc-500 leading-relaxed line-clamp-5">{item.description}</p>
        </div>

        <div className="flex flex-wrap gap-1">
          {item.tags.map((tag) => (
             <span key={tag} className="px-2 py-0.5 rounded text-[10px] bg-violet-950/40 text-violet-300 border border-violet-800/30">
                {tag}
             </span>
          ))}
        </div>

        <div className="flex gap-3 pt-3 border-t border-zinc-800">
          {item.paper && (
            <a href={item.paper} className="flex items-center gap-1 text-xs text-zinc-400 hover:text-violet-300 transition-colors">
              <ArrowUpRight className="w-3 h-3" /> Paper
            </a>
          )}
          {item.github && (
            <a href={item.github} className="flex items-center gap-1 text-xs text-zinc-400 hover:text-violet-300 transition-colors">
              <Github className="w-3 h-3" /> Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// Project Card
function ProjectCard({ item }: { item: (typeof projects)[number] }) {
  const config     = DOMAIN_CONFIG[item.domain];
  const DomainIcon = config.icon;

  return (
    <div className="group rounded-xl border border-zinc-800 bg-zinc-900 hover:border-zinc-600 transition-all duration-200 overflow-hidden flex flex-col">

      <div className="relative h-50 overflow-hidden bg-zinc-800 shrink-0">
        {item.image && (
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover opacity-100 group-hover:opacity-70 group-hover:scale-[1.03] transition-all duration-300"
          />
        )}
        <div className="absolute top-2.5 left-2.5">
          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] border font-medium ${config.color}`}>
            <DomainIcon className="w-2.5 h-2.5" />
            {config.label}
          </span>
        </div>
        <span className="absolute top-2.5 right-2.5 text-[10px] text-zinc-500 bg-zinc-900/70 px-2 py-0.5 rounded">
          {item.date}
        </span>
      </div>

      <div className="p-5 flex flex-col flex-1 gap-3">
        <div>
          <h3 className="text-sm font-semibold text-white mb-2">{item.title}</h3>
          <p className="text-xs text-zinc-500 leading-relaxed line-clamp-5">{item.description}</p>
        </div>

        <div className="flex flex-wrap gap-1 mt-auto pt-1">
          {item.tags.map((tag) => (
             <span key={tag} className="px-2 py-0.5 rounded text-[10px] bg-zinc-800 text-zinc-400 border border-zinc-700/40">
                {tag}
             </span>
          ))}
        </div>

        <div className="flex gap-3 pt-3 border-t border-zinc-800">
          {item.demo && (
            <a href={item.demo} className="flex items-center gap-1 text-xs text-zinc-400 hover:text-white transition-colors">
              <ExternalLink className="w-3 h-3" /> Demo
            </a>
          )}
          {item.github && (
            <a href={item.github} className="flex items-center gap-1 text-xs text-zinc-400 hover:text-white transition-colors">
              <Github className="w-3 h-3" /> Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export function PortfolioPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="pt-24" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-16">

        <div>
          <p className="text-xs tracking-[0.25em] text-zinc-500 uppercase mb-3">Work & Projects</p>
          <h1 className="text-4xl font-bold tracking-tight">Portfolio</h1>
          <div className="mt-4 h-px w-16 bg-gradient-to-r from-zinc-400 to-transparent" />
        </div>

        <section>
          <SectionLabel>Research</SectionLabel>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {research.map((item) => <ResearchCard key={item.id} item={item} />)}
          </div>
        </section>

        <section>
          <SectionLabel>Projects</SectionLabel>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((item) => <ProjectCard key={item.id} item={item} />)}
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
                    <GroupIcon className="w-3.5 h-3.5 text-zinc-500" />
                    <span className="text-[10px] tracking-widest text-zinc-500 uppercase">{group.label}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((skill) => (
                      <span key={skill} className="px-2.5 py-1 rounded-md text-xs bg-zinc-800 text-zinc-300 border border-zinc-700/40 hover:border-zinc-500 hover:text-white transition-colors cursor-default">
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
    </div>
  );
}