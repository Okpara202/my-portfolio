import { motion } from "framer-motion";
function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 3 } }}
      className="w-full flex flex-col mdl:flex-row  mdl:gap-20"
    >
      <aside className="w-full mdl:w-1/2">
        <div className="py-12 font-titleFont">
          <p className="text-sm font-medium text-designColor tracking-[4px] dark:text-blue-700">
            FEATURES
          </p>
          <h2 className="text-4xl dark:text-gray-700 font-bold">Soft Skills</h2>
          <div className="mt-14 w-full flex flex-col gap-6">
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">
                Communication Skills
              </p>
              <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.7 }}
                  className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">100%</span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">
                Problem-Solving & Critical Thinking
              </p>
              <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.7 }}
                  className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">80%</span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">
                Adaptability & Continuous Learning
              </p>
              <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.7 }}
                  className="w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">95%</span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">
                Empathy & User-Centered Thinking
              </p>
              <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.7 }}
                  className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">100%</span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">
                Time Management & Organization
              </p>
              <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.7 }}
                  className="w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">70%</span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">
                Collaboration & Teamwork
              </p>
              <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.7 }}
                  className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">100%</span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">
                Attention to Detail
              </p>
              <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.7 }}
                  className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">100%</span>
                </motion.span>
              </span>
            </div>
          </div>
        </div>
      </aside>
      <aside className="w-full mdl:w-1/2">
        <div className="py-12 font-titleFont">
          <p className="text-sm font-medium text-designColor tracking-[4px] dark:text-blue-700">
            FEATURES
          </p>
          <h2 className="text-4xl dark:text-gray-700 font-bold">
            Development Skills
          </h2>
          <div className="mt-14 w-full flex flex-col gap-6">
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">
                Core Technologies (HTML, CSS, JavaScript/TypeScript )
              </p>
              <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.7 }}
                  className="w-[100%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0"></span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">
                Frontend Frameworks & Libraries(Next.js, React.js )
              </p>
              <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.7 }}
                  className="w-[100%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0"></span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">
                Styling & UI Libraries (Tailwind CSS, Chakra UI, CSS-in-JS
                library )
              </p>
              <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.7 }}
                  className="w-[100%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0"></span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">
                API Integration & Data Fetching (REST APIs, React Query or
                Axios)
              </p>
              <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.7 }}
                  className="w-[100%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0"></span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">
                Performance Optimization (React.lazy, Suspense, useMemo,
                useCallback)
              </p>
              <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.7 }}
                  className="w-[100%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0"></span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">
                Collaboration & Teamwork
              </p>
              <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.7 }}
                  className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0"></span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">
                Version Control & Deployment ( Git & Github, Vercel, Netlify )
              </p>
              <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.7 }}
                  className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0"></span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">
                State Management ( Redux Toolkit, Zustand )
              </p>
              <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.7 }}
                  className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0"></span>
                </motion.span>
              </span>
            </div>
          </div>
        </div>
      </aside>
    </motion.div>
  );
}

export default Skills;
