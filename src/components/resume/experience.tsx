import ResumeCard from "./resumeCard";
import { motion } from "framer-motion";

function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full flex flex-col mdl:flex-row gap-10 lgl:gap-20"
    >
      {/* Job Experience Section */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="py-6 lgl:py-12 font-titleFont">
          <motion.p
            className="text-sm font-font-medium text-designColor tracking-[4px] dark:text-blue-700"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            2023 - PRESENT
          </motion.p>
          <motion.h2
            className="text-4xl dark:text-gray-700 font-bold"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            Job Experience
          </motion.h2>
        </div>

        <aside className="w-full h-auto border-l-[6px] border-black dark:border-blue-950 lgl:mt-14 mt-6 flex flex-col gap-10">
          {[
            {
              title: "Frontend Developer",
              subTitle: "Simbi",
              description: [
                "Implemented UI components using Chakra UI, Tailwind CSS, and CSS Modules for responsive design.",
                "Integrated RESTful APIs and handled state management with Redux Toolkit.",
                "Collaborated with senior developers in debugging, troubleshooting, and optimizing front-end performance.",
              ],
            },
            {
              title: "FrontEnd Intern",
              subTitle: "Genesys Tech Hub,Enugu(2024 - 2025)",
              description: [
                "Assisted in developing and maintaining React.js and Next.js web applications.",
                "Implemented UI components using Chakra UI, Tailwind CSS, and CSS Modules for responsive design.",
                "Integrated RESTful APIs and handled state management with Redux Toolkit.",
                "Collaborated with senior developers in debugging, troubleshooting, and optimizing front-end performance.",
                "Gained hands-on experience with React Hook Form & Zod for form validation and user input handling.",
                "Participated in code reviews, Agile meetings, and team discussions to improve coding standards.",
                "Learned and applied best practices in version control (Git/GitHub) and code documentation.",
              ],
            },
            {
              title: "Web Development Tutor",
              subTitle: "LanceySoft Technologies, Abuja, Nigeria (2023 -2025)",
              description: [
                "Taught HTML, CSS, JavaScript, TypeScript, React.js, and Next.js to beginners and intermediate learners.",
                "Designed structured lesson plans, tutorials, and hands-on projects to reinforce learning.",
                "Guided students in building responsive and interactive web applications using modern frameworks.",
                "Explained complex concepts like state management (Redux Toolkit), API integration, and performance optimization in a simple and engaging way.",
                "Assisted students in debugging code, writing clean code, and following best practices.",
                "Provided mentorship through one-on-one sessions, live coding demonstrations, and interactive Q&A discussions.",
                "Introduced essential developer tools such as Git/GitHub, React Hook Form, Zod, and Chakra UI.",
              ],
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
              whileHover={{ x: 5, scale: 1.02 }}
            >
              <ResumeCard {...card} />
            </motion.div>
          ))}
        </aside>
      </motion.div>

      {/* Other Experiences Section */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="py-6 lgl:py-12 font-titleFont">
          <motion.p
            className="text-sm font-font-medium text-designColor tracking-[4px] dark:text-blue-700"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            2023 - 2024
          </motion.p>
          <motion.h2
            className="text-4xl dark:text-gray-700 font-bold"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            Other Experiences
          </motion.h2>
        </div>

        <aside className="w-full h-auto border-l-[6px] border-black dark:border-blue-950 lgl:mt-14 mt-6 flex flex-col gap-10">
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ x: 5, scale: 1.02 }}
          >
            <ResumeCard
              title="National Youth Service Corp"
              subTitle="221 Light Tank Battalion, Wawa Cantonement (2023 - 2024)"
              description={[
                "Served as an Instructor during the National Youth Service Corps (NYSC).",
                "Engaged in capacity-building programs, leadership trainings, and team collaborations to support organizational goals.",
                "Organized and participated in community service (CDS) projects, promoting social impact initiatives.",
                "Developed technical and soft skills, including problem-solving, communication, and teamwork",
              ]}
            />
          </motion.div>
        </aside>
      </motion.div>
    </motion.div>
  );
}

export default Experience;
