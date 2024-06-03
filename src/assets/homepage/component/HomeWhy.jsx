import React from "react";
import { items } from "../data/whyusData";
import icon5 from "../img/whyus/top.png"
import icon6 from "../img/whyus/bottom.png"


 
const HomeWhy = () => {
  return (
    <section className="bg-[#f4f7faed]
    ">
      <div className="flex flex-col max-w-7xl mx-auto  text-center md:text-start gap-4 md:gap-10 md:px-8 lg:px-32 relative ">
        <div className="flex flex-col mx-auto text-center p-4 md:px-8">
          <h3 className="text-lg md:text-2xl font-bold capitalize pt-6 pb-4"> why choose us</h3>
          <p className="text-sm md:text-base">people choose us because we serve the best for everyone</p>
          <img src={icon5} alt="" className=" hidden md:block md:absolute right-5 " width={80} />
        </div>
        <div className="grid grid-flow-row md:grid-cols-2 mx-6 gap-4  ">
          {items.map((x) => {
            return (
              <div key={x.id} className="p-4  py-6  rounded-md shadow-slate-400 shadow-sm bg-white flex flex-col gap-4 ">
                <img src={x.image} alt="" width={60}  className="mx-auto"/>
                <h3 className="text-center font-bold ">{x.title}</h3>
                <p className="text-center text-sm md:text-base md:mb-2">{x.text}</p>''
              </div>
            );
          })}
        </div>
        <div className="grid grid-flow-row md:grid-cols-3 px-4 md:mt-8 gap-4">
          <div className="p-2">
            <h3 className="text-center font-extrabold text-2xl ">1M+</h3>
            <p className=" text-sm md:text-base md:text-center mt-2">
              Customers visit KPA.Tech every month to get their service done.
            </p>
          </div>
          <div className="p-2">
            <h3 className="text-center font-extrabold text-2xl ">92%</h3>
            <p className=" text-sm md:text-base md:text-center mt-2">
              Customers visit KPA.Tech every month to get their service done.
            </p>
          </div>
          <div className="p-2 ">
            <h3 className="text-center font-extrabold text-2xl ">4.9/5.0</h3>
            <p className=" text-sm md:text-base md:text-center mt-2">Average customer ratings we have got all over internet.</p>
            <img src={icon6} alt="" className=" hidden md:block md:absolute -left-2 bottom-40" width={50} />
           
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between p-4 px-6 ">
          <div className="p-1 md:w-2/4">
            <h3 className="text-center font-bold md:text-start text-lg pb-2">Ready to launch your next project?</h3>
            <p className=" text-sm md:text-base  mt-2 text-pretty md:text-start">
              Contact us today to learn more about how we can help you achieve
              your business objectives.
            </p>
          
          </div>
          <div className="p-1 flex justify-center md:w-/4 items-center my-5">
            
            <button className="text-center font-extrabold py-3 px-4 text-white rounded-lg  bg-sky-600 uppercase text-sm">
              kickstart your project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeWhy;
