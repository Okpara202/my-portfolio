import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaBars, FaMoon, FaSun, FaXmark } from "react-icons/fa6";
import { navLinks, profile } from "../data/site";
import { useTheme } from "../hooks/useTheme";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Highlight whichever section is currently crossing the upper third. */
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const go = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="fixed top-0 inset-x-0 z-50 flex justify-center pt-4 px-4">
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className={`rounded-full transition-all duration-500 ${
            scrolled
              ? "bg-background/70 backdrop-blur-xl border border-border shadow-lg shadow-black/5"
              : "bg-transparent border border-transparent"
          }`}
        >
          <div className="flex items-center gap-2 md:gap-7 px-4 md:px-6 py-2.5">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="font-mono text-sm font-bold text-brown pr-1 md:pr-2"
              aria-label="Back to top"
            >
              fo<span className="text-muted-foreground">.</span>
            </button>

            <div className="hidden md:flex items-center gap-7">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => go(link.href)}
                  className="nav-link text-sm"
                  data-active={active === link.href}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <a
              href={profile.cv}
              download
              className="hidden md:inline-block font-heading text-sm font-bold px-4 py-1.5 rounded-full bg-brown text-white hover:bg-brown-light transition-colors"
            >
              CV
            </a>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-secondary text-foreground hover:bg-brown hover:text-white transition-colors"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              <motion.span
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="block"
              >
                {theme === "dark" ? <FaSun /> : <FaMoon />}
              </motion.span>
            </button>

            <button
              onClick={() => setOpen((o) => !o)}
              className="md:hidden p-2 rounded-full bg-secondary text-foreground"
              aria-label="Menu"
              aria-expanded={open}
            >
              {open ? <FaXmark /> : <FaBars />}
            </button>
          </div>
        </motion.nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                onClick={() => go(link.href)}
                className="font-heading text-3xl py-2 text-foreground hover:text-brown transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06 * i, duration: 0.4 }}
              >
                {link.label}
              </motion.button>
            ))}
            <motion.a
              href={profile.cv}
              download
              className="btn-primary mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.06 * navLinks.length, duration: 0.4 }}
            >
              Take my CV
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
