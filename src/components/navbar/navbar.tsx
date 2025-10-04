import { FaMoon, FaSun } from "react-icons/fa";
import { GlowingLogo } from "./navbarStuff/logoSvg";
import { navLinksData } from "./navbarStuff/navLink";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

function NavBar({ toggleMode, light }: { toggleMode(): void; light: boolean }) {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  return (
    <motion.section
      className="w-full h-22 mx-auto flex justify-between items-center font-titleFont border-b-[2px] border-b-gray-500 bg-bodyColor dark:bg-white px-6"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Logo */}
      <motion.aside
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        whileHover={{ scale: 1.05 }}
      >
        <GlowingLogo />
      </motion.aside>

      <aside>
        {/* Desktop Navigation */}
        <ul className="hidden lg:inline-flex items-center gap-10">
          {navLinksData.map((navlink, index) => (
            <motion.li
              className="text-base text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300 dark:text-darkBody"
              key={navlink._id}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                activeClass={light ? "darkActive" : "active"}
                to={navlink.link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {navlink.title}
              </Link>
            </motion.li>
          ))}

          {/* Theme Toggle Button */}
          <motion.button
            title={light ? "Toggle DarkMode" : "Toggle LightMode"}
            className="text-2xl text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300 dark:text-darkBody"
            onClick={toggleMode}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.8 }}
            whileHover={{ scale: 1.2, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
          >
            {light ? <FaMoon /> : <FaSun />}
          </motion.button>
        </ul>

        {/* Mobile Menu Icon */}
        <motion.span
          onClick={toggleMenu}
          className={
            showMenu
              ? "hidden"
              : "text-3xl lg:hidden w-10 h-10 inline-flex items-center justify-center rounded-full cursor-pointer"
          }
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
        >
          <FiMenu />
        </motion.span>

        {/* Mobile Menu */}
        <AnimatePresence>
          {showMenu && (
            <>
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 bg-black/50 lg:hidden z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setShowMenu(false)}
              />

              {/* Menu Panel */}
              <motion.div
                className="w-[80%] lg:hidden h-screen overflow-scroll fixed top-0 left-0 bg-bodyColor dark:bg-white scrollbar-hide px-10 border-r-4 border-r-gray-900 dark:border-r-gray-500 z-50"
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <div className="flex flex-col gap-18 py-6 relative">
                  {/* Close Button */}
                  <motion.span
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: 180 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    whileHover={{ scale: 1.2, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setShowMenu(false)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-4xl cursor-pointer"
                  >
                    <MdClose />
                  </motion.span>

                  {/* Navigation Links */}
                  <motion.ul className="flex flex-col gap-8 mt-20">
                    {navLinksData.map((navlink, index) => (
                      <motion.li
                        className="text-lg font-semi-bold text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300 dark:text-darkBody"
                        key={navlink._id}
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -50, opacity: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        whileHover={{ x: 10, scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link
                          onClick={() => setShowMenu(false)}
                          activeClass={light ? "darkActive" : "active"}
                          to={navlink.link}
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                        >
                          {navlink.title}
                        </Link>
                      </motion.li>
                    ))}

                    {/* Mobile Theme Toggle */}
                    <motion.button
                      className="text-lg text-gray-400 tracking-wide cursor-pointer hover:text-designColor w-7 duration-300 dark:text-darkBody"
                      onClick={toggleMode}
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: navLinksData.length * 0.1,
                      }}
                      whileHover={{ scale: 1.2, rotate: 180 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {light ? <FaMoon /> : <FaSun />}
                    </motion.button>
                  </motion.ul>

                  {/* Social Links */}
                  <motion.div
                    className="flex flex-col gap-4"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <h2 className="uppercase font-titleFont font-semibold mb-4">
                      Find me in
                    </h2>
                    <nav className="flex gap-4">
                      <motion.a
                        target="_blanc"
                        href="https://m.me/favour.okpara.984991"
                        className="bannerIcon"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.4, delay: 0.7 }}
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaFacebookF />
                      </motion.a>
                      <motion.a
                        target="_blanc"
                        href="https://twitter.com/messages/compose?recipient_id=1633576892191195136"
                        className="bannerIcon"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.4, delay: 0.8 }}
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaXTwitter />
                      </motion.a>
                      <motion.a
                        target="_blanc"
                        href="https://www.linkedin.com/in/favour-okpara-8a14a4309?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        className="bannerIcon"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.4, delay: 0.9 }}
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaLinkedinIn />
                      </motion.a>
                    </nav>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </aside>
    </motion.section>
  );
}

export default NavBar;
