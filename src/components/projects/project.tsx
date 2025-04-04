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
            description="I designed a User Management System from scratch using React.js, TypeScript, React Hook Form, and Zod for efficient form handling and validation. Styled with Tailwind CSS, the system ensures a seamless user experience with a modern, responsive interface and robust data management."
            src={"/image/IMG_20250327_132613.jpg"}
            link="https://okpara-ums.netlify.app/"
          />
          <ProjectCard
            title="FoodieLand"
            description="I recreated a Figma design of a restaurant food website using HTML, CSS, and vanilla JavaScript. This project showcases my ability to translate UI/UX designs into fully responsive, interactive web pages with clean code, smooth animations, and an engaging user experience."
            src={"/image/IMG_20250327_132759.jpg"}
            link="https://okpara-recipe.netlify.app/"
          />
          <ProjectCard
            title="Quiz App"
            description="I co-created a Quiz App with Mmesoma Anisiuba using HTML, CSS, and JavaScript. The app features a countdown timer before the quiz starts and displays correct answers at the end, ensuring an interactive and engaging user experience."
            src={"/image/IMG_20250327_133113.jpg"}
            link="https://quizzs.onrender.com/"
          />

          <ProjectCard
            title="Assembly EndGame"
            description="I built Assembly Endgame, a React-based word-guessing game with a unique storyline. The programming world is in danger, and to save it, you must guess the correct word. With each wrong guess, a programming language disappears—if only Assembly remains, you lose the game!"
            src={"/image/IMG_20250327_133822.jpg"}
            link="https://okparaendgame.netlify.app/"
          />
          <ProjectCard
            title="RoleGuard Auth"
            description="I created a login form using React Context API, Zod, and React Hook Form, implementing fake authentication. The system dynamically displays different content based on user roles—viewers, editors, and admins—showcasing role-based access control in a seamless user experience"
            src={"/image/IMG_20250327_134005.jpg"}
            link="https://okpara-simple.netlify.app/"
          />
          <ProjectCard
            title="GitProfile Viewer"
            description="GitProfile Viewer is a web app that lets you enter a GitHub username to view detailed profile information, including bio, followers, and public repositories. It links directly to each repository, offering a seamless way to explore and discover open-source contributions and user details."
            src={"/public/image/IMG_20250327_134436.jpg"}
            link="https://okpara-git-profile.netlify.app/"
          />
        </div>
      </section>
      <section className="w-[20%] border-b-[10px] mx-auto border-dotted border-white dark:border-gray-500"></section>
    </>
  );
}

export default Project;
