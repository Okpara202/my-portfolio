import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { useRef, useState } from "react";
import { FaArrowUpRightFromSquare, FaCircleInfo } from "react-icons/fa6";
import { work, type Project } from "../../data/site";
import { Reveal } from "../ui/Reveal";
import { revealItem } from "../ui/variants";
import { SectionHeading } from "../ui/SectionHeading";

export function Work() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="work" className="relative">
      <div className="section-container">
        <SectionHeading
          index={work.index}
          kicker={work.kicker}
          title={work.title}
          lead={work.lead}
        />

        <Reveal
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          stagger={0.08}
        >
          {work.featured.map((project) => (
            <ProjectCard key={project.title} project={project} featured />
          ))}
        </Reveal>

        <div className="mt-12 text-center">
          <button
            onClick={() => setExpanded((e) => !e)}
            className="btn-outline"
            aria-expanded={expanded}
          >
            {expanded ? "Show less" : `And ${work.more.length} more`}
          </button>
        </div>

        <motion.div
          initial={false}
          animate={{
            height: expanded ? "auto" : 0,
            opacity: expanded ? 1 : 0,
          }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-10">
            {work.more.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  /* Tilt toward the cursor, plus a spotlight that tracks it. */
  const rotateX = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);
  const spotlight = useMotionTemplate`radial-gradient(280px circle at ${glowX}% ${glowY}%, hsl(var(--brown) / 0.16), transparent 70%)`;

  const onMove = (e: React.PointerEvent) => {
    if (reduced || e.pointerType !== "mouse" || !ref.current) return;
    const box = ref.current.getBoundingClientRect();
    const px = (e.clientX - box.left) / box.width;
    const py = (e.clientY - box.top) / box.height;
    rotateY.set((px - 0.5) * 9);
    rotateX.set((0.5 - py) * 9);
    glowX.set(px * 100);
    glowY.set(py * 100);
  };

  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  const Wrapper = project.link ? "a" : "div";

  return (
    <motion.div
      ref={ref}
      variants={featured ? revealItem : undefined}
      initial={featured ? undefined : { opacity: 0, y: 20 }}
      whileInView={featured ? undefined : { opacity: 1, y: 0 }}
      viewport={featured ? undefined : { once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      onPointerMove={onMove}
      onPointerLeave={reset}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className="group h-full"
    >
      <Wrapper
        {...(project.link
          ? {
              href: project.link,
              target: "_blank",
              rel: "noopener noreferrer",
            }
          : {})}
        {...(project.link ? { "data-cursor": "view" } : {})}
        className="surface h-full flex flex-col overflow-hidden transition-colors duration-300 hover:border-brown/50 relative"
      >
        <motion.div
          aria-hidden
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{ background: spotlight }}
        />

        {/* Thumbnail, or a typographic stand-in when there's no shot to show. */}
        <div className="relative overflow-hidden bg-secondary aspect-[16/9]">
          {project.src ? (
            <img
              src={project.src}
              alt={project.title}
              loading="lazy"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.06]"
            />
          ) : (
            <div className="w-full h-full grid-backdrop flex items-center justify-center bg-gradient-to-br from-brown/15 to-tan/10">
              <span className="font-mono text-sm text-brown">
                {project.title.toLowerCase().replace(/\s+/g, "-")}
              </span>
            </div>
          )}

          {project.link && (
            <span className="absolute top-3 right-3 w-9 h-9 rounded-full bg-background/80 backdrop-blur text-brown flex items-center justify-center opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              <FaArrowUpRightFromSquare className="text-xs" />
            </span>
          )}
        </div>

        <div className="relative p-4 md:p-5 flex flex-col flex-1">
          <div className="flex items-baseline justify-between gap-2 mb-1.5">
            <h3 className="font-heading font-bold text-foreground text-lg leading-snug">
              {project.title}
            </h3>
            <span className="font-mono text-[0.6rem] uppercase tracking-wider text-brown shrink-0">
              {project.role}
            </span>
          </div>

          {/* Clamped so six cards on a row stay the same height. */}
          <p className="text-[0.875rem] leading-relaxed text-muted-foreground line-clamp-3 flex-1">
            {project.blurb}
          </p>

          {project.note && (
            <p className="mt-2.5 flex items-start gap-2 font-mono text-[0.65rem] leading-snug text-muted-foreground/80">
              <FaCircleInfo className="text-brown/70 mt-0.5 shrink-0" />
              {project.note}
            </p>
          )}

          <ul className="flex flex-wrap gap-1.5 mt-4">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="font-mono text-[0.65rem] px-2 py-0.5 rounded-full bg-secondary text-muted-foreground"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </Wrapper>
    </motion.div>
  );
}
