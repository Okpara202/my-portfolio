import { useState } from "react";
import Title from "../layouts/title";
import Achievements from "./achievement";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

function Resume() {
  const [education, setEducation] = useState("education");

  return (
    <>
      <section id="resume" className="w-full py-20">
        <div className="text-center">
          <Title title="3+ years of experience" des="My Resume" />
        </div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 rounded-xl  overflow-hidden">
          <li
            onClick={() => setEducation("education")}
            className={
              education === "education"
                ? "resume-li border-designColor dark:border-2 dark:border-amber-500 rounded-lg"
                : "border-transparent resume-li"
            }
          >
            Education
          </li>
          <li
            onClick={() => setEducation("skill")}
            className={
              education === "skill"
                ? "resume-li border-designColor dark:border-2 dark:border-amber-500 rounded-lg"
                : "border-transparent resume-li"
            }
          >
            Professional Skills
          </li>
          <li
            onClick={() => setEducation("experience")}
            className={
              education === "experience"
                ? "resume-li border-designColor dark:border-2 dark:border-amber-500 rounded-lg"
                : "border-transparent resume-li"
            }
          >
            Experience
          </li>
          <li
            onClick={() => setEducation("achievement")}
            className={
              education === "achievement"
                ? "resume-li border-designColor dark:border-2 dark:border-amber-500 rounded-lg"
                : "border-transparent resume-li"
            }
          >
            Achievements
          </li>
        </ul>

        {education === "education" && <Education />}
        {education === "skill" && <Skills />}
        {education === "achievement" && <Achievements />}
        {education === "experience" && <Experience />}
      </section>
      <section className="w-[20%] border-b-[10px] mx-auto border-dotted border-white dark:border-gray-500"></section>
    </>
  );
}

export default Resume;
