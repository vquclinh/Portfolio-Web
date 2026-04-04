import { timelineEvents } from "../../../data/timeline";

export function TimelinePage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="pt-24" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">

        {/* Header */}
        <div className="mb-16">
          <p className="text-xs tracking-[0.25em] text-zinc-500 uppercase mb-3">My Journey</p>
          <h1 className="text-4xl font-bold tracking-tight">Timeline</h1>
          <div className="mt-4 h-px w-16 bg-gradient-to-r from-zinc-400 to-transparent" />
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Đường đứt giữa */}
          <div
            className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2"
            style={{
              width: "1px",
              backgroundImage: "repeating-linear-gradient(to bottom, #52525b 0px, #52525b 6px, transparent 6px, transparent 12px)",
            }}
          />

          <div className="space-y-10">
            {timelineEvents.map((event, i) => {
              const isLeft = i % 2 === 0;

              const Card = (
               <div className="rounded-xl border border-zinc-700 bg-zinc-900 hover:border-zinc-500 hover:bg-zinc-800/80 transition-all duration-200 p-4 max-w-xs">
                  <p className="text-base font-semibold text-zinc-200 mb-2 tracking-wide">
                     {event.date}
                  </p>
                  <div className="h-px bg-zinc-700 mb-3" />
                  <p className="text-base text-zinc-300 leading-relaxed">{event.description}</p>
               </div>
              );

              return (
                <div key={event.id} className="relative flex items-start">

                  {/* Trái */}
                  <div className="w-1/2 pr-8 flex justify-end">
                    {isLeft && Card}
                  </div>

                  {/* Dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 z-10" style={{ top: "14px" }}>
                    <div className="w-3 h-3 rounded-full bg-zinc-300 border-2 border-zinc-950 shadow-[0_0_6px_rgba(255,255,255,0.2)]" />
                  </div>

                  {/* Phải */}
                  <div className="w-1/2 pl-8">
                    {!isLeft && Card}
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {timelineEvents.length === 0 && (
          <div className="text-center py-32">
            <p className="text-zinc-600 text-sm">No events yet.</p>
          </div>
        )}

      </div>
    </div>
  );
}