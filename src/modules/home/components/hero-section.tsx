import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { ImageWithFallback } from "@/shared/components/ui/image-with-fallback";
import avatar from "@/assets/avatar.jpg";
import background from "@/assets/background.jpg";

export function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={background}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">

        {/* Avatar */}
        <div className="relative mb-4">
          <div className="absolute inset-0 bg-zinc-600 rounded-full blur-xl opacity-40"></div>
          <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-white/20 shadow-xl shadow-black/60">
            <ImageWithFallback
              src={avatar}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Name */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-1">
          <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-400 bg-clip-text text-transparent">
            Vo Quoc Linh
          </span>
        </h1>
        {/* School */}
        <p className="text-sm text-zinc-400 mb-3 tracking-wide uppercase">
            @APCS24, VNUHCM - University of Science
        </p>

        {/* Divider */}
        <div className="w-16 h-px bg-zinc-600 mb-4"></div>

        {/* Quote */}
        <div className="mb-8 px-6 py-2 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
          <p className="text-zinc-400 text-sm italic">
            "Dare to dream big, dare to do well"
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/portfolio">
            <Button size="lg" className="bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700 shadow-lg shadow-black/50">
              View My Work
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
          <a href="#contact">
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm">
              Get In Touch
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}