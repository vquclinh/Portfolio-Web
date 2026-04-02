import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { ImageWithFallback } from "@/shared/components/ui/image-with-fallback";
import avatar from "@/assets/avatar.jpg";
import background from "@/assets/background.jpg";
import { SlideInOnScroll } from "@/shared/components/slideInOnScroll";

export function HeroSection() {
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={background} alt="Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">

        {/* Avatar */}
        <SlideInOnScroll direction="down" duration={800} delay={0}>
          <div className="relative mb-4">
            <div className="absolute inset-0 bg-zinc-600 rounded-full blur-xl opacity-40"></div>
            <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-white/20 shadow-xl shadow-black/60">
              <ImageWithFallback src={avatar} alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </SlideInOnScroll>

        {/* Name */}
        <SlideInOnScroll direction="up" duration={800} delay={150}>
          <h1 className="text-3xl sm:text-4xl font-bold mb-1">
            <span className="bg-gradient-to-r from-white via-zinc-50 to-zinc-100 bg-clip-text text-transparent">
              Vo Quoc Linh
            </span>
          </h1>
        </SlideInOnScroll>

        {/* School */}
        <SlideInOnScroll direction="up" duration={800} delay={250}>
          <p className="text-sm text-zinc-400 mb-3 tracking-wide uppercase">
            @APCS24, VNUHCM - University of Science
          </p>
        </SlideInOnScroll>

        {/* Divider */}
        <SlideInOnScroll direction="up" duration={600} delay={350}>
          <div className="w-16 h-px bg-zinc-600 mb-4"></div>
        </SlideInOnScroll>

        {/* Quote */}
        <SlideInOnScroll direction="up" duration={800} delay={450}>
          <div className="mb-8 px-6 py-2 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
            <p className="text-zinc-400 text-sm italic">
              "Dare to dream big, dare to do well"
            </p>
          </div>
        </SlideInOnScroll>

        <SlideInOnScroll direction="up" duration={800} delay={550}>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/portfolio">
              <Button size="lg" className="bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700 shadow-lg shadow-black/50">
                View My Work
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <a href="#contact" onClick={handleScrollToContact}>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent text-white border-white/20 hover:bg-white/10 hover:text-white backdrop-blur-sm transition-all"
              >
                Get In Touch
              </Button>
            </a>
          </div>
        </SlideInOnScroll>

      </div>
    </section>
  );
}