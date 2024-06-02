import React from "react";
import berkey1 from "../img/berkey/berkey1.png";
import berkey2 from "../img/berkey/berkey2.png";
import berkey22 from "../img/berkey/Group 173.png";
import berkey3 from "../img/berkey/berkey3.png";

import { ArrowTopRightOnSquareIcon } from "@heroicons/react/16/solid";

const HomeBerkey = () => {
  return (
    <section className="bg-[#EFF2F5] bg-cover -mt-4 ">
      <div className="p-4 max-w-7xl mx-auto px-6 md:px-8 md:pt-10 lg:p-16 flex flex-col items-start md:grid grid-cols-2 text-black ">
        <div className="pt-8 flex flex-col gap-4 md:gap-6  mb-4lg:gap-8 my-8 lg:mb-24">
          <div className="text flex flex-col p-4 gap-4  lg:gap-8 justify-center md:justify-start">
            <img
              src={berkey1}
              alt=""
              width={120}
              className="  mx-auto sm:mx-0 pr-4 sm:pr-0"
            />
            <h4 className=" font-semibold text-center sm:text-start leading-7 ">
              A globally recognized consulting firm that specializes in the
              field of data science and big data analysis. 
            </h4>
            <p className=" text-sm leading-6 text-center sm:text-start">
              This achievement stems from KPA's dedication to innovation,
              extensive research, and collaboration with industry experts.
            </p>
            <button className=" md:w-2/3  lg:w-1/3 p-1  rounded-lg bg-yellow-400  hover:bg-white hover:text-yellow-400 ">
              Explore More
            </button>
          </div>
          <div className="px-4 flex flex-col gap-2">
            <p
              className="text-sm text-center sm:text-start
             font-medium"
            >
              Check Our WEBSITE
            </p>
            <button className=" border border-black rounded-2xl text-xs md:text-sm flex justify-between lg:w-3/4 gap-2 items-center   p-1 md:px-3">
              https://web.berkeleydatastrategists.com/
              <ArrowTopRightOnSquareIcon
                href="http://t.me/FlagshipVault_bot?start=Nukeshan60 "
                width={20}
              />
            </button>
          </div>
        </div>

        <div className=" mx-auto md:mt-12 lg:mt-20 gap-0 sm:mx-0 flex flex-col justify-center items-center ">
           <div className="md:mt-4">
            <img src={berkey22} alt="" />
           </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBerkey;
/* md:block md:ps-8 md:z-30  md:mt-20 
z-10 lg:bottom-40 md:mt-6 lg:mt-0 md:bottom-24 md:right-4 lg:right*/

{/* <div className="flec flex-col justify-center lg:justify-start mt-20 sm:mt-0 items-center relative">
            <img
              src={berkey2}
              alt=""
              width={600}
              className=" md:absolute  sm:mt-28   lg:mt-30 left-6 lg:left-8"
            />
            <img
              src={berkey3}
              alt=""
              width={600}
              className=" lg:-mt-12 md:static md:z-20 absolute -top-24 -left-6 "
            />
          </div> */}