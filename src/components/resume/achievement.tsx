import ResumeCard from "./resumeCard";
import { motion } from "framer-motion";

function Achievements() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full flex flex-col mdl:flex-row gap-10 lgl:gap-20"
    >
      {/* Frontend Developer Section */}
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
            2024 - PRESENT
          </motion.p>
          <motion.h2
            className="text-4xl dark:text-gray-700 font-bold"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            Frontend Developer
          </motion.h2>
        </div>

        <aside className="w-full h-auto border-l-[6px] border-black dark:border-blue-950 lgl:mt-14 mt-6 flex flex-col gap-10">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ x: 5, scale: 1.02 }}
          >
            <ResumeCard
              title="FrontEnd Intern"
              subTitle="Genesys Tech Hub,Enugu(2024 - 2025)"
              description={[
                "Developed responsive and interactive web applications using React.js, Next.js, and Redux Toolkit.",
                "Integrated RESTful APIs and optimized front-end performance for better user experience.",
                "Implemented React Hook Form & Zod for form validation and data handling.",
                "Styled applications with Chakra UI, Tailwind CSS, and CSS-in-JS frameworks.",
                "Managed state efficiently with Redux Toolkit and handled routing using React Router.",
                "Collaborated with designers and backend developers to deliver seamless UI/UX.",
                "Ensured cross-browser compatibility and mobile responsiveness.",
              ]}
            />
          </motion.div>
        </aside>
      </motion.div>

      {/* Web Development Tutor Section */}
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
            2023 - 2025
          </motion.p>
          <motion.h2
            className="text-4xl dark:text-gray-700 font-bold"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            Web Development Tutor
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
              title="Web Dev Tutor"
              subTitle="LanceySoft Technologies, Abuja, Nigeria (2023 -2024)"
              description={[
                "Taught HTML, CSS, JavaScript, React.js, Next.js, Express, Node and Nest.js to students of varying skill levels.",
                "Guided learners in building responsive and interactive web applications using modern frameworks.",
                "Explained complex concepts like state management (Redux Toolkit), API integration, and performance optimization.",
                "Assisted students in debugging code, improving problem-solving skills, and writing clean, maintainable code.",
                "Provided hands-on projects and coding challenges to reinforce theoretical knowledge.",
                "Introduced best practices in version control (Git/GitHub), UI/UX principles, and accessibility.",
                "Conducted one-on-one mentoring sessions, live coding demonstrations, and Q&A discussions.",
              ]}
            />
          </motion.div>
        </aside>
      </motion.div>
    </motion.div>
  );
}

export default Achievements;
