import { memories, type MemoryCategory } from "../../../data/memories";

const CATEGORIES: MemoryCategory[] = ["Scholarship", "Work", "University", "High School", "Life"];

const CATEGORY_COLOR: Record<MemoryCategory, string> = {
  Scholarship: "bg-amber-950/60  text-amber-300  border-amber-800/40",
  Work:        "bg-teal-950/60   text-teal-300   border-teal-800/40",
  University:  "bg-sky-950/60    text-sky-300    border-sky-800/40",
  "High School":"bg-violet-950/60 text-violet-300 border-violet-800/40",
  Life:        "bg-pink-950/60   text-pink-300   border-pink-800/40",
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <p className="text-xs tracking-[0.25em] text-zinc-200 uppercase shrink-0">{children}</p>
      <div className="h-px flex-1 bg-zinc-700" />
    </div>
  );
}

function MemoryGrid({ items }: { items: typeof memories }) {
  if (items.length === 0) return null;
  return (
    <div className="columns-2 md:columns-3 gap-3 space-y-3">
      {items.map((memory, i) => {
        const isTall = i % 5 === 0 || i % 5 === 3;
        const isWide = i % 7 === 1;
        const tagColor = CATEGORY_COLOR[memory.category];

        return (
          <div
            key={memory.id}
            className={`
              group relative overflow-hidden rounded-xl break-inside-avoid
              ${isTall ? "h-80" : isWide ? "h-48" : "h-60"}
              bg-zinc-800 cursor-pointer
            `}
          >
            {memory.image && (
              <img
                src={memory.image}
                alt={memory.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            )}

            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-zinc-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <p className="text-[10px] tracking-widest text-zinc-400 uppercase mb-1">
                {memory.date}
              </p>
              <h3 className="text-sm font-semibold text-white leading-snug">
                {memory.title}
              </h3>
              <span className={`mt-2 inline-block px-2 py-0.5 rounded text-[10px] border w-fit ${tagColor}`}>
                {memory.category}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function MemoriesPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="pt-24" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-16">

        <div>
          <p className="text-xs tracking-[0.25em] text-zinc-500 uppercase mb-3">Personal Stories</p>
          <h1 className="text-4xl font-bold tracking-tight">Memories</h1>
          <div className="mt-4 h-px w-16 bg-gradient-to-r from-zinc-400 to-transparent" />
        </div>

        {CATEGORIES.map((cat) => {
          const items = memories.filter((m) => m.category === cat);
          if (items.length === 0) return null;
          return (
            <section key={cat}>
              <SectionLabel>{cat}</SectionLabel>
              <MemoryGrid items={items} />
            </section>
          );
        })}

        {memories.length === 0 && (
          <div className="text-center py-32">
            <p className="text-zinc-600 text-sm">No memories yet.</p>
          </div>
        )}

      </div>
    </div>
  );
}