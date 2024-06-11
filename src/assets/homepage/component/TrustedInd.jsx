import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import caro1 from "../img/trusty/caro1.png";
import caro2 from "../img/trusty/caro2.png";
import caro3 from "../img/trusty/caro3.png";
import caro4 from "../img/trusty/caro4.png";

import { ArrowLongRightIcon } from "@heroicons/react/16/solid";



const TrustedInd = () => {
 
  const sectionbg= "bg-white"
  return (
    <section className={sectionbg}>
      <div className="grid max-w-7xl mx-auto p-4 md:py-3 lg:p-6 grid-flow-row -my-1 ">
        <div className="mx-auto flex flex-col justify-center  items-center">
          <div className=" md:grid md: grid-cols-8 justify-between items-center md:p-2">
            <p className=" text-center text-lg font-bold md:text-lg lg:text-xl md:text-start md:col-span-3   ">
              Trusted by industry-leading companies worldwide
            </p>
            <div className=" flex justify-center gap-6  items-center py-6 px-4 md:p-4 md:col-span-5 md:col-start-4">
             
                <div>
                  <img src={caro1} alt="" width={300} className=" scale-125 sm:scale-100" />
                </div>
                <div>
                  <img src={caro2} alt="" width={300}  className=" scale-125 sm:scale-100"/>
                </div>
                <div>
                  <img src={caro3} alt="" width={100} className=" scale-125 sm:scale-100" />
                </div>
                <div>
                  <img src={caro4} alt="" width={300} className=" scale-125 sm:scale-100"/>
                </div>
             
            </div>
          </div>
          
        </div>

        <div className="flex flex-col gap-5 md:gap-8 bg-gradient-to-bl from-blue-400 to-sky-900 text-justify py-6 px-8 md:py-8 mt-2">
          <div className="flex flex-col justify-center items-center gap-4 mx-auto">
            <h3 className="flex gap-2 text-lg md:text-2xl justify-center md:justify-start text-white font-bold md:text-start  ">
              <ArrowLongRightIcon width={20} />
              What you should know
            </h3>
            <p className=" leading-7 text-sm md:text-base text-white md:font-semibold">
              <span className=" text-yellow-500">KPA.Tech</span> is a pioneering
              firm dedicated to accelerating the growth of businesses through
              cutting-edge technology solutions. Our holistic approach
              encompasses a wide range of services tailored to meet the unique
              needs of each client, ensuring unparalleled results and long-term
              success. With a blend of expertise, creativity, and unwavering
              dedication, we're here to propel your business to new heights
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedInd;
