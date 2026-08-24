import { motion, useReducedMotion } from "framer-motion";

/**
 * The name, one letter at a time.
 *
 * Letters drop in on a stagger when the boot sequence hands over, then stay
 * live: hovering a letter lifts it and warms it to the accent colour. A slow
 * sheen crosses the whole word every few seconds so it isn't dead between
 * interactions.
 */
export function AnimatedName({ name, ready }: { name: string; ready: boolean }) {
  const reduced = useReducedMotion();
  const letters = Array.from(name);

  if (reduced) {
    return (
      <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight mb-6">
        {name}
      </h1>
    );
  }

  return (
    <h1
      aria-label={name}
      className="relative font-heading font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight mb-6"
    >
      <span aria-hidden className="inline-flex flex-wrap justify-center">
        {letters.map((char, i) => {
          /* Preserve the space between names without letting it collapse. */
          if (char === " ") return <span key={i} className="w-[0.28em]" />;

          return (
            <motion.span
              key={i}
              className="inline-block origin-bottom cursor-default"
              initial={{ opacity: 0, y: "0.5em", rotateX: -70, filter: "blur(8px)" }}
              animate={
                ready
                  ? { opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }
                  : undefined
              }
              transition={{
                duration: 0.7,
                delay: 0.12 + i * 0.045,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                y: -10,
                scale: 1.08,
                color: "hsl(var(--brown))",
                transition: { type: "spring", stiffness: 400, damping: 14 },
              }}
            >
              {char}
            </motion.span>
          );
        })}
      </span>

      {/* Sheen — a slow highlight crossing the word, clipped to the glyphs. */}
      {ready && (
        <motion.span
          aria-hidden
          className="absolute inset-0 pointer-events-none bg-clip-text text-transparent"
          style={{
            backgroundImage:
              "linear-gradient(100deg, transparent 42%, hsl(var(--tan) / 0.85) 50%, transparent 58%)",
            backgroundSize: "250% 100%",
          }}
          animate={{ backgroundPosition: ["150% 0%", "-150% 0%"] }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            repeatDelay: 5,
            ease: "easeInOut",
            delay: 1.6,
          }}
        >
          {name}
        </motion.span>
      )}
    </h1>
  );
}
