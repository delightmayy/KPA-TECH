import React from "react";
import crow1 from "../img/crowdeck/crow-logo.png";
import crow2 from "../img/crowdeck/crow-gal.png";
import crow3 from "../img/crowdeck/crow-bg1.png";
import crow4 from "../img/crowdeck/App Store.png";
import crow5 from "../img/crowdeck/Play Store.png";
import { motion } from "framer-motion";

const HomeCrowdeck = () => {
  return (
    <motion.section
   
      initial={ {opacity: 0 ,backgroundColor:'#0000'}}
      whileInView={{ opacity:1 }}
      transition={{ duration:2 }}
      className="bg-[url('/src/assets/homepage/img/crowdeck/crow-bg1.png')] bg-cover"
    >
      <div className="pt-8  mx-auto max-w-7xl sm:-mt-3  flex flex-col gap-4">
        <div className="p-4 md:px-8 md:pt-10 lg:p-16 flex flex-col items-start sm:grid sm:grid-cols-2 text-white mt-8 ">
          <div className="flex flex-col justify-center sm:items-start text-center sm:text-start items-center mx-auto lg:gap-6">
            <div className="text flex flex-col justify-center p-4 md:px-8 gap-4 lg:gap-6">
              <img src={crow1} alt="" width={100} className="mx-auto sm:mx-0" />
              <h4 className=" font-semibold text-center sm:text-start ">
                Chowdeck is a technology company that provides logistics
                services to both vendors and consumers.
              </h4>
              <p className=" text-sm text-center sm:text-start">
                KPA remains committed to driving innovation and transforming the
                logistics landscape for the betterment of businesses and
                consumers alike.
              </p>
              <button className=" md:w-2/3  lg:w-1/3 p-2  rounded-lg bg-yellow-400  hover:bg-white hover:text-yellow-400 ">
                Explore Now
              </button>
            </div>
            <div className="px-4 md:px-8 flex flex-col gap-2">
              <p className="text-sm">Download our app</p>
              <div className="flex justify-center md:justify-start gap-4  ">
                <img src={crow4} alt="" className="w-1/3" />
                <img src={crow5} alt="" className="w-1/3" />
              </div>
            </div>
          </div>

          <div className="p-2 mx-auto mt-8 sm:mx-0 flex justify-center pb-12 items-center ">
            <img src={crow2} alt="" width={400} />
          </div>
        </div>
      </div>
    </motion.section>
  );
};
export default HomeCrowdeck;
