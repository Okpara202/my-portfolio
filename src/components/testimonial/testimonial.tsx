import { motion } from "framer-motion";
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
  // TODO: Not animated yet
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
      <motion.section
        id="testimonial"
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
          <Title title="What clients say" des="Testimonial" />
        </motion.div>
        <div className="max-w-6xl mx-auto">
          <Slider {...settings}>
            <div className="w-full">
              <div className="w-full h-auto flex flex-col md:flex-row justify-between">
                <motion.div
                  className="w-full md:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b]  rounded-lg p-8 shadow-shadowOne flex flex-col  gap-8 justify-center dark:bg-gradient-to-r dark:transparent dark:to-blue-950 "
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ margin: "-100px" }}
                >
                  <motion.img
                    className="rounded-lg aspect-square h-72 object-cover object-top"
                    src="/image/zinny.jpeg"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ margin: "-100px" }}
                  />
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ margin: "-100px" }}
                  >
                    <p className="text-xs uppercase text-designColor tracking-wide mb-2 dark:text-gray-400">
                      Genesys Tech Hub
                    </p>
                    <h3 className="text-2xl font-bold dark:text-white">
                      Ezinne Edmund
                    </h3>
                    <p className="text-base tracking-wide text-gray-500 dark:text-gray-400">
                      Software Engineer
                    </p>
                  </motion.div>
                </motion.div>
                <motion.div
                  className="w-full md:w-[60%] h-full flex flex-col justify-between"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ margin: "-100px" }}
                >
                  <motion.span
                    className="text-4xl py-4 md:text-9xl dark:text-blue-800"
                    initial={{ opacity: 0, rotate: -10 }}
                    whileInView={{ opacity: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ margin: "-100px" }}
                  >
                    <FaQuoteRight />
                  </motion.span>
                  <motion.div
                    className="w-full h-[70%] bg-gradient-to-r from-[#1e2024] to-[#23272b]  rounded-lg p-8 shadow-shadowOne flex flex-col justify-center gap-8 dark:bg-gradient-to-r dark:transparent dark:to-blue-950"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ margin: "-100px" }}
                  >
                    <motion.div
                      className="flex items-center justify-between py-6 border-b-2 border-b-slate-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      viewport={{ margin: "-100px" }}
                    >
                      <div>
                        <h3 className="text-2xl font-medium tracking-wide dark:text-white">
                          Easy Design System
                        </h3>
                        <p className="text-base text-gray-400 mt-3">
                          via Learnable - Dec 2024 - Present
                        </p>
                      </div>
                      <motion.div
                        className="text-yellow-500 flex gap-1"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        viewport={{ margin: "-100px" }}
                      >
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                      </motion.div>
                    </motion.div>
                    <motion.p
                      className="font-titleFont text-gray-400 font-medium trancking-wide leading-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      viewport={{ margin: "-100px" }}
                    >
                      Collaborating with Okpara on multiple projects has been an
                      incredible experience. His technical expertise and
                      problem-solving skills consistently elevates our work to
                      new heights. What stands out most is his ability to
                      seamlessly integrate into any team and contribute
                      meaningful solutions from day one. The quality of his code
                      and attention to details makes him an invaluable asset to
                      any development team.
                    </motion.p>
                  </motion.div>
                </motion.div>
              </div>
            </div>
            <motion.div
              className="w-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              viewport={{ margin: "-100px" }}
            >
              <div className="w-full h-auto flex flex-col md:flex-row justify-between">
                <motion.div
                  className="w-full md:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b]  rounded-lg p-8 shadow-shadowOne flex flex-col gap-8 justify-center dark:bg-gradient-to-r dark:transparent dark:to-blue-950"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  viewport={{ margin: "-100px" }}
                >
                  <motion.img
                    className="rounded-lg aspect-square h-72 object-cover object-top"
                    src="/image/lawrence.jpeg"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.1 }}
                    viewport={{ margin: "-100px" }}
                  />
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    viewport={{ margin: "-100px" }}
                  >
                    <p className="text-xs uppercase text-designColor tracking-wide mb-2 dark:text-gray-400">
                      LanceySoft Technologies
                    </p>
                    <h3 className="text-2xl font-bold dark:text-white">
                      Abua Lawrence Abua
                    </h3>
                    <p className="text-base tracking-wide text-gray-500 dark:text-gray-400">
                      Chief Executive Officer
                    </p>
                  </motion.div>
                </motion.div>
                <motion.div
                  className="w-full md:w-[60%] h-full flex flex-col justify-between"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  viewport={{ margin: "-100px" }}
                >
                  <motion.span
                    className="text-4xl py-4 md:text-9xl dark:text-blue-800"
                    initial={{ opacity: 0, rotate: -10 }}
                    whileInView={{ opacity: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    viewport={{ margin: "-100px" }}
                  >
                    <FaQuoteRight />
                  </motion.span>
                  <motion.div
                    className="w-full h-[70%] bg-gradient-to-r from-[#1e2024] to-[#23272b]  rounded-lg p-8 shadow-shadowOne flex flex-col justify-center gap-8 dark:bg-gradient-to-r dark:transparent dark:to-blue-950"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.3 }}
                    viewport={{ margin: "-100px" }}
                  >
                    <motion.div
                      className="flex items-center justify-between py-6 border-b-2 border-b-slate-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.4 }}
                      viewport={{ margin: "-100px" }}
                    >
                      <div>
                        <h3 className="text-2xl font-medium tracking-wide dark:text-white">
                          FrontEnd Teaching Documentation
                        </h3>
                        <p className="text-base text-gray-400 mt-3">
                          via LinkedIn - 2023 - 2024
                        </p>
                      </div>
                      <motion.div
                        className="text-yellow-500 flex gap-1"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 1.5 }}
                        viewport={{ margin: "-100px" }}
                      >
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                      </motion.div>
                    </motion.div>
                    <motion.p
                      className="font-titleFont text-gray-400 font-medium trancking-wide leading-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.6 }}
                      viewport={{ margin: "-100px" }}
                    >
                      Okpara's web development teaching has transformed our
                      students learning experience. His ability to break down
                      complex frontend concepts into understandable lessons has
                      helped our students grasp difficult topics with ease. The
                      practical approach and real-world examples he provides has
                      significantly improved our students' coding skills and
                      confidence. Our program's success rate has increased
                      dramatically since he started teaching with us.
                    </motion.p>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </Slider>
        </div>
      </motion.section>
      <motion.section
        className="w-[20%] border-b-[10px] mx-auto border-dotted border-white dark:border-gray-500"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.7 }}
        viewport={{ margin: "-100px" }}
      />
    </>
  );
}

export default Testimonial;
