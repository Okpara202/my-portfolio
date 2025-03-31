import ResumeCard from "./resumeCard";
import { motion } from "framer-motion";
function Achievements() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 3 } }}
      className="w-full flex flex-col mdl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont">
          <p className="text-sm font-font-medium text-designColor tracking-[4px] dark:text-blue-700">
            2024 - PRESENT
          </p>
          <h2 className="text-4xl dark:text-gray-700 font-bold">
            Frontend Developer
          </h2>
        </div>

        <aside className="w-full h-auto border-l-[6px] border-black dark:border-blue-950 lgl:mt-14 mt-6 flex flex-col gap-10">
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
        </aside>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont">
          <p className="text-sm font-font-medium text-designColor tracking-[4px] dark:text-blue-700">
            2023 - 2024
          </p>
          <h2 className="text-4xl dark:text-gray-700 font-bold">
            Frontend Tutor
          </h2>
        </div>
        <aside className="w-full h-auto border-l-[6px] border-black dark:border-blue-950 lgl:mt-14 mt-6 flex flex-col gap-10">
          <ResumeCard
            title="Frontend Tutor"
            subTitle="LanceySoft Technologies, Abuja, Nigeria (2023 -2024)"
            description={[
              "Taught HTML, CSS, JavaScript, React.js, and Next.js to students of varying skill levels.",

              "Guided learners in building responsive and interactive web applications using modern frameworks.",

              "Explained complex concepts like state management (Redux Toolkit), API integration, and performance optimization.",

              "Assisted students in debugging code, improving problem-solving skills, and writing clean, maintainable code.",

              "Provided hands-on projects and coding challenges to reinforce theoretical knowledge.",
              "Introduced best practices in version control (Git/GitHub), UI/UX principles, and accessibility.",

              "Conducted one-on-one mentoring sessions, live coding demonstrations, and Q&A discussions.",
            ]}
          />
        </aside>
      </div>
    </motion.div>
  );
}

export default Achievements;
