import React from "react";

import crow1 from "../portimg/crow1.png";
import crow2 from "../../homepage/img/crowdeck/crow-gal.png";
import crow3 from "../../homepage/img/crowdeck/crow-bg1.png";
import crow4 from "../../homepage/img/crowdeck/App Store.png";
import crow5 from "../../homepage/img/crowdeck/Play Store.png";
import bg from "../portimg/crwdportbg.png"
import { motion } from "framer-motion";


const PortCrowdeck = () => {
  
    
  return (
    <section className="bg-[url('/src/assets/portfoliopage/portimg/crwdportbg.png')] bg-cover">
      <motion.div
       initial={{ opacity: 0 }}
       whileInView={{ opacity: 1 }}
       transition={{ duration: 1.3 }}
        className="pt-8  mx-auto max-w-7xl sm:-mt-3  flex flex-col gap-4">
        <div className="p-4 md:px-8 md:pt-10 lg:p-16 flex flex-col items-start sm:grid sm:grid-cols-2 text-black mt-8 ">
          <div className="flex flex-col justify-center sm:items-start text-center sm:text-start items-center mx-auto lg:gap-6">
            <div className="text flex flex-col justify-center p-4 md:px-8 gap-4 lg:gap-8">
              <img src={crow1} alt="" width={160} className="mx-auto sm:mx-0" />
              <h4 className=" font-semibold text-center sm:text-start ">
                Chowdeck is a technology company that provides logistics
                services to both vendors and consumers.
              </h4>
              <p className=" text-sm text-center sm:text-start">
                KPA remains committed to driving innovation and transforming the
                logistics landscape for the betterment of businesses and
                consumers alike.
              </p>
             {/*  <button className=" md:w-2/3  lg:w-1/3 p-2  rounded-lg bg-yellow-400  hover:bg-white hover:text-yellow-400 ">
                Explore Now
              </button> */}
            </div>
            <div className="px-4 md:px-8 flex flex-col gap-2">
              <p className="text-sm font-semibold">Download our app</p>
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
      </motion.div>
    </section>
  );
};

export default PortCrowdeck;
