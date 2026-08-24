import { motion } from "framer-motion";
import { now } from "../../data/site";
import { Reveal } from "../ui/Reveal";
import { revealItem } from "../ui/variants";
import { SectionHeading } from "../ui/SectionHeading";

export function Now() {
  return (
    <section id="now" className="relative">
      <div className="section-container">
        <SectionHeading
          index={now.index}
          kicker={now.kicker}
          title={now.title}
          lead={now.lead}
        />

        <Reveal className="grid md:grid-cols-2 gap-6" stagger={0.12}>
          {now.items.map((item) => (
            <motion.article
              key={item.title}
              variants={revealItem}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              className="surface p-6 md:p-8 h-full flex flex-col"
            >
              <div className="flex items-center justify-between gap-4 mb-4">
                <h3 className="font-heading font-bold text-2xl text-foreground">
                  {item.title}
                </h3>
                <span className="flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-wider text-brown">
                  <motion.span
                    className="w-1.5 h-1.5 rounded-full bg-brown"
                    animate={{ opacity: [1, 0.25, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  {item.status}
                </span>
              </div>

              <p className="text-sm md:text-base leading-relaxed text-muted-foreground flex-1">
                {item.blurb}
              </p>

              <ul className="flex flex-wrap gap-2 mt-6">
                {item.stack.map((tech) => (
                  <li
                    key={tech}
                    className="font-mono text-[0.7rem] px-2.5 py-1 rounded-full bg-secondary text-muted-foreground"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
