import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

/**
 * Fixed behind everything: an engineering grid, two slow accent blooms that
 * drift as you scroll, and a scanline sweep. Pointer-events off, aria-hidden —
 * it is decoration and nothing else.
 */
export function Backdrop() {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const blobOneY = useTransform(scrollYProgress, [0, 1], ["0%", "42%"]);
  const blobTwoY = useTransform(scrollYProgress, [0, 1], ["0%", "-38%"]);
  const gridY = useTransform(scrollYProgress, [0, 1], ["0px", "-140px"]);

  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
    >
      <motion.div
        className="absolute -inset-y-40 inset-x-0 grid-backdrop"
        style={reduced ? undefined : { y: gridY }}
      />

      {/* Accent blooms */}
      <motion.div
        className="absolute -top-32 -left-32 w-[38rem] h-[38rem] rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--brown) / 0.28), transparent 70%)",
          ...(reduced ? {} : { y: blobOneY }),
        }}
        animate={reduced ? undefined : { scale: [1, 1.12, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 -right-40 w-[42rem] h-[42rem] rounded-full blur-[130px]"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--tan) / 0.22), transparent 70%)",
          ...(reduced ? {} : { y: blobTwoY }),
        }}
        animate={reduced ? undefined : { scale: [1.1, 1, 1.1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Slow scanline sweep */}
      {!reduced && (
        <motion.div
          className="absolute inset-x-0 h-64"
          style={{
            background:
              "linear-gradient(to bottom, transparent, hsl(var(--brown) / 0.05), transparent)",
          }}
          animate={{ top: ["-16rem", "100%"] }}
          transition={{ duration: 11, repeat: Infinity, ease: "linear" }}
        />
      )}

      {/* Keeps text legible over the blooms in light mode. */}
      <div className="absolute inset-0 bg-background/40 dark:bg-background/55" />
    </div>
  );
}
