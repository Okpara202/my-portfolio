import { footer, navLinks, profile } from "../data/site";
import { Reveal } from "./ui/Reveal";
import { SocialIcons } from "./ui/SocialIcons";

export function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <Reveal className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-3 text-balance max-w-lg">
              {footer.line}
            </p>
            <p className="font-mono text-xs text-muted-foreground">
              {profile.location} · {profile.roleLong}
            </p>
          </div>

          <div className="flex flex-col md:items-end gap-5">
            <nav className="flex flex-wrap gap-x-5 gap-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="nav-link text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <SocialIcons />
          </div>
        </Reveal>

        <div className="mt-12 pt-6 border-t border-border flex flex-wrap gap-3 justify-between font-mono text-xs text-muted-foreground">
          <span>
            © {new Date().getFullYear()} {profile.fullName}
          </span>
          <span>Built with React, Vite, Tailwind and Framer Motion.</span>
        </div>
      </div>
    </footer>
  );
}
