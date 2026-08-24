import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa6";
import { contact, profile } from "../../data/site";
import { Magnetic } from "../ui/Magnetic";
import { Reveal } from "../ui/Reveal";
import { revealItem } from "../ui/variants";
import { SectionHeading } from "../ui/SectionHeading";
import { SocialIcons } from "../ui/SocialIcons";

export function Contact() {
  const [sent, setSent] = useState(false);

  /**
   * There is no backend behind this site, so rather than pretend to send,
   * the form composes the message and hands it to the visitor's mail client.
   * Nothing is silently dropped.
   */
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const from = String(data.get("email") ?? "");
    const subject = String(data.get("subject") ?? "Hello");
    const message = String(data.get("message") ?? "");

    const body = `${message}\n\n—\n${name}\n${from}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setSent(true);
    window.setTimeout(() => setSent(false), 6000);
  };

  return (
    <section id="contact" className="relative">
      <div className="section-container">
        <SectionHeading
          index={contact.index}
          kicker={contact.kicker}
          title={contact.title}
          lead={contact.lead}
        />

        <div className="grid lg:grid-cols-[22rem_minmax(0,1fr)] gap-10 lg:gap-14 items-start">
          {/* Direct lines — for anyone who would rather not fill in a form. */}
          <Reveal className="space-y-4" stagger={0.09}>
            {contact.availability.map((slot) => (
              <motion.div
                key={slot.label}
                variants={revealItem}
                className="surface p-5"
              >
                <p className="eyebrow mb-1.5">{slot.label}</p>
                <p className="text-sm text-muted-foreground">{slot.detail}</p>
              </motion.div>
            ))}

            <motion.div variants={revealItem} className="surface p-5 space-y-3">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-brown transition-colors break-all"
              >
                <FaEnvelope className="text-brown shrink-0" />
                {profile.email}
              </a>
              <a
                href={`tel:${profile.phoneHref}`}
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-brown transition-colors"
              >
                <FaPhone className="text-brown shrink-0" />
                {profile.phone}
              </a>
              <a
                href={profile.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-brown transition-colors"
              >
                <FaWhatsapp className="text-brown shrink-0" />
                WhatsApp
              </a>
            </motion.div>

            <motion.div variants={revealItem}>
              <SocialIcons />
            </motion.div>
          </Reveal>

          <Reveal direction="left" delay={0.12}>
            <form onSubmit={handleSubmit} className="surface p-6 md:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <label className="block">
                  <span className="eyebrow block mb-2">Your name</span>
                  <input name="name" required className="field" autoComplete="name" />
                </label>
                <label className="block">
                  <span className="eyebrow block mb-2">Your email</span>
                  <input
                    name="email"
                    type="email"
                    required
                    className="field"
                    autoComplete="email"
                  />
                </label>
              </div>

              <label className="block">
                <span className="eyebrow block mb-2">Subject</span>
                <input name="subject" required className="field" />
              </label>

              <label className="block">
                <span className="eyebrow block mb-2">
                  What are you building?
                </span>
                <textarea name="message" rows={6} required className="field resize-y" />
              </label>

              <div className="flex flex-wrap items-center gap-4 pt-1">
                <Magnetic>
                  <button type="submit" className="btn-primary">
                    Send it
                  </button>
                </Magnetic>

                <motion.p
                  initial={false}
                  animate={{ opacity: sent ? 1 : 0 }}
                  className="font-mono text-xs text-brown"
                  role="status"
                >
                  Opening your mail app — hit send there and it's on its way.
                </motion.p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
