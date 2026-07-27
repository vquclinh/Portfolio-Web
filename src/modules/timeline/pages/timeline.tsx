import { timelineEvents, type TimelineEvent } from "../../../data/timeline";

function TimelineCard({ event }: { event: TimelineEvent }) {
  return (
    <div className="w-full rounded-xl border border-zinc-700 bg-zinc-900 p-4 transition-all duration-200 hover:border-zinc-500 hover:bg-zinc-800/80 md:max-w-xs">
      <p className="mb-2 text-base font-semibold tracking-wide text-zinc-200">
        {event.date}
      </p>
      <div className="mb-3 h-px bg-zinc-700" />
      <p className="text-base leading-relaxed text-zinc-300">{event.description}</p>
      {event.details && event.details.length > 0 && (
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-zinc-400">
          {event.details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function TimelinePage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="pt-24" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="mb-16">
          <p className="text-xs tracking-[0.25em] text-zinc-500 uppercase mb-3">My Journey</p>
          <h1 className="text-4xl font-bold tracking-tight">Timeline</h1>
          <div className="mt-4 h-px w-16 bg-gradient-to-r from-zinc-400 to-transparent" />
        </div>

        <div className="relative">
          {timelineEvents.length > 0 && (
            <div
              className="absolute bottom-0 left-1.5 top-0 -translate-x-1/2 md:left-1/2"
              style={{
                width: "1px",
                backgroundImage: "repeating-linear-gradient(to bottom, #52525b 0px, #52525b 6px, transparent 6px, transparent 12px)",
              }}
            />
          )}

          <div className="space-y-8 md:space-y-10">
            {timelineEvents.map((event, i) => {
              const isLeft = i % 2 === 0;

              return (
                <div key={event.id} className="relative md:flex md:items-start">
                  <div className="pl-8 md:hidden">
                    <TimelineCard event={event} />
                  </div>

                  <div className="hidden w-1/2 justify-end pr-8 md:flex">
                    {isLeft && <TimelineCard event={event} />}
                  </div>

                  <div className="absolute left-1.5 top-5 z-10 -translate-x-1/2 md:left-1/2">
                    <div className="h-3 w-3 rounded-full border-2 border-zinc-950 bg-zinc-300 shadow-[0_0_6px_rgba(255,255,255,0.2)]" />
                  </div>

                  <div className="hidden w-1/2 pl-8 md:block">
                    {!isLeft && <TimelineCard event={event} />}
                  </div>
                </div>
              );
            })}
          </div>

          {timelineEvents.length === 0 && (
            <div className="py-32 text-center">
              <p className="text-sm text-zinc-600">No events yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
