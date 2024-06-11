import React from "react";
import flag1 from "../img/flagimg/flag1.png";
import flag2 from "../img/flagimg/flag2.png";
import flag3 from "../img/flagimg/Image.png";
import flag4 from "../img/flagimg/flag4.png";
import flagBG from "../img/flagimg/flagBG.png";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/16/solid";

const HomeFlagship = () => {
 
  return (
    <>
      <section className=" bg-[url('/src/assets/homepage/img/flagimg/BG.png')] bg-cover -my-3 lg:-mb-6">
        <div className="  mx-auto max-w-7xl sm:-mt-3  flex flex-col gap-4">
          <div className="p-4 md:px-8 md:pt-10 lg:p-16 flex flex-col items-start sm:grid sm:grid-cols-2 text-white mt-8  bg-[/src/assets/homepage/img/crowdeck/crow-bg1.png]">
            <div className="flex flex-col justify-center sm:items-start text-center sm:text-start items-center mx-auto lg:gap-6">
              <button className="border hidden md:block rounded-2xl w-1/3 mx-4 p-1  hover:bg-white hover:text-sky-400 ">
                portfolio
              </button>

              <div className="text flex flex-col justify-center p-4 gap-6 lg:gap-6">
                <img
                  src={flag1}
                  alt=""
                  width={100}
                  className="mx-auto sm:mx-0"
                />
                <h4 className=" font-semibold text-center text-sm md:text-base sm:text-start ">
                  Flagship is a telegram based app aimed at simplifying,
                  securing, and fostering responsible practices throughout your
                  crypto journey.
                </h4>
                <p className=" text-sm text-center sm:text-start">
                  We developed a telegram based application which give you
                  access to expertly-selected baskets of cryptocurrencies
                  focused on your favorite sector.
                </p>
                <button className=" md:w-2/3  lg:w-1/3 p-1 font-semibold rounded-lg bg-yellow-400  hover:bg-white hover:text-yellow-400 my-2 ">
                  NDA Protected
                </button>
              </div>
              <div className="px-4 flex flex-col gap-4">
                <p className="text-sm">Open on telegram</p>
                <button className="border rounded-2xl text-xs md:text-sm flex justify-between sm:justify-start gap-2 items-center md:w-full p-1 md:text-nowrap">
                  http://t.me/FlagshipVault_bot?start=Nukeshan60
                  <ArrowTopRightOnSquareIcon
                    href="http://t.me/FlagshipVault_bot?start=Nukeshan60 "
                    width={20}
                  />
                </button>
              </div>
            </div>

            <div className="p-2 mx-auto mt-8 mb-6 sm:mx-0 flex justify-center pb-16 items-center  ">
              <img src={flag3} alt="" width={240}  className="lg:-ms-20"/>
            </div>
          </div>
          
        </div>

      </section>
      <div className="w-full hidden lg:block bg-gradient-to-bl to-[#2554B7] from-[#157dcd] lg:-mt-48   ">
            <img src={flag4} alt="" className="w-full" />
          </div>
    </>
  );
};

export default HomeFlagship;

{/* <section className="bg-[url('/src/assets/homepage/img/flagimg/BG.png')]  bg-cover -mt-3 ">
  <div className="pt-8  mx-auto max-w-7xl flex flex-col gap-4">
    <div className="p-4 md:px-8  flex flex-col items-start sm:grid sm:grid-cols-2 text-white ">
      <div className="p-2 mx-auto mt-8 sm:mx-0 flex justify-center items-center ">
        <img src={flag3} alt="" width={210} />
      </div>
    </div>
  </div>
</section>;
 */}