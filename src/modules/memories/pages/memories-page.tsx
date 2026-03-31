import { Calendar, Heart } from "lucide-react";
import { Card } from "../../../shared/components/ui/card";
import { Badge } from "../../../shared/components/ui/badge";
import { ImageWithFallback } from "../../../shared/components/ui/image-with-fallback";
import { memories } from "../../../data/memories";

// Memories data - easy to add/update
const categories = ["All", "Travel", "Work", "Life", "Culture", "Milestone"];

export function MemoriesPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-pink-500/20 text-pink-300 border-pink-500/30">Personal Stories</Badge>
          <h1 className="text-5xl mb-4 font-bold">
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Memories</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Capturing moments that matter, stories that inspire, and experiences that shape who I am.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={category === "All" ? "default" : "outline"}
              className={`cursor-pointer transition-all px-4 py-2 ${
                category === "All"
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white border-none hover:from-pink-600 hover:to-purple-700"
                  : "border-white/20 text-gray-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Memories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {memories.map((memory) => (
            <Card key={memory.id} className="overflow-hidden bg-slate-800/50 border-white/10 backdrop-blur-sm hover:shadow-2xl hover:shadow-pink-500/20 transition-all group">
              <div className="relative h-56 overflow-hidden bg-gray-900">
                <ImageWithFallback
                  src={memory.image}
                  alt={memory.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-pink-500/90 text-white border-none">
                    {memory.category}
                  </Badge>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  {memory.date}
                </div>
                <h3 className="text-xl mb-3 text-white font-bold">{memory.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-4 line-clamp-4">
                  {memory.description}
                </p>
                <div className="flex items-center text-pink-400">
                  <Heart className="w-5 h-5 mr-2 fill-current" />
                  <span>{memory.likes} likes</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Add New Memory CTA */}
        <div className="mt-16 text-center">
          <Card className="p-12 bg-gradient-to-br from-pink-500/10 to-purple-500/10 border-pink-500/20 border-2 border-dashed backdrop-blur-sm">
            <Heart className="w-16 h-16 text-pink-400 mx-auto mb-4" />
            <h3 className="text-2xl mb-3 text-white font-bold">Want to Add More Memories?</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              To add or update memories, simply edit the memories array in /src/app/data/content.ts. Each memory includes a title, date, category, description, image, and likes count.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}