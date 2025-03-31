import { FaQuoteRight } from "react-icons/fa";
import Title from "../layouts/title";
import Slider from "react-slick";
import { RiStarFill } from "react-icons/ri";
import { useState } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
interface ArrowProps {
  onClick?: () => void;
}

function SampleNextArrow(props: ArrowProps) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute md:top-0 right-0 top-[470px] shadow-shadowOne cursor-pointer z-10 dark:text-white dark:bg-blue-950"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

function SamplePrevArrow(props: ArrowProps) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute md:top-0 right-20 top-[470px] shadow-shadowOne cursor-pointer z-10 dark:text-white dark:bg-blue-950"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}
function Testimonial() {
  const [dotActive, setDotActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (next: number) => {
      setDotActive(next);
    },
    appendDots: (dots: string) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div
        style={
          i === dotActive
            ? {
                width: "12px",
                height: "12px",
                background: "#ff014f",
                borderRadius: "50%",
                color: "blue",
                cursor: "pointer",
              }
            : {
                width: "12px",
                height: "12px",
                background: "black",
                borderRadius: "50%",
                color: "blue",
                cursor: "pointer",
              }
        }
      ></div>
    ),
  };
  return (
    <>
      <section id="testimonial" className="w-full py-20">
        <div className="text-center">
          <Title title="What clients say" des="Testimonial" />
        </div>
        <div className="max-w-6xl mx-auto">
          <Slider {...settings}>
            <div className="w-full">
              <div className="w-full h-auto flex flex-col md:flex-row justify-between">
                <div className="w-full md:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b]  rounded-lg p-8 shadow-shadowOne flex flex-col  gap-8 justify-center dark:bg-gradient-to-r dark:transparent dark:to-blue-950 ">
                  <img
                    className="rounded-lg aspect-square h-72 object-cover object-top"
                    src="/image/favour cartoon.jpg"
                  />
                  <div>
                    <p className="text-xs uppercase text-designColor tracking-wide mb-2 dark:text-gray-400">
                      Genesys Tech Hub
                    </p>
                    <h3 className="text-2xl font-bold dark:text-white">
                      Ezinne Edmund
                    </h3>
                    <p className="text-base tracking-wide text-gray-500 dark:text-gray-400">
                      Software Engineer
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-[60%] h-full flex flex-col justify-between">
                  <span className="text-4xl py-4 md:text-9xl dark:text-blue-800">
                    <FaQuoteRight />
                  </span>
                  <div className="w-full h-[70%] bg-gradient-to-r from-[#1e2024] to-[#23272b]  rounded-lg p-8 shadow-shadowOne flex flex-col justify-center gap-8 dark:bg-gradient-to-r dark:transparent dark:to-blue-950">
                    <div className="flex items-center justify-between py-6 border-b-2 border-b-slate-300">
                      <div>
                        <h3 className="text-2xl font-medium tracking-wide dark:text-white">
                          Easy Design System
                        </h3>
                        <p className="text-base text-gray-400 mt-3">
                          via Learnable - Dec 2024 - Present
                        </p>
                      </div>
                      <div className="text-yellow-500 flex gap-1">
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                      </div>
                    </div>
                    <p className="font-titleFont text-gray-400 font-medium trancking-wide leading-6">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Dolore, recusandae. Natus blanditiis at officiis corporis
                      ex eaque sint cupiditate magnam delectus eos libero porro,
                      harum optio nesciunt aspernatur aliquam provident?
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="w-full h-auto flex flex-col md:flex-row justify-between">
                <div className="w-full md:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b]  rounded-lg p-8 shadow-shadowOne flex flex-col gap-8 justify-center dark:bg-gradient-to-r dark:transparent dark:to-blue-950">
                  <img
                    className="rounded-lg aspect-square h-72 object-cover object-top"
                    src="/image/favour1.jpg"
                  />
                  <div>
                    <p className="text-xs uppercase text-designColor tracking-wide mb-2 dark:text-gray-400">
                      LanceySoft Technologies
                    </p>
                    <h3 className="text-2xl font-bold dark:text-white">
                      Abua Lawrence Abua
                    </h3>
                    <p className="text-base tracking-wide text-gray-500 dark:text-gray-400">
                      Chief Executive Officer
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-[60%] h-full flex flex-col justify-between">
                  <span className="text-4xl py-4 md:text-9xl dark:text-blue-800 ">
                    <FaQuoteRight />
                  </span>
                  <div className="w-full h-[70%] bg-gradient-to-r from-[#1e2024] to-[#23272b]  rounded-lg p-8 shadow-shadowOne flex flex-col justify-center gap-8 dark:bg-gradient-to-r dark:transparent dark:to-blue-950">
                    <div className="flex items-center justify-between py-6 border-b-2 border-b-slate-300">
                      <div>
                        <h3 className="text-2xl font-medium tracking-wide dark:text-white">
                          FrontEnd Teaching Documentation
                        </h3>
                        <p className="text-base text-gray-400 mt-3">
                          via LinkedIn - 2023 - 2024
                        </p>
                      </div>
                      <div className="text-yellow-500 flex gap-1">
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                      </div>
                    </div>
                    <p className="font-titleFont text-gray-400 font-medium trancking-wide leading-6">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Dolore, recusandae. Natus blanditiis at officiis corporis
                      ex eaque sint cupiditate magnam delectus eos libero porro,
                      harum optio nesciunt aspernatur aliquam provident?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      <section className="w-[20%] border-b-[10px] mx-auto border-dotted border-white dark:border-gray-500"></section>
    </>
  );
}

export default Testimonial;
