import { SlideInOnScroll } from "@/shared/components/slideInOnScroll";

export function BioSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-4xl mx-auto text-center">

        {/* Heading */}
        <SlideInOnScroll direction="up" duration={700}>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            About me
          </h2>
        </SlideInOnScroll>

        <div className="space-y-4 text-zinc-200 text-lg leading-relaxed">
          {/* Paragraph 1 */}
          <SlideInOnScroll direction="left" duration={700} delay={100}>
            <p>
              Hi, my name is Linh. I grew up in Quang Ngai, Vietnam, and I am currently
              a second-year student in the Advanced Program in Computer Science at the
              University of Science, Ho Chi Minh City. Previously, I studied in the
              Mathematics specialized program at Le Khiet High School for the Gifted in
              Quang Ngai.
            </p>
          </SlideInOnScroll>

          {/* Paragraph 2 */}
          <SlideInOnScroll direction="right" duration={700} delay={200}>
            <p>
              I have a strong passion for Natural Language Processing, particularly
              Discrete Diffusion Models in text generation, as well as Dichotomous Segmentation and UI/UX
              design. I am always eager to explore new technologies and continuously
              improve my skills in these areas.
            </p>
          </SlideInOnScroll>
        </div>

        {/* Divider */}
        <SlideInOnScroll direction="up" duration={600} delay={300}>
          <div className="mt-10 flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-zinc-700"></div>
            <span className="text-zinc-600 text-sm">based in Ho Chi Minh City</span>
            <div className="h-px w-16 bg-zinc-700"></div>
          </div>
        </SlideInOnScroll>

      </div>
    </section>
  );
}