import { motion } from "framer-motion";

function Skills() {
  const softSkills = [
    { name: "Communication Skills", percentage: 100 },
    { name: "Problem-Solving & Critical Thinking", percentage: 80 },
    { name: "Adaptability & Continuous Learning", percentage: 95 },
    { name: "Empathy & User-Centered Thinking", percentage: 100 },
    { name: "Time Management & Organization", percentage: 70 },
    { name: "Collaboration & Teamwork", percentage: 100 },
    { name: "Attention to Detail", percentage: 100 },
  ];

  const devSkills = [
    "Core Technologies (HTML, CSS, JavaScript/TypeScript )",
    "Frameworks & Libraries(Next.js, React.js, Express.js, Nest.js )",
    "Styling & UI Libraries (Tailwind CSS, Chakra UI, CSS-in-JS library )",
    "API Integration & Data Fetching (REST APIs, React Query or Axios)",
    "Performance Optimization (React.lazy, Suspense, useMemo, useCallback)",
    "Collaboration & Teamwork",
    "Version Control & Deployment ( Git & Github, Vercel, Netlify )",
    "State Management ( Redux Toolkit, Zustand )",
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full flex flex-col mdl:flex-row mdl:gap-20"
    >
      {/* Soft Skills Section */}
      <motion.aside
        className="w-full mdl:w-1/2"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="py-12 font-titleFont">
          <motion.p
            className="text-sm font-medium text-designColor tracking-[4px] dark:text-blue-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            FEATURES
          </motion.p>
          <motion.h2
            className="text-4xl dark:text-gray-700 font-bold"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Soft Skills
          </motion.h2>
          <div className="mt-14 w-full flex flex-col gap-6">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="overflow-x-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              >
                <p className="text-sm uppercase font-medium">{skill.name}</p>
                <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.percentage}%` }}
                    transition={{
                      duration: 1,
                      delay: 0.6 + index * 0.1,
                      ease: "easeOut",
                    }}
                    className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                  >
                    <motion.span
                      className="absolute -top-7 right-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.2 + index * 0.1 }}
                    >
                      {skill.percentage}%
                    </motion.span>
                  </motion.span>
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.aside>

      {/* Development Skills Section */}
      <motion.aside
        className="w-full mdl:w-1/2"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="py-12 font-titleFont">
          <motion.p
            className="text-sm font-medium text-designColor tracking-[4px] dark:text-blue-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            FEATURES
          </motion.p>
          <motion.h2
            className="text-4xl dark:text-gray-700 font-bold"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Development Skills
          </motion.h2>
          <div className="mt-14 w-full flex flex-col gap-6">
            {devSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="overflow-x-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              >
                <p className="text-sm uppercase font-medium">{skill}</p>
                <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{
                      duration: 1,
                      delay: 0.6 + index * 0.1,
                      ease: "easeOut",
                    }}
                    className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                  />
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.aside>
    </motion.div>
  );
}

export default Skills;
