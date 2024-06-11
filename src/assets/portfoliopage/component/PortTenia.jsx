
import React from "react";
import logo from "../portimg/tenialogo.png";
import bg from "../portimg/teniabg.png";
import img from "../portimg/teniaimg.png";


import { ArrowTopRightOnSquareIcon } from "@heroicons/react/16/solid";

const PortTenia = () => {
  
  return (
   
        <section className="bg-[url('/src/assets/portfoliopage/portimg/teniabg.png')] bg-cover -mt-4 ">
          <div className="p-4 max-w-7xl mx-auto px-6 md:px-8 md:pt-10 lg:p-16 flex flex-col items-start md:grid grid-cols-2 text-black ">
            <div className=" flex flex-col gap-4 md:gap-6  mb-4lg:gap-8 my-8 lg:mb-24">
              <div className="text flex flex-col p-4 gap-4  lg:gap-8 justify-center md:justify-start">
                <img
                  src={logo}
                  alt=""
                  width={120}
                  className="  mx-auto sm:mx-0 pr-4 sm:pr-0"
                />
                <h4 className=" font-semibold text-center text-sm md:text-base sm:text-start leading-7 ">
                Tania's Braids offer a range of hair braiding services designed to elevate your appearance and boost your confidence.
                </h4>
                <p className=" text-sm md:text-base leading-6 text-center sm:text-start">
                This achievement stems from KPA's dedication to innovation, extensive research, and collaboration with industry experts.
                </p>
                {/* <button className=" md:w-2/3  lg:w-1/3 p-1  rounded-lg bg-yellow-400  hover:bg-white hover:text-yellow-400 ">
                  Explore More
                </button> */}
              </div>
              <div className="px-4 flex flex-col gap-2">
                <p
                  className="text-sm text-center sm:text-start
                 font-medium"
                >
                  Check Our WEBSITE
                </p>
                <button className=" border border-black rounded-2xl text-xs  mt-2 md:text-sm flex justify-between lg:w-3/4 gap-2 items-center   p-1 md:px-3">
                  https://web.berkeleydatastrategists.com/
                  <ArrowTopRightOnSquareIcon
                    href="http://t.me/FlagshipVault_bot?start=Nukeshan60 "
                    width={20}
                  />
                </button>
              </div>
            </div>
    
            <div className=" mx-auto md:mt-12 lg:mt-8 gap-0 sm:mx-0 flex flex-col justify-center items-center ">
               <div className="md:mt-0">
                <img src={img} alt="" />
               </div>
            </div>
          </div>
        </section>
  );
}

export default PortTenia



