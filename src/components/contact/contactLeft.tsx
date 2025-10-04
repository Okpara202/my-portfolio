import { FaFacebookF, FaLinkedinIn, FaX } from "react-icons/fa6";
import { motion } from "framer-motion"; // Import motion from Framer Motion

function ContactLeft() {
  return (
    <motion.div
      className="w-full lg:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg p-8 shadow-shadowOne flex flex-col gap-8 justify-center dark:bg-gradient-to-r dark:from-transparent dark:to-transparent dark:border-2 dark:border-gray-300"
      initial={{ opacity: 0, y: 20 }} // Initial state
      whileInView={{ opacity: 1, y: 0 }} // WhilewhileInView to full opacity and slide up
      transition={{ duration: 0.5 }} // Transition duration
    >
      <motion.img
        className="w-full h-64 object-cover rounded-lg"
        src="/image/contactImg.png"
        alt="Men shaking hands"
        initial={{ scale: 0.9 }} // Initial scale
        whileInView={{ scale: 1 }} // WhilewhileInView to full scale
        transition={{ duration: 0.5, delay: 0.2 }} // Transition duration and delay
      />
      <div className="flex flex-col gap-4">
        <motion.h3
          className="text-3xl font-bold text-white dark:text-black"
          initial={{ y: -10, opacity: 0 }} // Initial position and opacity
          whileInView={{ y: 0, opacity: 1 }} // WhilewhileInView to final position and opacity
          transition={{ duration: 0.5, delay: 0.3 }} // Transition duration and delay
        >
          Favour Okpara
        </motion.h3>
        <motion.p
          className="text-lg font-normal text-gray-400 dark:text-gray-700"
          initial={{ y: -10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Developer & Writer
        </motion.p>
        <motion.p
          className="text-gray text-gray-400 dark:text-gray-700 tracking-wide"
          initial={{ y: -10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Open to opportunities in development and writing—whether you have a
          project in mind or just want to discuss ideas, let’s connect!
        </motion.p>
        <motion.p
          className="text-gray-400 dark:text-gray-700 flex items-center gap-2"
          initial={{ y: -10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Phone:
          <span className="text-lightText dark:text-bodyColor">
            +2349131772736
          </span>
        </motion.p>
        <motion.p
          className="text-gray-400 dark:text-gray-700 flex items-center gap-2"
          initial={{ y: -10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          Email:
          <span className="text-lightText dark:text-bodyColor">
            okparafavour202@gmail.com
          </span>
        </motion.p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="uppercase font-titleFont font-semibold mb-4">
          Find me in
        </h2>
        <nav className="flex gap-4">
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
            href="https://twitter.com/messages/compose?recipient_id=1633576892191195136"
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
      </div>
    </motion.div>
  );
}

export default ContactLeft;
