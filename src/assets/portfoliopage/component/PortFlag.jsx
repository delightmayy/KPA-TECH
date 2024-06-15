import React from 'react'
import flag1 from "../portimg/flag1.png";
import flag3 from "../portimg/flag3.png";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { motion } from 'framer-motion';

const PortFlag = () => {
  
  return (
    <section className=" mx-auto max-w-7xl  ">
    <div className=" bg-[url('src/assets/portfoliopage/portimg/flagbg.png')]  bg-cover   ">

      <motion.div
       initial={{ scale: 0.6 }}
       whileInView={{ scale: 1 }}
       transition={{ duration: 1.3 }}
       className="  mx-auto max-w-7xl flex flex-col gap-4   ">
        <div className="p-4 md:px-8 md:ms-16 md:pt-10 lg:p-16 flex flex-col items-start sm:grid sm:grid-cols-2 text-black mt-8  bg-[/src/assets/homepage/img/crowdeck/crow-bg1.png]">
          <div className="flex flex-col justify-center sm:items-start text-center sm:text-start items-center mx-auto lg:gap-6">
            <button className="border border-black hidden md:block rounded-2xl w-1/3 mx-4 p-1  hover:bg-white hover:text-sky-400 ">
              portfolio
            </button>

            <div className="text flex flex-col justify-center p-4 gap-6 lg:gap-6  md:w-3/4 lg:w-full">
              <img
                src={flag1}
                alt="" 
                width={100}
                className="mx-auto sm:mx-0"
              />
              <h4 className=" font-semibold text-center text-sm md:text-base sm:text-start ">
                Flagship is a telegram based app aimed at simplifying,
                securing, and fostering responsible practices throughout
                your crypto journey.
              </h4>
              <p className=" text-sm text-center sm:text-start">
                We developed a telegram based application which give you
                access to expertly-selected baskets of cryptocurrencies
                focused on your favorite sector.
              </p>
              <button className=" md:w-2/3  lg:w-1/3 p-1  rounded-lg bg-yellow-400  hover:bg-white hover:text-yellow-400 my-2 text-white font-semibold ">
                NDA Protected
              </button>
            </div>
            <div className="px-4 flex flex-col gap-4">
              <p className="text-sm">Open on telegram</p>
              <button className="border border-black rounded-2xl text-xs md:text-sm flex justify-between sm:justify-start gap-2 items-center md:w-full p-1 md:text-nowrap">
                http://t.me/FlagshipVault_bot?start=Nukeshan60
                <ArrowTopRightOnSquareIcon
                  href="http://t.me/FlagshipVault_bot?start=Nukeshan60 "
                  width={20}
                />
              </button>
            </div>
          </div>

          <div className="p-2 mx-auto mt-8 mb-10 sm:mx-0 flex justify-between items-center  ">
            <img src={flag3} alt="" width={240} className="" />
          </div>
        </div>
      </motion.div>
    </div>
  </section>
  )
}

export default PortFlag


