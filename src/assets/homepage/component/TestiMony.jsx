import React from "react";
import img1 from "../img/testimony/img1.png";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import SimpleSlider from "./Slider";
import Slider2 from "./Slider2";

const TestiMony = () => {
  return (
    <section className="bg-[#151B2B] relative">
      <div className="p-4 max-w-7xl mx-auto text-white flex flex-col pt-4">
        <div className=" mx-auto text-center p-4 flex flex-col gap-4">
          <h3 className=" capitalize font-bold text-lg md:text-2xl  ">
            customer testimonials
          </h3>
          <p className=" capitalize  text-sm md:text-base">
            read what our customers have to say
          </p>
        </div>

        <div className=" flex flex-col md:flex-row justify-center gap-4  p-2 px-4">
          
       

          <img
            src={img1}
            alt=""
            className="absolute bottom-56 right-0 md:right-52 md:bottom-10  sm:left-20 sm:bottom-8 lg:left-60 lg:bottom-20 xl:left-96 xl:bottom-8  "
            width={600}
          />
        </div>
        <div className=" hidden lg:block">
        
          <SimpleSlider />
        </div>
        <div className=" lg:hidden">
        <Slider2/>
          
        </div>
      </div>
    </section>
  );
};

export default TestiMony;
