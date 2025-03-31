import {} from "react-icons/fa";
import { FaFacebookF, FaLinkedinIn, FaX } from "react-icons/fa6";
function ContactLeft() {
  return (
    <div className="w-full lg:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b]  rounded-lg p-8 shadow-shadowOne flex flex-col gap-8 justify-center dark:bg-gradient-to-r dark:from-transparent dark:to-transparent dark:border-2 dark:border-gray-300">
      <img
        className="w-full h-64 object-cover rounded-lg"
        src="../../../public/image/contactImg.png"
        alt="Men shaking hands"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white dark:text-black">
          Favour Okpara
        </h3>
        <p className="text-lg font-normal text-gray-400 dark:text-gray-700">
          Developer & Writer
        </p>
        <p className="text-gray text-gray-400 dark:text-gray-700 tracking-wide">
          Open to opportunities in development and writing—whether you have a
          project in mind or just want to discuss ideas, let’s connect!
        </p>
        <p className="text-gray-400 dark:text-gray-700 flex items-center gap-2">
          Phone:
          <span className="text-lightText dark:text-bodyColor">
            +2349131772736
          </span>
        </p>
        <p className="text-gray-400 dark:text-gray-700 flex items-center gap-2">
          Email:
          <span className="text-lightText dark:text-bodyColor">
            okparafavour202@gmail.com
          </span>
        </p>
      </div>
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
    </div>
  );
}

export default ContactLeft;
