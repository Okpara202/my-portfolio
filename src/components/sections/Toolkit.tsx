import { motion } from "framer-motion";
import { toolkit } from "../../data/site";
import { Marquee } from "../ui/Marquee";
import { Reveal } from "../ui/Reveal";
import { revealItem } from "../ui/variants";
import { SectionHeading } from "../ui/SectionHeading";

export function Toolkit() {
  return (
    <section id="toolkit" className="relative">
      <div className="section-container">
        <SectionHeading
          index={toolkit.index}
          kicker={toolkit.kicker}
          title={toolkit.title}
          lead={toolkit.lead}
        />

        <Reveal
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          stagger={0.07}
        >
          {toolkit.groups.map((group) => (
            <motion.article
              key={group.label}
              variants={revealItem}
              className="surface p-6 h-full transition-colors duration-300 hover:border-brown/40"
            >
              <h3 className="eyebrow mb-5">{group.label}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <motion.li
                    key={item}
                    whileHover={{ y: -3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 18 }}
                    className="font-mono text-xs px-3 py-1.5 rounded-full border border-border bg-secondary/50 text-muted-foreground hover:text-foreground hover:border-brown/50 transition-colors cursor-default"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.article>
          ))}
        </Reveal>
      </div>

      {/* Two tickers running against each other, edge-faded. */}
      <div className="space-y-3 pb-24 md:pb-32 -mt-8">
        <Marquee items={toolkit.marquee} speed={44} />
        <Marquee items={[...toolkit.marquee].reverse()} speed={52} reverse />
      </div>
    </section>
  );
}
