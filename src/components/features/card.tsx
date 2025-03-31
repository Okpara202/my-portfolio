import { SpinningCircle } from "../navbar/navbarStuff/logoSvg";

function Card({
  title,
  icon,
  description,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="w-full px-12 h-80 py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-150">
      <div className="overflow-y-hidden">
        <div className="flex flex-col gap-6 translate-y-10 hover:translate-y-0 transition-transform duration-500  ">
          <h1 className="text-5xl text-designColor dark:text-white">{icon}</h1>
          <h2 className="text-2xl font-titleFont font-bold text-gray-300">
            {title}
          </h2>
          <p className="text-gray-300">{description}</p>

          <h1 className="text-2xl text-designColor">
            <SpinningCircle />
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Card;
