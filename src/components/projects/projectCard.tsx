import { FaGlobe } from "react-icons/fa";

function ProjectCard({
  title,
  description,
  src,
  link,
}: {
  title: string;
  description: string;
  src: string;
  link: string;
}) {
  return (
    <a className="cursor-pointer" href={link} target="_blank">
      <div className="w-full p-4 xl:px-4 h-auto xl:py-10 group rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] hover:bg-gradient-to-b hover:from-gray-900 hover:to-gray-900 transition-colors duration-1000 dark:bg-gradient-to-r dark:from-transparent dark:to-transparent">
        <div className="w-full h-[80%] overflow-hidden rounded-lg">
          <img
            src={src}
            className="w-full h-60 object-cover object-top font-semibold"
            alt={`image of ${title}`}
          />
        </div>
        <div className="w-full mt-5 flex items-center justify-between">
          <h3 className="dark:text-bodyColor group-hover:text-white font-semibold uppercase">
            {title}
          </h3>
          <nav>
            <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 group-hover:text-designColor duration-200 cursor-pointer">
              <FaGlobe />
            </span>
          </nav>
        </div>
        <p className="mt-6 text-sm tracking-wide group-hover:text-gray-100 duration-300  dark:text-gray-600">
          {description}
        </p>
      </div>
    </a>
  );
}

export default ProjectCard;
