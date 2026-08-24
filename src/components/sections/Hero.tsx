import { motion, useReducedMotion } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { FaArrowDown, FaDownload, FaLocationDot } from "react-icons/fa6";
import { hero, profile } from "../../data/site";
import { Magnetic } from "../ui/Magnetic";
import { SocialIcons } from "../ui/SocialIcons";

/** `ready` flips true once the boot sequence has handed the page over. */
export function Hero({ ready }: { ready: boolean }) {
  const reduced = useReducedMotion();

  const [clause] = useTypewriter({
    words: [...hero.clauses],
    loop: true,
    typeSpeed: 55,
    deleteSpeed: 28,
    delaySpeed: 2600,
  });

  const rise = (delay: number) => ({
    initial: { opacity: 0, y: 26, filter: "blur(10px)" },
    animate: ready
      ? { opacity: 1, y: 0, filter: "blur(0px)" }
      : { opacity: 0, y: 26, filter: "blur(10px)" },
    transition: {
      duration: reduced ? 0 : 0.8,
      delay: reduced ? 0 : delay,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center"
    >
      <div className="section-container flex flex-col items-center text-center pt-32 md:pt-36">
        {/* Availability */}
        <motion.div
          {...rise(0.05)}
          className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mb-8"
        >
          <span className="flex items-center gap-2 font-mono text-xs md:text-sm text-muted-foreground">
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full bg-brown opacity-70 animate-ping" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-brown" />
            </span>
            {profile.status}
          </span>
          <span className="flex items-center gap-2 font-mono text-xs md:text-sm text-muted-foreground">
            <FaLocationDot className="text-brown" />
            {profile.location}
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          {...rise(0.12)}
          className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight mb-6"
        >
          {profile.name}
        </motion.h1>

        {/* The rotating claim — the one sentence that says what he does. */}
        <motion.p
          {...rise(0.2)}
          className="text-xl md:text-3xl font-heading text-balance max-w-3xl mb-7 min-h-[4.5rem] md:min-h-[5rem]"
        >
          <span className="text-muted-foreground">{hero.intro} </span>
          <span className="text-foreground">{clause}</span>
          <Cursor cursorStyle="_" cursorColor="hsl(25 40% 48%)" />
        </motion.p>

        <motion.p
          {...rise(0.28)}
          className="text-base md:text-lg text-muted-foreground max-w-xl mb-11 text-balance"
        >
          {hero.supporting}
        </motion.p>

        {/* Calls to action */}
        <motion.div
          {...rise(0.36)}
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          <Magnetic>
            <a href={hero.ctaPrimary.href} className="btn-primary inline-block">
              {hero.ctaPrimary.label}
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href={hero.ctaSecondary.href}
              className="btn-outline inline-block"
            >
              {hero.ctaSecondary.label}
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href={profile.cv}
              download
              className="btn-ghost inline-flex items-center gap-2"
            >
              <FaDownload className="text-brown" />
              Take my CV
            </a>
          </Magnetic>
        </motion.div>

        <motion.div {...rise(0.44)}>
          <SocialIcons />
        </motion.div>

        <motion.a
          href="#about"
          {...rise(0.6)}
          className="mt-16 flex flex-col items-center gap-2 font-mono text-[0.7rem] tracking-[0.3em] uppercase text-muted-foreground hover:text-brown transition-colors"
          aria-label="Scroll to about"
        >
          Scroll
          <motion.span
            animate={reduced ? undefined : { y: [0, 7, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <FaArrowDown />
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
}
