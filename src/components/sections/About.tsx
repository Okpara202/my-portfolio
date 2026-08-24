import { motion } from "framer-motion";
import { about, profile } from "../../data/site";
import { Reveal } from "../ui/Reveal";
import { revealItem } from "../ui/variants";
import { SectionHeading } from "../ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="relative">
      <div className="section-container">
        <SectionHeading
          index={about.index}
          kicker={about.kicker}
          title={about.title}
        />

        <div className="grid lg:grid-cols-[minmax(0,1fr)_20rem] gap-12 lg:gap-16 items-start">
          <Reveal className="space-y-6" stagger={0.12}>
            {about.paragraphs.map((paragraph, i) => (
              <motion.p
                key={i}
                variants={revealItem}
                className="text-base md:text-lg leading-relaxed text-muted-foreground"
              >
                {paragraph}
              </motion.p>
            ))}
          </Reveal>

          {/* Portrait, with the accent ring drawing itself in behind it. */}
          <Reveal direction="left" delay={0.15} className="mx-auto lg:mx-0">
            <div className="relative w-56 h-56 md:w-72 md:h-72">
              <motion.div
                className="absolute -inset-3 rounded-full border border-brown/30"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
                style={{ borderStyle: "dashed" }}
              />
              <div className="w-full h-full rounded-full p-[3px] bg-gradient-to-br from-brown to-tan glow-brown">
                <div className="w-full h-full rounded-full overflow-hidden bg-card">
                  <img
                    src={profile.photo}
                    alt={profile.fullName}
                    loading="lazy"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Three things that are true about working with him. */}
        <Reveal
          className="grid md:grid-cols-3 gap-5 mt-16 md:mt-20"
          stagger={0.1}
        >
          {about.traits.map((trait) => (
            <motion.article
              key={trait.title}
              variants={revealItem}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="surface p-6 h-full"
            >
              <h3 className="font-heading font-bold text-lg mb-3 text-foreground">
                {trait.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {trait.body}
              </p>
            </motion.article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
