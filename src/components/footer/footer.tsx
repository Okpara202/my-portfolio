import { FaFacebookF, FaLinkedinIn, FaX } from "react-icons/fa6";
import { GlowingLogo } from "../navbar/navbarStuff/logoSvg";

function Footer() {
  return (
    <section className="w-full py-20 h-auto mt-5 border-y-[1px] border-black grid grid-cols-2 md:grid-cols-4 md:gap-8">
      <div className="w-full  h-full flex flex-col gap-8">
        <GlowingLogo />
        <nav className="flex gap-4 flex-col lg:flex-row">
          <a
            target="_blanc"
            href="https://m.me/favour.okpara.984991"
            className="bannerIcon"
          >
            <FaFacebookF />
          </a>
          <a
            target="_blanc"
            href="https://twitter.com/messages/compose?recipient_href=1633576892191195136"
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
      <div className="w-full h-full  justify-items-center md:justify-items-normal">
        <h3 className="text-xl uppercase dark:text-black dark:font-semibold text-designColor  tracking-wider">
          Quick Link
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium overflow-hidden dark:text-gray-700 py-6">
          <li>
            <a
              className="w-full text-lg hover:text-designColor cursor-pointer duration-300 relative group"
              href="#home"
            >
              About me
              <span className="absolute h-[1px] w-full inline-flex -bottom-1 left-0 -translate-x-[100%] bg-designColor group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>
          <li>
            <a
              className="w-full text-lg hover:text-designColor cursor-pointer duration-300 relative group"
              href="#contacts"
            >
              Contact me
              <span className="absolute h-[1px] w-full inline-flex -bottom-1 left-0 -translate-x-[100%] bg-designColor group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>
          <li>
            <a
              className="w-full text-lg hover:text-designColor cursor-pointer duration-300 relative group"
              href="#projects"
            >
              My projects
              <span className="absolute h-[1px] w-full inline-flex -bottom-1 left-0 -translate-x-[100%] bg-designColor group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>
          <li>
            <a
              className="w-full text-lg hover:text-designColor cursor-pointer duration-300 relative group"
              href="#features"
            >
              What I do?
              <span className="absolute h-[1px] w-full inline-flex -bottom-1 left-0 -translate-x-[100%] bg-designColor group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>
          <li>
            <a
              className="w-full text-lg hover:text-designColor cursor-pointer duration-300 relative group"
              href="#testimonial"
            >
              Testimonial
              <span className="absolute h-[1px] w-full inline-flex -bottom-1 left-0 -translate-x-[100%] bg-designColor group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full h-full justify-items-center md:justify-items-normal">
        <h3 className="text-xl uppercase dark:text-black dark:font-semibold text-designColor tracking-wider">
          Resources
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium overflow-hidden dark:text-gray-700 py-6">
          <li>
            <span className="w-full text-lg hover:text-designColor cursor-pointer duration-300 relative group">
              Authentication
              <span className="absolute h-[1px] w-full inline-flex -bottom-1 left-0 -translate-x-[100%] bg-designColor group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg hover:text-designColor cursor-pointer duration-300 relative group">
              System Status
              <span className="absolute h-[1px] w-full inline-flex -bottom-1 left-0 -translate-x-[100%] bg-designColor group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg hover:text-designColor cursor-pointer duration-300 relative group">
              Terms of Service
              <span className="absolute h-[1px] w-full inline-flex -bottom-1 left-0 -translate-x-[100%] bg-designColor group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg hover:text-designColor cursor-pointer duration-300 relative group">
              Pricing
              <span className="absolute h-[1px] w-full inline-flex -bottom-1 left-0 -translate-x-[100%] bg-designColor group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg hover:text-designColor cursor-pointer duration-300 relative group">
              CopyRight
              <span className="absolute h-[1px] w-full inline-flex -bottom-1 left-0 -translate-x-[100%] bg-designColor group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
        </ul>
      </div>
      <div className="w-full h-full justify-items-center md:justify-items-normal">
        <h3 className="text-xl uppercase dark:text-black dark:font-semibold text-designColor tracking-wider">
          Developers
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium overflow-hidden dark:text-gray-700 py-6">
          <li>
            <span className="w-full text-lg hover:text-designColor cursor-pointer duration-300 relative group">
              Documentation
              <span className="absolute h-[1px] w-full inline-flex -bottom-1 left-0 -translate-x-[100%] bg-designColor group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg hover:text-designColor cursor-pointer duration-300 relative group">
              Authentication
              <span className="absolute h-[1px] w-full inline-flex -bottom-1 left-0 -translate-x-[100%] bg-designColor group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg hover:text-designColor cursor-pointer duration-300 relative group">
              API Reference
              <span className="absolute h-[1px] w-full inline-flex -bottom-1 left-0 -translate-x-[100%] bg-designColor group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg hover:text-designColor cursor-pointer duration-300 relative group">
              Support
              <span className="absolute h-[1px] w-full inline-flex -bottom-1 left-0 -translate-x-[100%] bg-designColor group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg hover:text-designColor cursor-pointer duration-300 relative group">
              Open Source
              <span className="absolute h-[1px] w-full inline-flex -bottom-1 left-0 -translate-x-[100%] bg-designColor group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Footer;
