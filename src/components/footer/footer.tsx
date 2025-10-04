import { FaFacebookF, FaLinkedinIn, FaX } from "react-icons/fa6";
import { GlowingLogo } from "../navbar/navbarStuff/logoSvg";
import { motion } from "framer-motion"; // Import motion from Framer Motion

function Footer() {
  return (
    <section className="w-full py-20 h-auto mt-5 border-y-[1px] border-black grid grid-cols-2 md:grid-cols-4 md:gap-8">
      <motion.div
        className="w-full h-full flex flex-col gap-8"
        initial={{ opacity: 0, y: 20 }} // Initial state
        whileInView={{ opacity: 1, y: 0 }} // WhilewhileInView to full opacity and slide up
        transition={{ duration: 0.5 }} // Transition duration
      >
        <GlowingLogo />
        <nav className="flex gap-4 flex-col lg:flex-row">
          <motion.a
            target="_blank"
            href="https://m.me/favour.okpara.984991"
            className="bannerIcon"
            whileHover={{ scale: 1.2 }} // Scale on hover
            transition={{ duration: 0.3 }}
          >
            <FaFacebookF />
          </motion.a>
          <motion.a
            target="_blank"
            href="https://twitter.com/messages/compose?recipient_href=1633576892191195136"
            className="bannerIcon"
            whileHover={{ scale: 1.2 }} // Scale on hover
            transition={{ duration: 0.3 }}
          >
            <FaX />
          </motion.a>
          <motion.a
            target="_blank"
            href="https://www.linkedin.com/in/favour-okpara-8a14a4309?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="bannerIcon"
            whileHover={{ scale: 1.2 }} // Scale on hover
            transition={{ duration: 0.3 }}
          >
            <FaLinkedinIn />
          </motion.a>
        </nav>
      </motion.div>
      <div className="w-full h-full justify-items-center md:justify-items-normal">
        <motion.h3
          className="text-xl uppercase dark:text-black dark:font-semibold text-designColor tracking-wider"
          initial={{ opacity: 0, y: 20 }} // Initial state
          whileInView={{ opacity: 1, y: 0 }} // WhilewhileInView to full opacity and slide up
          transition={{ duration: 0.5, delay: 0.1 }} // Transition duration and delay
        >
          Quick Link
        </motion.h3>
        <motion.ul
          className="flex flex-col gap-4 font-titleFont font-medium overflow-hidden dark:text-gray-700 py-6"
          initial={{ opacity: 0 }} // Initial state
          whileInView={{ opacity: 1 }} // WhilewhileInView to full opacity
          transition={{ duration: 0.5, delay: 0.2 }} // Transition duration and delay
        >
          {[
            "About me",
            "Contact me",
            "My projects",
            "What I do?",
            "Testimonial",
          ].map((link, index) => (
            <li key={index}>
              <motion.a
                className="w-full text-lg hover:text-designColor cursor-pointer duration-300 relative group"
                href={`#${link.toLowerCase().replace(" ", "")}`}
                initial={{ opacity: 0, x: -20 }} // Slide in from left
                whileInView={{ opacity: 1, x: 0 }} // WhilewhileInView to full opacity and position
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }} // Staggered delays
              >
                {link}
                <span className="absolute h-[1px] w-full inline-flex -bottom-1 left-0 -translate-x-[100%] bg-designColor group-hover:translate-x-0 transition-transform duration-300"></span>
              </motion.a>
            </li>
          ))}
        </motion.ul>
      </div>
      <div className="w-full h-full justify-items-center md:justify-items-normal">
        <motion.h3
          className="text-xl uppercase dark:text-black dark:font-semibold text-designColor tracking-wider"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Resources
        </motion.h3>
        <motion.ul
          className="flex flex-col gap-4 font-titleFont font-medium overflow-hidden dark:text-gray-700 py-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {[
            "Authentication",
            "System Status",
            "Terms of Service",
            "Pricing",
            "CopyRight",
          ].map((resource, index) => (
            <li key={index}>
              <motion.span
                className="w-full text-lg hover:text-designColor cursor-pointer duration-300 relative group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                {resource}
                <span className="absolute h-[1px] w-full inline-flex -bottom-1 left-0 -translate-x-[100%] bg-designColor group-hover:translate-x-0 transition-transform duration-300"></span>
              </motion.span>
            </li>
          ))}
        </motion.ul>
      </div>
      <div className="w-full h-full justify-items-center md:justify-items-normal">
        <motion.h3
          className="text-xl uppercase dark:text-black dark:font-semibold text-designColor tracking-wider"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Developers
        </motion.h3>
        <motion.ul
          className="flex flex-col gap-4 font-titleFont font-medium overflow-hidden dark:text-gray-700 py-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {[
            "Documentation",
            "Authentication",
            "API Reference",
            "Support",
            "Open Source",
          ].map((dev, index) => (
            <li key={index}>
              <motion.span
                className="w-full text-lg hover:text-designColor cursor-pointer duration-300 relative group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                {dev}
                <span className="absolute h-[1px] w-full inline-flex -bottom-1 left-0 -translate-x-[100%] bg-designColor group-hover:translate-x-0 transition-transform duration-300"></span>
              </motion.span>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

export default Footer;
