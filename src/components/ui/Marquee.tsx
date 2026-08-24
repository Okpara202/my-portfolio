import { motion, useReducedMotion } from "framer-motion";

type Props = {
  items: readonly string[];
  /** Seconds for one full pass. Larger is slower. */
  speed?: number;
  reverse?: boolean;
};

/**
 * Infinite ticker. The list is rendered twice and translated by exactly -50%,
 * so the second copy lands where the first began and the loop is seamless.
 */
export function Marquee({ items, speed = 32, reverse = false }: Props) {
  const reduced = useReducedMotion();
  const doubled = [...items, ...items];

  if (reduced) {
    return (
      <div className="flex flex-wrap gap-3 justify-center">
        {items.map((item) => (
          <Pill key={item} label={item} />
        ))}
      </div>
    );
  }

  return (
    <div className="overflow-hidden edge-fade py-1">
      <motion.div
        className="flex gap-3 w-max"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((item, i) => (
          <Pill key={`${item}-${i}`} label={item} />
        ))}
      </motion.div>
    </div>
  );
}

function Pill({ label }: { label: string }) {
  return (
    <span className="shrink-0 font-mono text-sm px-4 py-2 rounded-full border border-border bg-card/60 text-muted-foreground whitespace-nowrap">
      {label}
    </span>
  );
}
