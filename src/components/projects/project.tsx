import Title from "../layouts/title";
import ProjectCard from "./projectCard";

function Project() {
  return (
    <>
      <section id="projects" className="w-full py-20">
        <div className="text-center">
          <Title
            title="VISIT MY PORTFOLIO AND GIVE YOUR FEEDBACK"
            des="My Projects"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 xl:gap-14">
          <ProjectCard
            title="User Management System"
            description="A user management system I designed from scratch using React.js, typescript, RHF and Zod for validation and tailwindcss for styling"
            src={"../../../public/image/IMG_20250327_132613.jpg"}
            link="https://okpara-ums.netlify.app/"
          />
          <ProjectCard
            title="User Management System"
            description="A user management system I designed from scratch using React.js, typescript, RHF and Zod for validation and tailwindcss for styling"
            src={"../../../public/image/IMG_20250327_132613.jpg"}
            link="https://okpara-ums.netlify.app/"
          />
          <ProjectCard
            title="User Management System"
            description="A user management system I designed from scratch using React.js, typescript, RHF and Zod for validation and tailwindcss for styling"
            src={"../../../public/image/IMG_20250327_132613.jpg"}
            link="https://okpara-ums.netlify.app/"
          />

          <ProjectCard
            title="User Management System"
            description="A user management system I designed from scratch using React.js, typescript, RHF and Zod for validation and tailwindcss for styling"
            src={"../../../public/image/IMG_20250327_132613.jpg"}
            link="https://okpara-ums.netlify.app/"
          />
          <ProjectCard
            title="User Management System"
            description="A user management system I designed from scratch using React.js, typescript, RHF and Zod for validation and tailwindcss for styling"
            src={"../../../public/image/IMG_20250327_132613.jpg"}
            link="https://okpara-ums.netlify.app/"
          />
          <ProjectCard
            title="User Management System"
            description="A user management system I designed from scratch using React.js, typescript, RHF and Zod for validation and tailwindcss for styling"
            src={"../../../public/image/IMG_20250327_132613.jpg"}
            link="https://okpara-ums.netlify.app/"
          />
        </div>
      </section>
      <section className="w-[20%] border-b-[10px] mx-auto border-dotted border-white dark:border-gray-500"></section>
    </>
  );
}

export default Project;
