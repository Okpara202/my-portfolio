import { AnimatePresence, motion, type PanInfo } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaQuoteRight } from "react-icons/fa6";
import { testimonials } from "../../data/site";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

/** How far a drag has to travel — or how hard it has to be flicked — to turn
 *  the card. Velocity is folded in so a short, fast swipe still counts. */
const SWIPE_DISTANCE = 70;
const VELOCITY_WEIGHT = 0.22;

/** Trackpads report a swipe as a stream of small horizontal wheel deltas, so
 *  those get summed until they clear this instead of being read one by one. */
const WHEEL_DISTANCE = 60;
/** Quiet gap that marks the end of a gesture, momentum included. */
const WHEEL_SETTLE_MS = 240;

export function Testimonials() {
  const items = testimonials.items;
  const [[index, direction], setState] = useState<[number, number]>([0, 0]);

  const paginate = useCallback(
    (step: number) =>
      setState(([i]) => [(i + step + items.length) % items.length, step]),
    [items.length],
  );

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    const travel = info.offset.x + info.velocity.x * VELOCITY_WEIGHT;
    if (travel <= -SWIPE_DISTANCE) paginate(1);
    else if (travel >= SWIPE_DISTANCE) paginate(-1);
    /* Anything short of that falls back to the drag constraints below, which
       snap the card home. */
  };

  /* Two-finger swipe on a trackpad is a horizontal wheel event, not a pointer
     drag, so framer's `drag` never sees it — hence this. The listener is
     attached by hand because React's synthetic `onWheel` is passive, and this
     one has to preventDefault to stop the browser's back-navigation gesture. */
  const trackRef = useRef<HTMLDivElement>(null);
  const wheelTotal = useRef(0);
  const wheelSpent = useRef(false);
  const wheelTimer = useRef<number | undefined>(undefined);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const onWheel = (event: WheelEvent) => {
      /* Mostly-vertical scrolling belongs to the page, not to us. */
      if (Math.abs(event.deltaX) <= Math.abs(event.deltaY)) return;
      event.preventDefault();

      /* Restart the settle timer on every tick: the gesture is over once the
         deltas stop arriving, which is when the next swipe is allowed. */
      window.clearTimeout(wheelTimer.current);
      wheelTimer.current = window.setTimeout(() => {
        wheelTotal.current = 0;
        wheelSpent.current = false;
      }, WHEEL_SETTLE_MS);

      /* One gesture turns one card; ignore the momentum tail. */
      if (wheelSpent.current) return;

      /* deltaMode 1 counts lines rather than pixels. */
      wheelTotal.current += event.deltaX * (event.deltaMode === 1 ? 16 : 1);
      if (Math.abs(wheelTotal.current) < WHEEL_DISTANCE) return;

      paginate(wheelTotal.current > 0 ? 1 : -1);
      wheelTotal.current = 0;
      wheelSpent.current = true;
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      el.removeEventListener("wheel", onWheel);
      window.clearTimeout(wheelTimer.current);
    };
  }, [paginate]);

  const item = items[index];

  return (
    <section id="testimonials" className="relative">
      <div className="section-container">
        <SectionHeading
          index={testimonials.index}
          kicker={testimonials.kicker}
          title={testimonials.title}
        />

        <Reveal>
          <div ref={trackRef} className="relative">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.article
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction >= 0 ? 60 : -60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction >= 0 ? -60 : 60 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                drag="x"
                dragDirectionLock
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.16}
                onDragEnd={handleDragEnd}
                className="surface p-7 md:p-10 grid md:grid-cols-[auto_1fr] gap-7 md:gap-10 items-start touch-pan-y cursor-grab active:cursor-grabbing"
              >
                <div className="flex md:flex-col items-center gap-4 md:gap-5">
                  <img
                    src={item.photo}
                    alt={item.name}
                    loading="lazy"
                    /* Otherwise the browser's own image drag hijacks the swipe. */
                    draggable={false}
                    className="w-20 h-20 md:w-32 md:h-32 rounded-full object-cover object-top border-2 border-brown/40"
                  />
                  <div className="md:text-center">
                    <p className="eyebrow mb-1">{item.org}</p>
                    <h3 className="font-heading font-bold text-lg text-foreground">
                      {item.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{item.role}</p>
                  </div>
                </div>

                <div>
                  <FaQuoteRight className="text-4xl md:text-5xl text-brown/25 mb-5" />
                  <blockquote className="text-base md:text-lg leading-relaxed text-muted-foreground italic">
                    {item.quote}
                  </blockquote>
                </div>
              </motion.article>
            </AnimatePresence>

            <div className="flex items-center justify-between mt-7">
              <div className="flex gap-2" role="tablist" aria-label="Testimonials">
                {items.map((t, i) => (
                  <button
                    key={t.name}
                    onClick={() => setState([i, i > index ? 1 : -1])}
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`Show ${t.name}'s words`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === index ? "w-8 bg-brown" : "w-3 bg-border"
                    }`}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => paginate(-1)}
                  className="icon-social"
                  aria-label="Previous"
                >
                  <FaArrowLeft className="text-sm" />
                </button>
                <button
                  onClick={() => paginate(1)}
                  className="icon-social"
                  aria-label="Next"
                >
                  <FaArrowRight className="text-sm" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
