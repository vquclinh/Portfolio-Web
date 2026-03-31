import { Card } from "../../../shared/components/ui/card";
import { Badge } from "../../../shared/components/ui/badge";
import { timelineEvents } from "../../../data/memories";

// Timeline events data - easy to add/update
const typeColors = {
  career: "bg-cyan-500/20 text-zinc-300 border-cyan-500/30",
  personal: "bg-pink-500/20 text-pink-300 border-pink-500/30",
  achievement: "bg-zinc-700/20 text-zinc-300 border-zinc-700/30",
  education: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
};

const typeLabels = {
  career: "Career",
  personal: "Personal",
  achievement: "Achievement",
  education: "Education",
};

const typeDotColors = {
  career: "border-cyan-500",
  personal: "border-pink-500",
  achievement: "border-purple-500",
  education: "border-emerald-500",
};

export function TimelinePage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-zinc-700/20 text-zinc-300 border-zinc-700/30">Life Journey</Badge>
          <h1 className="text-5xl mb-4 font-bold">
            <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">Timeline</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A chronological journey through the milestones and moments that have shaped my life and career.
          </p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(typeLabels).map(([key, label]) => (
            <div key={key} className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full bg-slate-900 border-2 ${typeDotColors[key as keyof typeof typeDotColors]}`}></div>
              <span className="text-sm text-gray-400">{label}</span>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/50 via-purple-500/50 to-pink-500/50"></div>

          {/* Timeline events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div key={event.id} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className={`absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-slate-900 border-4 ${typeDotColors[event.type as keyof typeof typeDotColors]} transform -translate-x-1/2 z-10 shadow-lg`}></div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pl-20 md:pl-0`}>
                  <Card className={`p-6 bg-slate-800/50 border-white/10 backdrop-blur-sm hover:shadow-2xl transition-all border-l-4 ${event.type === 'career' ? 'border-l-cyan-500 hover:shadow-cyan-500/20' : event.type === 'personal' ? 'border-l-pink-500 hover:shadow-pink-500/20' : event.type === 'achievement' ? 'border-l-purple-500 hover:shadow-purple-500/20' : 'border-l-emerald-500 hover:shadow-emerald-500/20'}`}>
                    <div className="flex items-start justify-between mb-3">
                      <Badge className={typeColors[event.type as keyof typeof typeColors]}>
                        {typeLabels[event.type as keyof typeof typeLabels]}
                      </Badge>
                      <span className="text-sm text-gray-500">{event.date}</span>
                    </div>
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className={`text-3xl font-bold ${event.type === 'career' ? 'text-zinc-400' : event.type === 'personal' ? 'text-pink-400' : event.type === 'achievement' ? 'text-purple-400' : 'text-emerald-400'}`}>{event.year}</span>
                      <h3 className="text-xl text-white font-bold">{event.title}</h3>
                    </div>
                    <p className="text-gray-400 leading-relaxed">
                      {event.description}
                    </p>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add New Event CTA */}
        <div className="mt-16">
          <Card className="p-12 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border-purple-500/20 border-2 border-dashed text-center backdrop-blur-sm">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-zinc-900/50">
              <span className="text-3xl">🎯</span>
            </div>
            <h3 className="text-2xl mb-3 text-white font-bold">The Journey Continues...</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              To add new milestones to your timeline, edit the timelineEvents array in /src/app/data/content.ts. Include the year, title, description, type (career/personal/achievement/education), and date for each event.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}