import React, { useRef } from "react";
import Header from "../../generalcomp/Header";
import { NavLink } from "react-router-dom";
import "./style.css";
import AllProject from "./AllProject";
import Mobile from "./Mobile";
import WebApp from "./WebApp";
import { useState } from "react";
import { motion } from "framer-motion";

const HeroPort = () => {
  const [handleShow, sethandleShow] = useState(1);
 

  const tabIteem = [
    {
      title: "All Project",
    },
    {
      title: "Mobile Applications",
    },
    {
      title: "Web Applications",
    },
    {
      title: "Google Monetization",
    },
  ];

  return (
    <section className="bg-white">
      <Header />
      <section className="bg-[url('/src/assets/portfoliopage/portimg/portbg1.png')] bg-cover ">
        <div className="max-w-7xl mx-auto flex flex-col py-16 sm:py-24 lg:py-32 px-4  sm:px-6 lg:px-8 ">
          <motion.div
            initial={{ scale: 0.4 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            className=" mx-auto text-black flex flex-col gap-4 md:gap-8 md:p-4 text-center md:mb-4"
          >
            <h1 className="capitalize  font-semibold text-2xl  lg:text-3xl">
              explore our portfolio
            </h1>
            <div className=" sm:bg-[#0C4B77] p-2  rounded-lg">
              <ul className="flex flex-col sm:flex-row capitalize justify-center   items-center gap-2 md:gap-4  text-nowrap py-2 text-sm">
                {tabIteem.map((tab, id) => (
                  <li
                    key={id}
                    className={`   ${
                      id + 1 === handleShow && "text-white bg-[#1066a3]"
                    } first:sm:rounded-s-lg last:sm:rounded-r-lg  p-2 ps-4  w-full`}
                  >
                    <NavLink
                      className="topbar"
                      id={id + 1}
                      onClick={() => {
                        sethandleShow(id + 1);
                      }}
                    >
                      {tab.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
      {handleShow == 1 && <AllProject />}
      {handleShow == 2 && <Mobile />}
      {handleShow == 3 && <WebApp />}
      {handleShow == 4 && <Mobile />}
    </section>
  );
};

export default HeroPort;
