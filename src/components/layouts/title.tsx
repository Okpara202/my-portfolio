function Title({ title, des }: { title: string; des: string }) {
  return (
    <div className="flex flex-col gap-4 font-titleFont mb-14">
      <h3 className="text-sm uppercase font-light text-designColor tracking-wide dark:text-blue-700 dark:font-bold">
        {title}
      </h3>
      <h1 className="text-5xl text-gray-300 font-bold capitalize dark:text-gray-700">
        {des}
      </h1>
    </div>
  );
}

export default Title;
