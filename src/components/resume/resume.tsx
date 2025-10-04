import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Title from "../layouts/title";
import Achievements from "./achievement";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

function Resume() {
  const [education, setEducation] = useState("education");

  const tabs = [
    { id: "education", label: "Education" },
    { id: "skill", label: "Professional Skills" },
    { id: "experience", label: "Experience" },
    { id: "achievement", label: "Achievements" },
  ];

  return (
    <>
      <motion.section
        id="resume"
        className="w-full py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ margin: "-100px" }}
      >
        <motion.div
          className="text-center"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ margin: "-100px" }}
        >
          <Title title="3+ years of experience" des="My Resume" />
        </motion.div>

        <motion.ul
          className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 rounded-xl overflow-hidden"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ margin: "-100px" }}
        >
          {tabs.map((tab, index) => (
            <motion.li
              key={tab.id}
              onClick={() => setEducation(tab.id)}
              className={
                education === tab.id
                  ? "resume-li border-designColor dark:border-2 dark:border-amber-500 rounded-lg"
                  : "border-transparent resume-li"
              }
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              viewport={{ margin: "-100px" }}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {tab.label}
            </motion.li>
          ))}
        </motion.ul>

        <AnimatePresence mode="wait">
          <motion.div
            key={education}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {education === "education" && <Education />}
            {education === "skill" && <Skills />}
            {education === "achievement" && <Achievements />}
            {education === "experience" && <Experience />}
          </motion.div>
        </AnimatePresence>
      </motion.section>

      <motion.section
        className="w-[20%] border-b-[10px] mx-auto border-dotted border-white dark:border-gray-500"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ margin: "-100px" }}
      />
    </>
  );
}

export default Resume;
