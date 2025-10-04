import LeftBanner from "./leftBanner";
import { motion } from "framer-motion";

function Banner({ light }: { light: boolean }) {
  return (
    <>
      <section
        id="home"
        className="w-full py-20 flex flex-col gap-15 lgl:gap-0 lgl:flex-row items-center justify-between font-titleFont dark:border-b-darkBody dark:text-darkBody"
      >
        <LeftBanner />

        {/* Image side */}
        <motion.aside
          className="w-full lgl:w-[45%] flex justify-center items-center relative"
          initial={{ x: 100, opacity: 0, scale: 0.8 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.img
            className="rounded-4xl z-10"
            src={light ? "/image/favour cartoon.jpg" : "/image/favour1.jpg"}
            alt="Image of Favour Okpara"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
          />
          <motion.div
            className="absolute bottom-0 w-auto h-auto bg-gradient-to-r from-bodyColor to-[#202327]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.aside>
      </section>
      <motion.section
        className="w-[20%] border-b-[10px] mx-auto border-dotted border-white dark:border-gray-500"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.7 }}
      />
    </>
  );
}

export default Banner;
