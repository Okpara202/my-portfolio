import { FaMoon, FaSun } from "react-icons/fa";
import { GlowingLogo } from "./navbarStuff/logoSvg";
import { navLinksData } from "./navbarStuff/navLink";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function NavBar({ toggleMode, light }: { toggleMode(): void; light: boolean }) {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prevState) => !prevState);
  };
  return (
    <section className="w-full h-22 mx-auto flex justify-between items-center font-titleFont border-b-[2px] border-b-gray-500  bg-bodyColor dark:bg-white px-6">
      <aside>
        <GlowingLogo />
      </aside>
      <aside>
        <ul className={"hidden lg:inline-flex items-center gap-10"}>
          {navLinksData.map((navlink) => (
            <li
              className="text-base text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300 dark:text-darkBody "
              key={navlink._id}
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
            </li>
          ))}
          <button
            className="text-lg text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300 dark:text-darkBody"
            onClick={toggleMode}
          >
            {light ? <FaMoon /> : <FaSun />}
          </button>
        </ul>
        <span
          onClick={toggleMenu}
          className="text-3xl lg:hidden w-10 h-10 inline-flex items-center justify-center rounded-full cursor-pointer"
        >
          {!showMenu && <FiMenu />}
        </span>
        {showMenu && (
          <div className="w-[80%] lg:hidden h-screen overflow-scroll absolute top-0 -left-4 bg-bodyColor dark:bg-white  scrollbar-hide px-10 border-r-4 border-r-gray-900 dark:border-r-gray-500">
            <div className="flex flex-col gap-18 py-6 relative">
              <ul className="flex flex-col gap-8 mt-20">
                {navLinksData.map((navlink) => (
                  <li
                    className="text-lg font-semi-bold text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300 dark:text-darkBody"
                    key={navlink._id}
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
                  </li>
                ))}
                <button
                  className="text-lg text-gray-400 tracking-wide cursor-pointer hover:text-designColor w-7 duration-300 dark:text-darkBody"
                  onClick={toggleMode}
                >
                  {light ? <FaMoon /> : <FaSun />}
                </button>
              </ul>

              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-4xl cursor-pointer"
              >
                <MdClose />
              </span>
              <div className="flex flex-col gap-4">
                <h2 className="uppercase font-titleFont font-semibold mb-4">
                  Find me in
                </h2>
                <nav className="flex gap-4">
                  <a
                    target="_blanc"
                    href="https://m.me/favour.okpara.984991"
                    className="bannerIcon"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    target="_blanc"
                    href="https://twitter.com/messages/compose?recipient_id=1633576892191195136"
                    className="bannerIcon"
                  >
                    <FaXTwitter />
                  </a>
                  <a
                    target="_blanc"
                    href="https://www.linkedin.com/in/favour-okpara-8a14a4309?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
                    className="bannerIcon"
                  >
                    <FaLinkedinIn />
                  </a>
                </nav>
              </div>
            </div>
          </div>
        )}
      </aside>
    </section>
  );
}

export default NavBar;
