import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { FaGraduationCap } from "react-icons/fa6";
import { journey } from "../../data/site";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function Journey() {
  const trackRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  /* The spine fills as you read down it. */
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 70%", "end 60%"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <section id="journey" className="relative">
      <div className="section-container">
        <SectionHeading
          index={journey.index}
          kicker={journey.kicker}
          title={journey.title}
        />

        <div ref={trackRef} className="relative pl-8 md:pl-12">
          {/* Track + the part of it already read */}
          <div className="absolute left-0 md:left-1 top-2 bottom-2 w-px bg-border" />
          <motion.div
            className="absolute left-0 md:left-1 top-2 bottom-2 w-px bg-gradient-to-b from-brown to-tan origin-top"
            style={reduced ? { scaleY: 1 } : { scaleY }}
          />

          <div className="space-y-12 md:space-y-16">
            {journey.roles.map((role, i) => (
              <Reveal key={`${role.org}-${role.title}`} delay={i * 0.04}>
                <article className="relative">
                  {/* Node */}
                  <span
                    className={`absolute -left-8 md:-left-[2.85rem] top-2 w-3 h-3 rounded-full border-2 ${
                      role.current
                        ? "bg-brown border-brown"
                        : "bg-background border-border"
                    }`}
                  >
                    {role.current && !reduced && (
                      <motion.span
                        className="absolute -inset-1 rounded-full border border-brown"
                        animate={{ scale: [1, 1.9], opacity: [0.7, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                  </span>

                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                    <h3 className="font-heading font-bold text-xl md:text-2xl text-foreground">
                      {role.title}
                    </h3>
                    <span className="text-brown font-heading text-lg">
                      {role.org}
                    </span>
                    <span className="font-mono text-[0.7rem] uppercase tracking-wider px-2 py-0.5 rounded-full border border-border text-muted-foreground">
                      {role.type}
                    </span>
                  </div>

                  <p className="font-mono text-xs text-muted-foreground mb-5">
                    {role.period} · {role.place}
                  </p>

                  <ul className="space-y-2.5">
                    {role.points.map((point, p) => (
                      <li
                        key={p}
                        className="flex gap-3 text-sm md:text-base leading-relaxed text-muted-foreground"
                      >
                        <span className="text-brown/60 mt-1 shrink-0 font-mono text-xs">
                          ▸
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Where it started — deliberately last, because it came first. */}
        <Reveal delay={0.1} className="mt-16">
          <article className="surface p-6 md:p-8">
            <div className="flex items-start gap-4">
              <span className="shrink-0 w-11 h-11 rounded-full bg-brown/10 text-brown flex items-center justify-center text-lg">
                <FaGraduationCap />
              </span>
              <div>
                <h3 className="font-heading font-bold text-xl text-foreground">
                  {journey.education.title}
                </h3>
                <p className="font-mono text-xs text-muted-foreground mt-1 mb-4">
                  {journey.education.org} · {journey.education.period}
                </p>
                <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                  {journey.education.note}
                </p>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
