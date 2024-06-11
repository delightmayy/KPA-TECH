import React from "react";
import caro1 from "../../homepage/img/trusty/caro1.png";
import caro2 from "../../homepage/img/trusty/caro2.png";
import caro3 from "../../homepage/img/trusty/caro3.png";
import caro4 from "../../homepage/img/trusty/caro4b.png";
const AboutTrusty = () => {
  return (
    <section className="bg-black">
      <div className="grid max-w-7xl mx-auto p-4 md:py-3 lg:p-6  -my-1 ">
        <div className="mx-auto flex flex-col justify-center  items-center">
          <div className=" md:grid md: grid-cols-8 justify-between items-center md:p-2">
            <p className=" text-white text-center text-lg font-bold md:text-lg lg:text-xl md:text-start md:col-span-3   ">
              Trusted by industry-leading companies worldwide
            </p>
            <div className=" flex justify-center gap-6  items-center py-6 px-4 md:p-4 md:col-span-5 md:col-start-4">
              <div>
                <img
                  src={caro1}
                  alt=""
                  width={300}
                  className=" scale-125 sm:scale-100"
                />
              </div>
              <div>
                <img
                  src={caro2}
                  alt=""
                  width={300}
                  className=" scale-125 sm:scale-100"
                />
              </div>
              <div>
                <img
                  src={caro3}
                  alt=""
                  width={100}
                  className=" scale-125 sm:scale-100"
                />
              </div>
              <div>
                <img
                  src={caro4}
                  alt=""
                  width={300}
                  className=" scale-125 sm:scale-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTrusty;
