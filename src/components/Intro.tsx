import {
  AnimatePresence,
  animate,
  motion,
  useReducedMotion,
} from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

/** Flip to true if you'd rather visitors only see the boot once per tab. */
const PLAY_ONCE_PER_SESSION = false;
const SESSION_KEY = "intro-played";

type Phase = "boot" | "name" | "curtain";

type Line = { prompt?: boolean; text: string; accent?: boolean };

const LINES: Line[] = [
  { prompt: true, text: "whoami" },
  { text: "okpara favour chinecherem", accent: true },
  { prompt: true, text: "role --current" },
  { text: "fullstack developer · technical writer" },
  { prompt: true, text: "stack --list" },
  { text: "react · next · react-native · node · express" },
  { prompt: true, text: "launch --portfolio" },
];

const CHAR_MS = 13;
const LINE_GAP_MS = 110;

const FIRST = "FAVOUR";
const LAST = "OKPARA";

export function Intro({ onDone }: { onDone: () => void }) {
  const reduced = useReducedMotion();

  const [show, setShow] = useState(() => {
    if (reduced) return false;
    if (!PLAY_ONCE_PER_SESSION) return true;
    try {
      return sessionStorage.getItem(SESSION_KEY) !== "1";
    } catch {
      return true;
    }
  });

  const [phase, setPhase] = useState<Phase>("boot");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const finished = useRef(false);

  const finish = useCallback(() => {
    if (finished.current) return;
    finished.current = true;
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      /* storage blocked — the intro simply plays again next time */
    }
    setShow(false);
    onDone();
  }, [onDone]);

  const skip = useCallback(() => {
    setPhase("curtain");
    window.setTimeout(finish, 620);
  }, [finish]);

  /* Reduced motion, or an already-played session: go straight to the page. */
  useEffect(() => {
    if (!show && !finished.current) {
      finished.current = true;
      onDone();
    }
  }, [show, onDone]);

  /* Lock the page behind the overlay so nothing scrolls underneath it. */
  useEffect(() => {
    if (!show) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [show]);

  /* Esc, or any click on the overlay, skips out. */
  useEffect(() => {
    if (!show) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter" || e.key === " ") skip();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [show, skip]);

  /* The typing itself: one character at a time, then a beat between lines. */
  useEffect(() => {
    if (!show || phase !== "boot") return;

    const line = LINES[lineIndex];
    if (!line) return;

    if (charIndex < line.text.length) {
      const id = window.setTimeout(() => setCharIndex((c) => c + 1), CHAR_MS);
      return () => window.clearTimeout(id);
    }

    const isLast = lineIndex === LINES.length - 1;
    const id = window.setTimeout(
      () => {
        if (isLast) setPhase("name");
        else {
          setLineIndex((l) => l + 1);
          setCharIndex(0);
        }
      },
      isLast ? 320 : LINE_GAP_MS
    );
    return () => window.clearTimeout(id);
  }, [show, phase, lineIndex, charIndex]);

  /* Name phase: run the 0 → 100 counter, then drop the curtain. */
  useEffect(() => {
    if (!show || phase !== "name") return;

    const controls = animate(0, 100, {
      duration: 1.15,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setProgress(Math.round(v)),
    });
    const id = window.setTimeout(() => setPhase("curtain"), 1350);

    return () => {
      controls.stop();
      window.clearTimeout(id);
    };
  }, [show, phase]);

  /* Curtain phase: panels part, then hand the page over. */
  useEffect(() => {
    if (!show || phase !== "curtain") return;
    const id = window.setTimeout(finish, 700);
    return () => window.clearTimeout(id);
  }, [show, phase, finish]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden cursor-pointer"
          onClick={skip}
          exit={{ opacity: 0, transition: { duration: 0.25 } }}
          role="presentation"
        >
          {/* Two panels that part on the last beat. */}
          <motion.div
            className="absolute inset-y-0 left-0 w-1/2 bg-background border-r border-brown/20"
            animate={phase === "curtain" ? { x: "-101%" } : { x: 0 }}
            transition={{ duration: 0.68, ease: [0.76, 0, 0.24, 1] }}
          />
          <motion.div
            className="absolute inset-y-0 right-0 w-1/2 bg-background border-l border-brown/20"
            animate={phase === "curtain" ? { x: "101%" } : { x: 0 }}
            transition={{ duration: 0.68, ease: [0.76, 0, 0.24, 1] }}
          />

          <div className="absolute inset-0 grid-backdrop opacity-60" />

          <div className="relative w-full max-w-2xl px-6">
            <AnimatePresence mode="wait">
              {phase === "boot" && (
                <motion.div
                  key="boot"
                  exit={{ opacity: 0, y: -14, filter: "blur(8px)" }}
                  transition={{ duration: 0.35 }}
                  className="surface glow-brown overflow-hidden"
                >
                  {/* Window chrome */}
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/50">
                    <span className="w-3 h-3 rounded-full bg-brown/70" />
                    <span className="w-3 h-3 rounded-full bg-tan/60" />
                    <span className="w-3 h-3 rounded-full bg-muted-foreground/40" />
                    <span className="ml-3 font-mono text-xs text-muted-foreground">
                      favour@portfolio — zsh
                    </span>
                  </div>

                  <div className="p-5 md:p-6 font-mono text-sm md:text-base leading-relaxed min-h-[15rem]">
                    {LINES.slice(0, lineIndex + 1).map((line, i) => {
                      const typed =
                        i === lineIndex
                          ? line.text.slice(0, charIndex)
                          : line.text;
                      return (
                        <div key={i} className="flex gap-2">
                          {line.prompt ? (
                            <span className="text-brown shrink-0">$</span>
                          ) : (
                            <span className="text-muted-foreground/40 shrink-0">
                              ›
                            </span>
                          )}
                          <span
                            className={
                              line.accent
                                ? "text-foreground font-bold"
                                : line.prompt
                                  ? "text-foreground"
                                  : "text-muted-foreground"
                            }
                          >
                            {typed}
                            {i === lineIndex && (
                              <motion.span
                                className="inline-block w-2 h-[1.1em] translate-y-[0.18em] ml-0.5 bg-brown"
                                animate={{ opacity: [1, 1, 0, 0] }}
                                transition={{
                                  duration: 0.9,
                                  repeat: Infinity,
                                  times: [0, 0.5, 0.5, 1],
                                }}
                              />
                            )}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {phase !== "boot" && (
                <motion.div
                  key="name"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-center"
                >
                  <MaskedWord word={FIRST} delay={0.05} />
                  <MaskedWord word={LAST} delay={0.22} accent />

                  <motion.div
                    className="mt-10 flex items-center justify-center gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.35 }}
                  >
                    <div className="h-px w-24 md:w-40 bg-border overflow-hidden">
                      <motion.div
                        className="h-full bg-brown origin-left"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1] }}
                      />
                    </div>
                    <span className="font-mono text-sm text-brown tabular-nums">
                      {String(progress).padStart(3, "0")}%
                    </span>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <motion.button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              skip();
            }}
            className="absolute bottom-8 right-8 font-mono text-xs tracking-widest uppercase text-muted-foreground hover:text-brown transition-colors"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === "curtain" ? 0 : 1 }}
            transition={{ delay: 0.8 }}
          >
            skip ›
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/** Letters rise out of a clipped row — the mask is the parent's overflow. */
function MaskedWord({
  word,
  delay = 0,
  accent = false,
}: {
  word: string;
  delay?: number;
  accent?: boolean;
}) {
  return (
    <div className="overflow-hidden">
      <div className="flex justify-center">
        {word.split("").map((letter, i) => (
          <motion.span
            key={i}
            className={`font-heading font-bold text-5xl md:text-8xl tracking-[0.08em] leading-[1.05] ${
              accent ? "gradient-text" : "text-foreground"
            }`}
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.85,
              delay: delay + i * 0.045,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
