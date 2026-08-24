import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

const offset: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 28 },
  down: { x: 0, y: -28 },
  left: { x: 36, y: 0 },
  right: { x: -36, y: 0 },
  none: { x: 0, y: 0 },
};

type Props = {
  children: ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
  duration?: number;
  /** Stagger children that are themselves <Reveal.Item> elements. */
  stagger?: number;
  as?: "div" | "section" | "li" | "article" | "span";
};

/**
 * The one entrance animation the whole site uses: a short lift out of a blur.
 * Everything reads as one system because nothing gets its own bespoke easing.
 */
export function Reveal({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 0.7,
  stagger,
  as = "div",
}: Props) {
  const reduced = useReducedMotion();
  const { x, y } = reduced ? offset.none : offset[direction];
  const Tag = motion[as];

  const variants: Variants = {
    hidden: { opacity: 0, x, y, filter: reduced ? "none" : "blur(10px)" },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: reduced ? 0 : duration,
        delay: reduced ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
        ...(stagger ? { staggerChildren: stagger, delayChildren: delay } : {}),
      },
    },
  };

  return (
    <Tag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </Tag>
  );
}
