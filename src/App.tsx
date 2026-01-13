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

function App() {
  const [light, setLight] = useState(false);

  // TODO: Add animation to testimonial section

  const toggleMode = () => {
    setLight((prevState) => !prevState);

    document.body.classList.toggle("dark");
  };

  return (
    <div className="select-none w-full h-auto bg-bodyColor text-lightText dark:bg-white dark:text-black transition-all duration-1000 font-bodyFont px-4">
      <div className="sticky top-0 z-50">
        <NavBar toggleMode={toggleMode} light={light} />
      </div>
      <div className="max-w-screen-xl mx-auto  lgl:px-16">
        <Banner light={light} />
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
      </div>
    </div>
  );
}

export default App;
