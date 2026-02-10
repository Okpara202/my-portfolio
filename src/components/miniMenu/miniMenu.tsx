import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { navLinksData } from "../navbar/navbarStuff/navLink";
import {
  FaX,
  FaHouse,
  FaUser,
  FaBriefcase,
  FaCode,
  FaStar,
  FaFileCode,
} from "react-icons/fa6";

interface MiniMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

function MiniMenu({ isOpen, onClose }: MiniMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/20 backdrop-blur-md z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-bodyColor dark:bg-white rounded-lg shadow-2xl z-50 p-6 max-w-sm mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <button
                onClick={onClose}
                className="text-white dark:text-black hover:text-designColor dark:hover:text-blue-700 transition-colors duration-200"
              >
                <FaX className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col gap-4">
              {navLinksData.map((navlink) => {
                const getIcon = () => {
                  switch (navlink.title.toLowerCase()) {
                    case "home":
                      return <FaHouse />;
                    case "features":
                      return <FaCode />;
                    case "projects":
                      return <FaBriefcase />;
                    case "resume":
                      return <FaUser />;
                    case "testimonial":
                      return <FaStar />;
                    case "contacts":
                      return <FaFileCode />;
                    default:
                      return null;
                  }
                };

                return (
                  <Link
                    key={navlink._id}
                    to={navlink.link}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={onClose}
                    className="flex items-center gap-3 text-lg text-gray-300 dark:text-gray-700 hover:text-designColor dark:hover:text-blue-700 transition-colors duration-200 py-3 px-4 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-100"
                  >
                    <span className="text-xl mr-3">{getIcon()}</span>
                    <span>{navlink.title}</span>
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default MiniMenu;
