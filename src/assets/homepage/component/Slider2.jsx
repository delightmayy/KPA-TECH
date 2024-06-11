import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Data } from "../data/testiData";
import { ArrowRightIcon } from "@heroicons/react/16/solid";

const Slider2 = () => {
  var settings = {
    dots: false,
    arrows:false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Slider {...settings}>
      {Data.map((d, id) => {
        return (
          <div
            key={id}
            className=" border shadow-inner shadow-slate-400 text-center md:text-start px-4 md:px-8 gap-4   my-8   flex flex-col  rounded-lg "
          >
            <h3 className="font-semibold mt-4 md:mt-0 md:my-8 ">{d.heading}</h3>
            <p className=" text-sm mb-4 md:text-base leading-6">{d.text}</p>
            <div className="flex gap-4 mt-4 md:mt-0  md:my-8   mx-auto md:mx-0 ">
              <img src={d.path} width={50} alt="" />
              <div className="flex flex-col">
                <h4 className="">{d.name}</h4>
                <p className="">{d.title}</p>
              </div>
            </div>
            <div className="capitalise flex items-center justify-center md:justify-start gap-2 md:my-8 mx-auto ">
              {" "}
              <p className=" text-sm md:text-base  "> case study icon </p>
              <ArrowRightIcon width={15} />
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default Slider2;
