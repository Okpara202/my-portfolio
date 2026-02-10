import { useState } from "react";
import NavBar from "./components/navbar/navbar";
import Banner from "./components/banner/banner";
import Features from "./components/features/features";
import Project from "./components/projects/project";
import Resume from "./components/resume/resume";
import Testimonial from "./components/testimonial/testimonial";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import FooterBottom from "./components/footer/footerBottom";
import MiniMenu from "./components/miniMenu/miniMenu";

function App() {
  const [light, setLight] = useState(false);
  const [showMiniMenu, setShowMiniMenu] = useState(false);

  // TODO: Add animation to testimonial section

  const toggleMode = () => {
    setLight((prevState) => !prevState);

    document.body.classList.toggle("dark");
  };

  return (
    <div className="select-none w-full h-auto bg-bodyColor text-lightText dark:bg-white dark:text-black transition-all duration-1000 font-bodyFont px-4 overflow-x-hidden">
      <div className="sticky top-0 z-50">
        <NavBar toggleMode={toggleMode} light={light} />
      </div>
      <div className="max-w-screen-xl mx-auto lgl:px-16 overflow-x-hidden">
        <Banner />
        <Features />
        <Project />
        <Resume />
        <Testimonial />
        <Contact />
        <Footer />
        <FooterBottom />

        {/*Chat me on Whatsapp Contact icon */}
        <div className="fixed bottom-10 right-10 z-50">
          <a
            href="https://wa.me/2349131772736"
            target="_blank"
            rel="noopener noreferrer"
            title="Chat me on Whatsapp"
          >
            <img
              src="https://img.icons8.com/color/48/000000/whatsapp.png"
              alt="WhatsApp"
            />
          </a>
        </div>

        {/* Fixed Menu Icon */}
        <div className="fixed bottom-10 right-20 z-50">
          <button
            onClick={() => setShowMiniMenu(!showMiniMenu)}
            className="w-14 h-14 bg-designColor text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-all duration-300"
            title="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mini Menu */}
        <MiniMenu
          isOpen={showMiniMenu}
          onClose={() => setShowMiniMenu(false)}
        />
      </div>
    </div>
  );
}

export default App;
