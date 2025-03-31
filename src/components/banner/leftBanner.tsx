import { FaFacebookF, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SpinningCircle } from "../navbar/navbarStuff/logoSvg";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { Link } from "react-scroll";
import { FaX } from "react-icons/fa6";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

function LeftBanner() {
  const [text] = useTypewriter({
    words: [
      "Professional Developer.",
      "Frontend Engineer.",
      "Technical Writer.",
    ],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 10,
    delaySpeed: 1000,
  });
  return (
    <aside className="w-full lgl:w-[45%] flex flex-col gap-15  lgl:gap-20">
      <div className="flex flex-col gap-5">
        <h4 className="text-lg flex dark:text-darkBody">
          WELCOME TO MY WORLD <SpinningCircle />
        </h4>
        <h1 className="text-6xl font-bold text-white dark:text-gray-500 ">
          Hi, I am{" "}
          <span className="text-designColor capitalize">Favour Okpara</span>
        </h1>
        <h2 className=" text-4xl font-bold  text-white dark:text-gray-500">
          a{" "}
          <span>
            {text}
            <Cursor
              cursorBlinking={true}
              cursorStyle="|"
              cursorColor="#ff014f"
            />
          </span>
        </h2>
        <h2>
          I turn ideas into interactive, pixel-perfect experiences. I build
          sleek UIs with React, Redux, Next and Chakra UI, ensuring everything
          looks smooth and works flawlessly. Code meets creativity—whether it's
          animations, responsive layouts, or optimizing performance, I love
          making the web fast, functional, and fun! Always learning, always
          building. Let's create something amazing! Looking forward to working
          with you.
        </h2>
      </div>

      <a href="/OKPARA FAVOUR CHINECHEREM.pdf" download>
        <button className="border-2 mx-auto lgl:mx-0 border-designColor text-designColor rounded py-2 block w-[200px] transition-all duration-500 dark:border-blue-700 dark:text-blue-700 hover:border-white hover:text-white dark:hover:text-designColor dark:hover:border-designColor  ">
          Checkout my Cv
        </button>
      </a>
      <section className="flex flex-col sml:flex-row gap-6 lgl:gap-10 justify-between">
        <div className="mx-auto sml:mx-0">
          <h2 className=" text-center lgl:text-left uppercase font-titleFont font-semibold  mb-4">
            Find me on
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
              <FaX />
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
        <div className="hidden sml:block">
          <h2 className="uppercase font-titleFont font-semibold mb-4">
            Best skills on
          </h2>
          <nav className="flex gap-4">
            <Link to="" className="bannerIcon">
              <FaReact />
            </Link>
            <Link to="" className="bannerIcon">
              <SiNextdotjs />
            </Link>
            <Link to="" className="bannerIcon">
              <SiTailwindcss />
            </Link>
          </nav>
        </div>
      </section>
    </aside>
  );
}

export default LeftBanner;
