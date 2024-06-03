import React from "react";
import img1 from "../img/testimony/img1.png";
import { ArrowRightIcon } from "@heroicons/react/16/solid";

const TestiMony = () => {
  return (
    <section className="bg-[#151B2B] relative">
      <div className="p-4 max-w-7xl mx-auto text-white flex flex-col pt-4">
        <div className=" mx-auto text-center p-4 flex flex-col gap-4">
          <h3 className=" capitalize font-bold text-lg md:text-2xl  ">customer testimonials</h3>
          <p className=" capitalize  text-sm md:text-base">read what our customers have to say</p>
        </div>
        <div className=" flex flex-col md:flex-row justify-center gap-4  p-2 px-4">
          
          <div className=" border text-center md:text-start px-8 p-4 flex  my-6 flex-col gap-8 rounded-lg ">
          
            <h3>heading</h3>
            <p className=" text-sm md:text-base leading-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam quae
              molestias, fuga ad ab nobis minus et laboriosam laudantium quo
              numquam? Et beatae illum, nihil alias ipsum dolor esse amet!
            </p>
            <div className="flex gap-4 mx-auto md:mx-0">
              <img src="" alt="" />
              <div className="flex flex-col">
                <h4 className="">bgjgk</h4>
                <p className="">SEO</p>
              </div>
            </div>
            <div className="capitalise flex items-center gap-2 "> <p  className=" text-sm md:text-base " >case case study icon  </p><ArrowRightIcon width={15}/></div>
           
          </div>
          <div className=" border text-center md:text-start px-8 p-4 flex  my-6 flex-col gap-8 rounded-lg ">
          
            <h3>heading</h3>
            <p  className=" text-sm md:text-base leading-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam quae
              molestias, fuga ad ab nobis minus et laboriosam laudantium quo
              numquam? Et beatae illum, nihil alias ipsum dolor esse amet!
            </p>
            <div className="flex gap-4 mx-auto md:mx-0">
              <img src="" alt="" />
              <div className="flex flex-col">
                <h4 className="">bgjgk</h4>
                <p className="">SEO</p>
              </div>
            </div>
            <div className="capitalise flex items-center gap-2 "> <p  className=" text-sm md:text-base " >case case study icon  </p><ArrowRightIcon width={15}/></div>
           
          </div>
          <div className=" border text-center md:text-start px-8 p-4 flex  my-6 flex-col gap-8 rounded-lg ">
          
            <h3>heading</h3>
            <p  className=" text-sm md:text-base leading-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam quae
              molestias, fuga ad ab nobis minus et laboriosam laudantium quo
              numquam? Et beatae illum, nihil alias ipsum dolor esse amet!
            </p>
            <div className="flex gap-4 mx-auto md:mx-0">
              <img src="" alt="" />
              <div className="flex flex-col">
                <h4 className="">bgjgk</h4>
                <p className="">SEO</p>
              </div>
            </div>
            <div className="capitalise flex items-center gap-2 "> <p  className=" text-sm md:text-base 6" >case case study icon  </p><ArrowRightIcon width={15}/></div>
           
          </div>
          
          
          <img src={img1} alt="" className="absolute bottom-56 right-0 md:right-52 md:bottom-10  sm:left-20 sm:bottom-8 lg:left-60 lg:bottom-20 xl:left-96 xl:bottom-8  "   width={600}/>
        </div>
      </div>
    </section>
  );
};

export default TestiMony;
