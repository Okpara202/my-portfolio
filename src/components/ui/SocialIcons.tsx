import type { JSX } from "react";
import { FaGithub, FaLinkedinIn, FaMedium, FaXTwitter } from "react-icons/fa6";
import { socials } from "../../data/site";

const icons: Record<string, JSX.Element> = {
  github: <FaGithub />,
  linkedin: <FaLinkedinIn />,
  medium: <FaMedium />,
  x: <FaXTwitter />,
};

export function SocialIcons({ className = "" }: { className?: string }) {
  return (
    <nav className={`flex gap-3 ${className}`} aria-label="Elsewhere">
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="icon-social"
          aria-label={social.label}
        >
          {icons[social.icon]}
        </a>
      ))}
    </nav>
  );
}
