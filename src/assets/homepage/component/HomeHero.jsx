import React from "react";
import Header from "../../generalcomp/Header";
import { motion } from "framer-motion";


const HomeHero = () => {
 
  return (
    <div className="bg-[rgba(44,44,44,0.77)]  ">
      <Header/>
      <motion.div
      initial={{scale:0.4}} animate={{scale:1}} transition={{duration:0.6}} className="relative  px-6 pt-8 lg:pt-0 lg:px-8">
        <div className="mx-auto max-w-2xl py-20 sm:py-10 lg:py-16 xl:py-32">
          <div className="text-center text-white">
            <h1 className="text2xl font-bold tracking-tight md:text-4xl lg:text-4xl">
              Building and deploying innovative mobile and web solutions
            </h1>
            <p className="mt-6 text-sm md:text-base lg:text-lg leading-8">
              Elevate your business rapidly with our elite team of senior
              developers renowned for their world-class expertise and
              capabilities.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <motion.a
              initial={{backgroundColor:"#0394C3"}}
                whileInView={{backgroundColor:["#0394C3"]}}
                transition={{  duration:5, times:[1,3]}}
                href="#"
                className="rounded-md bg-sky-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-transparent hover:border hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Book a session
              </motion.a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 border py-2 px-4 rounded-lg hover:bg-sky-500"
              >
                Learn more
              </a>
            </div>
          </div>
            <div className= " hidden sm:grid grid-cols sm:grid-cols-2 lg:grid-cols-4 my-2 pt-3 md:pt-8 gap-3">
                <div className="p-3 border-b-4 text-center text-white text-base border-gray-400 hover:border-sky-600">Tab 1</div>
                <div className="p-3 border-b-4 text-center text-white text-base border-gray-400 hover:border-sky-600">Tab 2</div>
                <div className="p-3 border-b-4 text-center text-white text-base border-gray-400 hover:border-sky-600">Tab 3</div>
                <div className="p-3 border-b-4 text-center text-white text-base border-gray-400 hover:border-sky-600">Tab 4</div>
            </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HomeHero;
