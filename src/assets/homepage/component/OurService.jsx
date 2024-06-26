import React, { useState } from "react";
import service1 from "../img/service1.png";
import service2 from "../img/service2.png";
import service3 from "../img/service3.png";
import service4 from "../img/service4.png";
import { serviceData } from "../data/serviceData";
import { AnimatePresence, motion, spring } from "framer-motion";

const OurService = () => {
  const [imgstate, setimgstate] = useState(1);

  return (
    <motion.section
      initial={{ opacity: 0, background: "blue" }}
      whileInView={{ opacity: [0, 0.2, 0.5, 1], background: "white" }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col bg-white p-2 text-center sm:text-start sm:py-4 sm:px-6 ">
        <div className="flex  max-w-7xl flex-col justify-center items-center mx-auto ">
          <div className="p-3 gap-4  text-center text-black flex flex-col">
            <h3 className=" mx-auto w-4/5 text-lg sm:text-2xl lg:text-4xl font-bold">
              Our Services
            </h3>
            <p className="text-sm md:text-base lg:text-lg">
              We pride ourselves on offering tailored services designed to meet
              your unique business needs.
            </p>
          </div>

          <div className="p-3 lg:grid flex flex-col-reverse lg:grid-cols-2 md:m-6">
            <div className="p-2 md:col-span-1 grid grid-flow-row">
              {serviceData.map((x) => {
                return (
                  <div
                    key={x.id}
                    className=" flex flex-col gap-2 my-3 md:my-6 px-2 self-justify cursor-pointer "
                    id={x.id}
                    style={{
                      color: x.id == imgstate ? "#0095ff" : "black",
                      borderLeft:
                        x.id == imgstate ? "2px solid #0095ff" : "none",
                    }}
                    onClick={(e) => {
                      setimgstate(x.id);
                    }}
                  >
                    <h3 className=" font-semibold" id={x.id}>
                      {x.title}
                    </h3>
                    <p className="leading-6   md:text-base" id={x.id}>
                      {x.text}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="p-2 md:grid flex flex-col order-1  md:col-span-1 justify-center my-auto items-center">
              <AnimatePresence>
                <motion.img
                  animate={{
                    rotate: ["0deg", "8deg", "0deg", "-8deg", "0deg"],
                  }}
                  transition={{ duration: 0.8, type: spring }}
                  whileHover={{
                    rotate: ["0deg", "8deg", "0deg", "-8deg", "0deg"],
                    scale: 0.8,
                  }}
                  exit={{ scale: 0.2 }}
                  whileInView={{
                    rotate: ["0deg", "8deg", "0deg", "-8deg", "0deg"],
                  }}
                  src={
                    imgstate === 1
                      ? service1
                      : imgstate === 2
                      ? service2
                      : imgstate === 3
                      ? service3
                      : service4
                  }
                  alt=""
                  width={500}
                />
              </AnimatePresence>
            </div>
          </div>

          <div className="p-3 pb-8 flex justify-center items-center gap-3 ">
            <button className="rounded-lg py-2 px-3 text-white capitalize text-sm bg-sky-500 hover:bg-white hover:text-sky-400 border border-sky-500 hover:border-sky-500">
              get a quote
            </button>
            <button className="rounded-lg py-2 px-3 text-sky-500 capitalize text-sm border border-sky-500 hover:bg-sky-500 hover:text-white">
              learn more
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default OurService;
