import { ArrowRightIcon } from "@heroicons/react/16/solid";
import React from "react";
import logo from "./Brandlogo.png";
import facebook from "./social icon/facebook.png";
import instagram from "./social icon/instagram.png";
import twitter from "./social icon/twitter.png";
import linkedin from "./social icon/linkedin.png";
import youtube from "./social icon/youtube.png";

const Footer = () => {
  return (
    <>
      <section className="text-white bg-gradient-to-bl from-sky-500 to-sky-950 ">
        {/*  FOOTER TOP */}
        <div className="flex flex-col max-w-7xl mx-auto">
          <div
            id="newsletter"
            className="p-4 grid grid-flow-row md:grid-cols-2 gap-4 justify-center items-center "
          >
            <div className="px-4">
              <h4 className="font-bold text-center md:text-start py-2">Subscribe to our newsletter to get latest news on your inbox.</h4>
              <p  className=" text-sm md:text-base leading-6 text-center md:text-start">
              By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.
              </p>
            </div>
            <div className="">
              <form
                action=""
                className="flex justify-between p-1 bg-white rounded-xl"
              >
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 only:text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="flex w-1/3 justify-center rounded-md m-1  self-end bg-indigo-600 p-1 gap-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 capitalize items-center"
                >
                  Subscribe <ArrowRightIcon width={15} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="text-white bg-[#0d111c]">
        <div className="flex flex-col max-w-7xl mx-auto">
          {/*  FOOTER BOTTOM */}
          <div
            id="footer"
            className=" py-6 px-4 flex flex-col  md:flex-row gap-4  md:grid md:grid-cols-7 md:pt-6 border-b-2 border-sky-600 "
          >
            {/* SIDE 1  */}
            <div className="flex justify-between md:justify-between px-4 md:col-span-4">
              <div className=" text-sm md:text-base  md:flex flex-col gap-4 ">
                <img src={logo} alt="" width={100} className="my-2" />
                <div className="">
                  <h5 className="font-bold">Address:</h5>
                  <p className=" text-xs"> Level 1, 12 Sample St,<br /> Sydney NSW 2000</p>
                </div>
                <div className="py-2">
                  <h5  className="font-bold">Contact</h5>
                  <p className="text.xs">+1 (850) 346-5628</p>
                  <p className="text.xs">info@kpatech.io</p>
                </div>
                <div className="flex gap-2 md:gap-3 my-3 cursor-pointer">
                  <img src={facebook} alt="" width={24} />
                  <img src={instagram} alt="" width={24} />
                  <img src={twitter} alt="" width={16}  />
                  <img src={linkedin} alt="" width={18} />
                  <img src={youtube} alt="" width={18} />
                </div>
              </div>

              <div id="servicehead" className=" ms-10 md:ms-0">
                <nav>
                  <h4 className="py-4 font-bold">Services</h4>
                  <ul className="text-sm md:text-base  md:flex flex-col gap-3 cursor-pointer">
                    <li className="">Mobile App Development</li>
                    <li className="">Web Application Development</li>
                    <li className="">Website Development</li>
                    <li className="">Google AdSense Earnings</li>
                  </ul>
                </nav>
              </div>
            </div>

            {/* SIDE2 */}
            <div className="flex justify-between px-4 md:col-span-3 md:ps-20">
              <div id="caseshead" className="">
                <nav>
                  <h4 className="py-4 font-bold">Cases</h4>
                  <ul className=" text-sm md:text-base  md:flex flex-col gap-3 cursor-pointer">
                    <li className="">Website Design</li>
                    <li className="">Website Development</li>
                    <li className="">Google Adsense</li>
                  </ul>
                </nav>
              </div>

              <div id="quicklinkhead" className="">
                <nav>
                  <h4 className="py-4 font-bold">Quick Link</h4>
                  <ul className="text-sm md:text-base md:flex flex-col gap-3 cursor-pointer">
                    <li className="">Home</li>
                    <li className="">About Us</li>
                    <li className="">Blogs</li>
                    <li className="">FAQs</li>
                    <li className="">Contact Us</li>
                   
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-white bg-[#0d111c]">
        <div className="flex flex-col max-w-7xl mx-auto">
          <div className=" flex justify-between px-8 py-4 text-xs">
            <p className="">© 2024 KPA.Tech. All rights reserved.</p>
            <p className="">Terms of Service</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
