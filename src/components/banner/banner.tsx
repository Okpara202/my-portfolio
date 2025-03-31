import LeftBanner from "./leftBanner";

function Banner({ light }: { light: boolean }) {
  return (
    <>
      <section
        id="home"
        className="w-full py-20 flex flex-col gap-15 lgl:gap-0 lgl:flex-row items-center justify-between  font-titleFont dark:border-b-darkBody dark:text-darkBody"
      >
        <LeftBanner />

        {/* Image side */}
        <aside className="w-full lgl:w-[45%] flex justify-center items-center relative">
          <img
            className="rounded-4xl z-10"
            src={light ? "/image/favour cartoon.jpg" : "/image/favour1.jpg"}
            alt="Image of Favour Okpara"
          />
          <div className="absolute bottom-0 w-auto h-auto bg-gradient-to-r from-bodyColor to-[#202327] "></div>
        </aside>
      </section>
      <section className="w-[20%] border-b-[10px] mx-auto border-dotted border-white dark:border-gray-500"></section>
    </>
  );
}

export default Banner;
