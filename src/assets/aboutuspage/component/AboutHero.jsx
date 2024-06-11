import React from "react";
import Header from "../../generalcomp/Header";
import bg from "../heroimg/aboutbg.png"

const AboutHero = () => {
  console.log(bg);
  return (
    <div className=" bg-[url('/src/assets/aboutuspage/heroimg/aboutbg.png')] bg-cover   ">
      <Header />
      <div className="relative  px-3 pt-6  lg:px-8 md:pt-8 lg:pt-16 mx-auto max-w-7xl ">
        <div className="mx-auto max-w-2xl ">
          <div className="text-center text-white w-3/4 mx-auto flex flex-col gap-6 lg:gap-14 py-10 sm:py-20  md:py-20 lg:py-16 ">
            <h1 className="text2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
            We're your trusted partners in driving growth and innovation.
            </h1>
            <p className=" text-sm md:text-base lg:text-lg leading-6">
            At KPA.Tech, we pride ourselves on offering tailored services designed to meet your unique business needs. Our approach is centered around collaboration, innovation, and reliability, ensuring that we deliver solutions that drive tangible results and propel your business forward.
            </p>
            <div className=" flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-sky-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Book a session
              </a>
             
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
