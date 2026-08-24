import type { Variants } from "framer-motion";

/** Child of a <Reveal stagger={...}> — inherits the parent's timing. */
export const revealItem: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};
