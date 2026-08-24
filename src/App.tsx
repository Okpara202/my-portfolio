import { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";
import { Intro } from "./components/Intro";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Backdrop } from "./components/ui/Backdrop";
import { ScrollProgress } from "./components/ui/ScrollProgress";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Journey } from "./components/sections/Journey";
import { Work } from "./components/sections/Work";
import { Now } from "./components/sections/Now";
import { Toolkit } from "./components/sections/Toolkit";
import { Writing } from "./components/sections/Writing";
import { Testimonials } from "./components/sections/Testimonials";
import { Contact } from "./components/sections/Contact";
import { profile } from "./data/site";

function App() {
  /* The hero holds its entrance until the boot sequence hands over. */
  const [ready, setReady] = useState(false);

  return (
    <>
      <Intro onDone={() => setReady(true)} />

      <Backdrop />
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero ready={ready} />
        <About />
        <Journey />
        <Work />
        <Now />
        <Toolkit />
        <Writing />
        <Testimonials />
        <Contact />
      </main>

      <Footer />

      <motion.a
        href={profile.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        title="Message me on WhatsApp"
        aria-label="Message me on WhatsApp"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-brown text-white flex items-center justify-center text-2xl shadow-lg glow-brown"
        initial={{ scale: 0, opacity: 0 }}
        animate={ready ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ delay: 0.9, type: "spring", stiffness: 260, damping: 18 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.94 }}
      >
        <FaWhatsapp />
      </motion.a>
    </>
  );
}

export default App;
