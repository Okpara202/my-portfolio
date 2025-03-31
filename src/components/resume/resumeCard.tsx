function ResumeCard({
  title,
  description,
  subTitle,
}: {
  title: string;
  description: string[];
  subTitle?: string;
}) {
  return (
    <div className="w-full h-1/3 group flex">
      <div className="w-10 h-[6px] bg-black dark:bg-blue-950 mt-16 relative">
        <span className="absolute  w-5 h-5 rounded-full -top-2 -left-[13px] flex justify-center items-center bg-black dark:bg-blue-950">
          <span className="w-3 h-3 rounded-full hover:opacity-50 bg-bodyColor dark:bg-white inline-flex dark:group-hover:bg-amber-500 group-hover:bg-designColor  duration-300"></span>
        </span>
      </div>
      <div className="w-full dark:bg-blue-950 bgOpacity bg-black duration-300 rounded-lg px-10 flex flex-col justify-center gap-6 lgl:gap-10 shadow-shadowOne">
        <div>
          <h3 className="text-xl md:text-2xl dark:text-gray-200 font-semibold group-hover:text-white duration-300 pt-10">
            {title}
          </h3>
          <p className="text-sm mt-2 dark:text-slate-200 text-gray-400 group-hover:text-white duration-300">
            {subTitle}
          </p>
        </div>
        <div>
          <p className="text-sm md:text-base font-medium dark:text-slate-200 text-gray-400 group-hover:text-white duration-300 pb-10">
            {description.map((des) => (
              <li className="mt-3" key={des}>
                {des}
              </li>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ResumeCard;
