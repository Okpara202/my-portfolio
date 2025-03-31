import ResumeCard from "./resumeCard";
import { motion } from "framer-motion";
function Education() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 3 } }}
      className="w-full flex flex-col mdl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont">
          <p className="text-sm font-medium text-designColor tracking-[4px] dark:text-blue-700">
            2004-2023
          </p>
          <h2 className="text-4xl dark:text-gray-700 font-bold">
            Educational Qualification
          </h2>
        </div>
        <aside className="w-full h-auto border-l-[6px] border-black dark:border-blue-950 lgl:mt-14 mt-6 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Human Anatomy"
            subTitle="Enugu State University of Science and Technology (2018 -2023)"
            description={[
              "Equipped with critical thinking, problem-solving, and practical skills to navigate real-world challenges.",
            ]}
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Holy Trinity College, Ngbo (2010 -2016)"
            description={[
              "Developed foundational knowledge, discipline, and critical thinking skills for future academic and life success.",
            ]}
          />
          <ResumeCard
            title="Primary Education"
            subTitle="Universal Nursery and Primary School, Abakaliki (2004 -2010)"
            description={[
              "Developed basic literacy, numeracy, social skills, and a foundation for lifelong learning and growth",
            ]}
          />
        </aside>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont">
          <p className="text-sm font-medium text-designColor tracking-[4px] dark:text-blue-700">
            2023 - PRESENT
          </p>
          <h2 className="text-4xl dark:text-gray-700 font-bold">
            Job Experience
          </h2>
        </div>
        <aside className="w-full h-auto border-l-[6px] border-black dark:border-blue-950 lgl:mt-14 mt-6 flex flex-col gap-10">
          <ResumeCard
            title="FrontEnd Intern"
            subTitle="Genesys Tech Hub,Enugu(2024 - 2025)"
            description={[
              "Developed responsive and interactive web applications using React.js, Next.js, and Redux Toolkit.",
              "Collaborated with designers and backend developers to deliver seamless UI/UX.",
              "Integrated RESTful APIs and optimized front-end performance for better user experience",
              "Ensured cross-browser compatibility and mobile responsiveness.",
            ]}
          />
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
            ]}
          />
        </aside>
      </div>
    </motion.div>
  );
}

export default Education;
