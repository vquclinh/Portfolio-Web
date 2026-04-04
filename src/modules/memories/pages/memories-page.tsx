import { memories, type MemoryCategory } from "../../../data/memories";

const CATEGORIES: MemoryCategory[] = ["Scholarship", "Math Team", "University", "12T1 - Le Khiet High School for The Gifted", "Life"];

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
        return (
          <div
            key={memory.id}
            className={`
              overflow-hidden rounded-xl break-inside-avoid bg-zinc-800 cursor-pointer
              ${isTall ? "h-80" : isWide ? "h-48" : "h-60"}
            `}
          >
            {memory.image && (
              <img
                src={memory.image}
                alt={memory.id}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            )}
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