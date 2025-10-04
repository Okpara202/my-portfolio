import { motion } from "framer-motion";
import {
  FaCode,
  FaDatabase,
  FaLaptopCode,
  FaServer,
  FaShieldHalved,
  FaPaintbrush,
} from "react-icons/fa6";
import Title from "../layouts/title";
import Card from "./card";

function Features() {
  return (
    <>
      <motion.section
        id="features"
        className="w-full py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ margin: "-100px" }}
      >
        <Title title="Features" des="What I Do" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 xl:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card
              title="Building UI Components"
              description="Developing reusable and responsive UI components using React, TypeScript, and modern frontend frameworks."
              icon={<FaCode />}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <Card
              title="State Management & Performance"
              description="Managing application state with Redux, Zustand, and optimizing React performance for scalable apps."
              icon={<FaLaptopCode />}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Card
              title="Modern Styling & Design Systems"
              description="Creating beautiful interfaces with Tailwind CSS, Chakra UI, and implementing design systems."
              icon={<FaPaintbrush />}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.65 }}
          >
            <Card
              title="Building RESTful APIs"
              description="Designing and developing scalable REST APIs with Node.js, Express, and modern backend frameworks."
              icon={<FaServer />}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Card
              title="Database Design & Management"
              description="Architecting efficient database schemas with PostgreSQL, MongoDB, and implementing optimized queries."
              icon={<FaDatabase />}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.95 }}
          >
            <Card
              title="Authentication & Security"
              description="Implementing secure authentication systems with JWT, OAuth, and following security best practices."
              icon={<FaShieldHalved />}
            />
          </motion.div>
        </div>
      </motion.section>
      <motion.section
        className="w-[20%] border-b-[10px] mx-auto border-dotted border-white dark:border-gray-500"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      />
    </>
  );
}

export default Features;
