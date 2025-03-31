import {
  FaBook,
  FaBug,
  FaCode,
  FaLaptopCode,
  FaPaintbrush,
  FaPenFancy,
} from "react-icons/fa6";
import Title from "../layouts/title";
import Card from "./card";

function Features() {
  return (
    <>
      <section id="features" className="w-full py-20">
        <Title title="Features" des="What I Do" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-10 xl:gap-20">
          <Card
            title="Building UI Components"
            description="Developing reusable and responsive UI components using React and frontend frameworks like Chakra UI."
            icon={<FaCode />}
          />
          <Card
            title="Managing Application State"
            description="Handling state management efficiently with Redux Toolkit, Zustand, or other state management solutions."
            icon={<FaLaptopCode />}
          />
          <Card
            title="Styling and Theming"
            description="Applying styles using CSS-in-JS solutions like Chakra UI or Tailwind CSS to enhance user experience."
            icon={<FaPaintbrush />}
          />
          <Card
            title="Debugging and Testing"
            description="Identifying and fixing UI/UX bugs using browser dev tools, unit testing, and debugging tools."
            icon={<FaBug />}
          />
          <Card
            title="Writing Technical Articles"
            description="Creating in-depth guides, tutorials, and documentation to help developers learn web technologies."
            icon={<FaPenFancy />}
          />
          <Card
            title="Reviewing and Editing Content"
            description="Ensuring accuracy, clarity, and readability of coding tutorials, blog posts, and developer documentation."
            icon={<FaBook />}
          />
        </div>
      </section>
      <section className="w-[20%] border-b-[10px] mx-auto border-dotted border-white dark:border-gray-500"></section>
    </>
  );
}

export default Features;
