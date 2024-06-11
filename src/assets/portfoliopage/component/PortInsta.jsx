import React from "react";
import instalogo from "../portimg/instalogo.png";
import instaimg from "../portimg/instaimg.png";

import crow4 from "../../homepage/img/crowdeck/App Store.png";
import crow5 from "../../homepage/img/crowdeck/Play Store.png";
import bg from "../portimg/instabg.png";

const PortInsta = () => {
  
  return (
    <section className="bg-[url('/src/assets/portfoliopage/portimg/instabg.png')] bg-cover">
      <div className="pt-8  mx-auto max-w-7xl sm:-mt-3  flex flex-col gap-4">
        <div className="p-4 md:px-8 md:pt-10 lg:p-16 flex flex-col items-start sm:grid sm:grid-cols-2 text-white mt-8 ">
          <div className="flex flex-col justify-center sm:items-start text-center sm:text-start items-center mx-auto lg:gap-6">
            <div className="text flex flex-col justify-center p-4 md:px-8 gap-4 lg:gap-8">
              <img src={instalogo} alt="" width={160} className="mx-auto sm:mx-0" />
              <h4 className=" font-semibold text-center sm:text-start ">
              A powerful platform designed to help you create campaigns, generate leads, and automatically engage with your prospects.
              </h4>
              <p className=" text-sm text-center sm:text-start">
              Through iterative development and continuous refinement, KPA ensured that the platform offers intuitive functionality, seamless user experience, and effective performance.
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
            <img src={instaimg} alt="" width={450} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortInsta;
