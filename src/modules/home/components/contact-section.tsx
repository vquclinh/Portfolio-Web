import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { SlideInOnScroll } from "@/shared/components/slideInOnScroll";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-2xl mx-auto">

        {/* Heading */}
        <SlideInOnScroll direction="up" duration={700}>
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Get In Touch</h2>
        </SlideInOnScroll>

        {/* Two columns: Direct & Social */}
        <div className="lg:ml-[10%] grid sm:grid-cols-2 gap-45">

          {/* Direct */}
          <SlideInOnScroll direction="left" duration={700} delay={150}>
            <div>
              <p className="text-xs uppercase tracking-widest text-white mb-4">Direct</p>
              <div className="space-y-4">
                <a
                  href="mailto:voquoclinh.29042006@gmail.com"
                  className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group"
                >
                  <Mail className="w-4 h-4 text-zinc-600 group-hover:text-white shrink-0 transition-colors" />
                  <span className="text-sm">voquoclinh.29042006@gmail.com</span>
                </a>
                <a
                  href="tel:+84398695132"
                  className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group"
                >
                  <Phone className="w-4 h-4 text-zinc-600 group-hover:text-white shrink-0 transition-colors" />
                  <span className="text-sm">(+84) 398 695 132</span>
                </a>
                <div className="flex items-center gap-3 text-zinc-400">
                  <MapPin className="w-4 h-4 text-zinc-600 shrink-0" />
                  <span className="text-sm">Ho Chi Minh City, Vietnam</span>
                </div>
              </div>
            </div>
          </SlideInOnScroll>

          {/* Social */}
          <SlideInOnScroll direction="right" duration={700} delay={250}>
            <div>
              <p className="text-xs uppercase tracking-widest text-white mb-4">Social</p>
              <div className="space-y-4">
                <a
                  href="https://github.com/vquclinh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group"
                >
                  <Github className="w-4 h-4 text-zinc-600 group-hover:text-white shrink-0 transition-colors" />
                  <span className="text-sm">Vo Quoc Linh</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/linh-v%C3%B5-qu%E1%BB%91c-0132a232a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group"
                >
                  <Linkedin className="w-4 h-4 text-zinc-600 group-hover:text-white shrink-0 transition-colors" />
                  <span className="text-sm">Vo Quoc Linh</span>
                </a>
                <a
                  href="https://twitter.com/voquoclinh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group"
                >
                  <Twitter className="w-4 h-4 text-zinc-600 group-hover:text-white shrink-0 transition-colors" />
                  <span className="text-sm">Vo Quoc Linh</span>
                </a>
              </div>
            </div>
          </SlideInOnScroll>

        </div>
      </div>
    </section>
  );
}