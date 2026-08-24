import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * A two-part cursor: a dot that tracks exactly, and a ring that trails behind
 * on a spring. Over anything interactive the ring swells and fills with the
 * accent, and the dot gets out of the way.
 *
 * Only ever runs on a fine pointer (real mouse) with motion allowed. Touch
 * devices and reduced-motion users keep the cursor their OS gave them, so
 * nothing here is load-bearing for using the site.
 */

type CursorState = "default" | "link" | "view";

/** Ring geometry per state — size, fill, border, and any label inside it. */
const RING = {
  default: { size: 34, bg: "hsl(var(--brown) / 0)", border: "hsl(var(--brown) / 0.55)" },
  link: { size: 58, bg: "hsl(var(--brown) / 0.22)", border: "hsl(var(--brown) / 0.9)" },
  view: { size: 82, bg: "hsl(var(--brown) / 0.92)", border: "hsl(var(--brown))" },
} as const;

/** Anything matching this gets the "link" treatment. */
const INTERACTIVE = 'a, button, [role="button"], input, textarea, select, label, [data-cursor]';

export function CustomCursor() {
  const reduced = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [state, setState] = useState<CursorState>("default");
  const [visible, setVisible] = useState(false);
  const [pressed, setPressed] = useState(false);

  /* Exact pointer position. The dot reads these raw; the ring reads them
     through a spring, which is what produces the trail. */
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const ringX = useSpring(x, { stiffness: 400, damping: 34, mass: 0.55 });
  const ringY = useSpring(y, { stiffness: 400, damping: 34, mass: 0.55 });

  /* Decide once whether this device should get a custom cursor at all. */
  useEffect(() => {
    if (reduced) return;
    const fine = window.matchMedia("(pointer: fine)");
    const apply = () => setEnabled(fine.matches);
    apply();
    fine.addEventListener("change", apply);
    return () => fine.removeEventListener("change", apply);
  }, [reduced]);

  useEffect(() => {
    if (!enabled) return;

    /* Hide the native cursor only while ours is actually running, so a JS
       failure leaves the user with a working pointer rather than none. */
    document.documentElement.classList.add("cursor-none");

    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };

    /* pointerover bubbles and fires on every target change, so this runs far
       less often than a per-frame hit test would. */
    const onOver = (e: PointerEvent) => {
      const el = (e.target as Element | null)?.closest?.(INTERACTIVE);
      if (!el) return setState("default");
      setState(el.getAttribute("data-cursor") === "view" ? "view" : "link");
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);
    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("pointerup", onUp, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    document.addEventListener("pointerenter", onEnter);

    return () => {
      document.documentElement.classList.remove("cursor-none");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("pointerenter", onEnter);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  const ring = RING[state];

  return (
    <>
      {/* Ring — trails, swells, fills. */}
      <motion.div
        aria-hidden
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{ x: ringX, y: ringY }}
      >
        <motion.div
          className="flex items-center justify-center rounded-full border -translate-x-1/2 -translate-y-1/2"
          animate={{
            width: ring.size,
            height: ring.size,
            backgroundColor: ring.bg,
            borderColor: ring.border,
            scale: pressed ? 0.82 : 1,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 320,
            damping: 26,
            opacity: { duration: 0.2 },
          }}
        >
          <motion.span
            className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-white"
            animate={{ opacity: state === "view" ? 1 : 0 }}
            transition={{ duration: 0.18 }}
          >
            View
          </motion.span>
        </motion.div>
      </motion.div>

      {/* Dot — exact, and steps aside once the ring takes over. */}
      <motion.div
        aria-hidden
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{ x, y }}
      >
        <motion.div
          className="w-1.5 h-1.5 rounded-full bg-brown -translate-x-1/2 -translate-y-1/2"
          animate={{
            opacity: visible && state === "default" ? 1 : 0,
            scale: pressed ? 1.6 : 1,
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
    </>
  );
}
