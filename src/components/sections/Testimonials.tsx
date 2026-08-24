import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaQuoteRight } from "react-icons/fa6";
import { testimonials } from "../../data/site";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function Testimonials() {
  const items = testimonials.items;
  const [[index, direction], setState] = useState<[number, number]>([0, 0]);

  const paginate = (step: number) =>
    setState(([i]) => [(i + step + items.length) % items.length, step]);

  const item = items[index];

  return (
    <section id="testimonials" className="relative">
      <div className="section-container">
        <SectionHeading
          index={testimonials.index}
          kicker={testimonials.kicker}
          title={testimonials.title}
        />

        <Reveal>
          <div className="relative">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.article
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction >= 0 ? 60 : -60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction >= 0 ? -60 : 60 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="surface p-7 md:p-10 grid md:grid-cols-[auto_1fr] gap-7 md:gap-10 items-start"
              >
                <div className="flex md:flex-col items-center gap-4 md:gap-5">
                  <img
                    src={item.photo}
                    alt={item.name}
                    loading="lazy"
                    className="w-20 h-20 md:w-32 md:h-32 rounded-full object-cover object-top border-2 border-brown/40"
                  />
                  <div className="md:text-center">
                    <p className="eyebrow mb-1">{item.org}</p>
                    <h3 className="font-heading font-bold text-lg text-foreground">
                      {item.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{item.role}</p>
                  </div>
                </div>

                <div>
                  <FaQuoteRight className="text-4xl md:text-5xl text-brown/25 mb-5" />
                  <blockquote className="text-base md:text-lg leading-relaxed text-muted-foreground italic">
                    {item.quote}
                  </blockquote>
                </div>
              </motion.article>
            </AnimatePresence>

            <div className="flex items-center justify-between mt-7">
              <div className="flex gap-2" role="tablist" aria-label="Testimonials">
                {items.map((t, i) => (
                  <button
                    key={t.name}
                    onClick={() => setState([i, i > index ? 1 : -1])}
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`Show ${t.name}'s words`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === index ? "w-8 bg-brown" : "w-3 bg-border"
                    }`}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => paginate(-1)}
                  className="icon-social"
                  aria-label="Previous"
                >
                  <FaArrowLeft className="text-sm" />
                </button>
                <button
                  onClick={() => paginate(1)}
                  className="icon-social"
                  aria-label="Next"
                >
                  <FaArrowRight className="text-sm" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
