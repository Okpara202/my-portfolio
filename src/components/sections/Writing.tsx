import { motion } from "framer-motion";
import { FaMedium, FaPenNib } from "react-icons/fa6";
import { MEDIUM_URL, writing } from "../../data/site";
import { Magnetic } from "../ui/Magnetic";
import { Reveal } from "../ui/Reveal";
import { revealItem } from "../ui/variants";
import { SectionHeading } from "../ui/SectionHeading";

export function Writing() {
  return (
    <section id="writing" className="relative">
      <div className="section-container">
        <SectionHeading
          index={writing.index}
          kicker={writing.kicker}
          title={writing.title}
        />

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <Reveal className="space-y-6" stagger={0.12}>
            {writing.paragraphs.map((paragraph, i) => (
              <motion.p
                key={i}
                variants={revealItem}
                className="text-base md:text-lg leading-relaxed text-muted-foreground"
              >
                {paragraph}
              </motion.p>
            ))}

            <motion.div variants={revealItem}>
              <Magnetic>
                <a
                  href={MEDIUM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline inline-flex items-center gap-2"
                >
                  <FaMedium />
                  Read me on Medium
                </a>
              </Magnetic>
            </motion.div>

            <motion.ul
              variants={revealItem}
              className="flex flex-wrap gap-2 pt-2"
            >
              {writing.topics.map((topic) => (
                <li
                  key={topic}
                  className="font-mono text-xs px-3 py-1.5 rounded-full border border-border text-muted-foreground"
                >
                  {topic}
                </li>
              ))}
            </motion.ul>
          </Reveal>

          {/* The hire-me-to-write panel. */}
          <Reveal direction="left" delay={0.12}>
            <article className="surface glow-brown p-7 md:p-9 relative overflow-hidden">
              <div
                aria-hidden
                className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-brown/10 blur-3xl"
              />

              <span className="w-12 h-12 rounded-full bg-brown/10 text-brown flex items-center justify-center text-xl mb-6">
                <FaPenNib />
              </span>

              <h3 className="font-heading font-bold text-2xl md:text-3xl mb-4 text-foreground">
                {writing.offer.title}
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground mb-8">
                {writing.offer.body}
              </p>

              <Magnetic>
                <a href={writing.offer.cta.href} className="btn-primary inline-block">
                  {writing.offer.cta.label}
                </a>
              </Magnetic>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
