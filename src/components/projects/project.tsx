import { motion } from "framer-motion";
import Title from "../layouts/title";
import ProjectCard from "./projectCard";
import { projects } from "./projectList";

function Project() {
  return (
    <>
      <motion.section
        id="projects"
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
          <Title
            title="VISIT MY PORTFOLIO AND GIVE YOUR FEEDBACK"
            des="My Projects"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 xl:gap-14">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ margin: "-50px" }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                src={project.src}
                link={project.link}
              />
            </motion.div>
          ))}
        </div>
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

export default Project;
