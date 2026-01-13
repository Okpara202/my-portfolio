import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Title from "../layouts/title";
import ProjectCard from "./projectCard";
import { projects } from "./projectList";

function Project() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToProject = (index: number) => {
    const container = scrollContainerRef.current;
    if (container) {
      const cardWidth = (container.children[0].children[index] as HTMLElement)
        .offsetWidth;
      const gap = 24; // Corresponds to gap-6
      const scrollPosition = index * (cardWidth + gap);
      container.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  const handlePrev = () => {
    const newIndex = Math.max(0, activeIndex - 1);
    scrollToProject(newIndex);
  };

  const handleNext = () => {
    const newIndex = Math.min(projects.length - 1, activeIndex + 1);
    scrollToProject(newIndex);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const handleScroll = () => {
        const scrollLeft = container.scrollLeft;
        const cardWidth = (container.children[0].children[0] as HTMLElement)
          .offsetWidth;
        const gap = 24;
        const index = Math.round(scrollLeft / (cardWidth + gap));
        setActiveIndex(Math.min(index, projects.length - 1));
      };

      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

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

        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide"
          >
            <div className="flex gap-6 md:gap-8 xl:gap-10 px-4 md:px-8 lg:px-12">
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
                  className="flex-shrink-0 w-80 md:w-96 lg:w-[400px]"
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
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className={`absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110 ${
              activeIndex === 0
                ? "opacity-50 cursor-not-allowed"
                : "opacity-100 cursor-pointer"
            }`}
            disabled={activeIndex === 0}
          >
            <FaChevronLeft className="text-gray-700 dark:text-gray-300" />
          </button>

          <button
            onClick={handleNext}
            className={`absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110 ${
              activeIndex === projects.length - 1
                ? "opacity-50 cursor-not-allowed"
                : "opacity-100 cursor-pointer"
            }`}
            disabled={activeIndex === projects.length - 1}
          >
            <FaChevronRight className="text-gray-700 dark:text-gray-300" />
          </button>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToProject(index)}
                className={`transition-all duration-200 ${
                  index === activeIndex
                    ? "w-8 h-2 bg-blue-500 rounded-full"
                    : "w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full hover:bg-gray-500 dark:hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
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
