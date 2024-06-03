import React from "react";
import btn1 from "../img/btn1.png";
import btn2 from "../img/btn2.png";
import trusty from "../img/trusty frame.png";
import { ArrowLongRightIcon } from "@heroicons/react/16/solid";

const TrustedInd = () => {
  return (
    <section className="bg-white">
      <div className="grid max-w-7xl mx-auto p-4 md:py-3 lg:p-6 grid-flow-row  ">
        <div className="mx-auto flex flex-col justify-center  items-center">
          <div className="hidden md:grid grid-cols-4 md:justify-between p-4 ">
            <div className=" col-span-4 p-3">
              <div className="grid grid-cols-12 justify-between">
                <p className=" text-black text-base sm:text-lg lg:text-xl col-span-3 self-center">
                  Trusted by industry-leading companies worldwide
                </p>
                <div className="col-span-8 col-start-5 flex">
                  <button className="btn  col-">
                    <img src={btn1} alt="" width={40} />
                  </button>
                  <div className=" col-span-5 self-center border-b p-3 border-blue-500">
                    <img src={trusty} alt="" />
                  </div>
                  <button className="btn col-span-1 justify-self-end">
                    <img src={btn2} alt="" width={40} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="md:hidden">carousel here</div>
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
