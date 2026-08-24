import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

type Props = {
  index: string;
  kicker: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
};

/**
 * The numbered spine of the page — 01 About, 02 The road so far, and so on.
 * The rule under the number draws itself in as the section arrives.
 */
export function SectionHeading({
  index,
  kicker,
  title,
  lead,
  align = "left",
}: Props) {
  const centered = align === "center";

  return (
    <Reveal
      className={`mb-14 md:mb-20 ${centered ? "text-center" : ""}`}
      stagger={0.09}
    >
      <div
        className={`flex items-center gap-4 mb-5 ${
          centered ? "justify-center" : ""
        }`}
      >
        <span className="font-mono text-sm font-bold text-brown">{index}</span>
        <motion.span
          className="h-px bg-brown/50 origin-left"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          style={{ width: centered ? 56 : 72 }}
        />
        <span className="eyebrow">{kicker}</span>
      </div>

      <h2 className="section-title text-balance">{title}</h2>

      {lead && (
        <p
          className={`section-subtitle mt-5 max-w-2xl text-balance ${
            centered ? "mx-auto" : ""
          }`}
        >
          {lead}
        </p>
      )}
    </Reveal>
  );
}
