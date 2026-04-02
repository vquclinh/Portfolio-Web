import { ExternalLink, Github } from "lucide-react";
import { Card } from "../../../shared/components/ui/card";
import { Badge } from "../../../shared/components/ui/badge";
import { Button } from "../../../shared/components/ui/button";
import { ImageWithFallback } from "../../../shared/components/ui/image-with-fallback";
import { projects, skills } from "../../../data/memories";

export function PortfolioPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl mb-4 font-bold">
            <span className="bg-gradient-to-r from-zinc-200 via-zinc-300 to-zinc-400 bg-clip-text text-transparent">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A collection of my professional work, showcasing my skills in web development, design, and problem-solving.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden bg-slate-800/50 border-white/10 backdrop-blur-sm hover:shadow-2xl hover:shadow-purple-500/20 transition-all group">
              <div className="relative h-64 overflow-hidden bg-gray-900">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-cyan-500/90 text-white border-none">
                    {project.date}
                  </Badge>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl mb-3 text-white font-bold">{project.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-zinc-700/20 text-zinc-300 border-zinc-700/30">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button size="sm" className="bg-gradient-to-r from-zinc-700 to-zinc-900 hover:from-cyan-600 hover:to-purple-700 text-white">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button size="sm" variant="outline" className="border-white/20 text-gray-300 hover:bg-white/10">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Skills Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-zinc-700/20 text-zinc-300 border-zinc-700/30 border-purple-500/30">Technologies</Badge>
            <h2 className="text-3xl font-bold text-white">Skills & Tools</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {skills.map((skill) => (
              <Card key={skill} className="p-4 text-center bg-slate-800/50 border-white/10 backdrop-blur-sm hover:shadow-lg hover:shadow-cyan-500/20 transition-all hover:scale-105">
                <div className="text-white font-semibold">{skill}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}