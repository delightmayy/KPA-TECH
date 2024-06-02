import { ArrowRightIcon } from "@heroicons/react/16/solid";
import React from "react";
import logo from "./logo2.png";

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
            <div className="">
              <h4 className="">haedae</h4>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem quos eius ipsam perspiciatis officia aperiam,
                similique dignissimos quis ad beatae! Eaque veritatis temporibus
                incidunt similique odit officiis eum cupiditate quisquam?
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
            className=" p-4 flex flex-col  md:flex-row gap-4  md:grid md:grid-cols-7 md:pt-6 border-b-2 "
          >
            {/* SIDE 1  */}
            <div className="flex justify-between md:justify-between px-4 md:col-span-4">
              <div className=" flex flex-col gap-4 ">
                <img src={logo} alt="" width={20} />
                <div className="">
                  <h5>address:</h5>
                  <p>dashkvsaovsbpbpdbpddp</p>
                </div>
                <div className="">
                  <h5>contact:</h5>
                  <p>dashkvsaovsbpbpdbpddp</p>
                  <p>dashkvsaovsbpbpdbpddp</p>
                </div>
                <div className="flex gap-2">
                  <img src={logo} alt="" width={20} />
                  <img src={logo} alt="" width={20} />
                  <img src={logo} alt="" width={20} />
                  <img src={logo} alt="" width={20} />
                  <img src={logo} alt="" width={20} />
                </div>
              </div>

              <div id="servicehead" className="">
                <nav>
                  <h4>services</h4>
                  <ul className="">
                    <li className="">sczcskvsls</li>
                    <li className="">sczcskvsls</li>
                    <li className="">sczcskvsls</li>
                    <li className="">sczcskvsls</li>
                  </ul>
                </nav>
              </div>
            </div>

            {/* SIDE2 */}
            <div className="flex justify-between px-4 md:col-span-3">
              <div id="caseshead" className="">
                <nav>
                  <h4>cases</h4>
                  <ul className="">
                    <li className="">gvsis;sb ;nas</li>
                    <li className="">gvsis;sb ;nas</li>
                    <li className="">gvsis;sb ;nas</li>
                  </ul>
                </nav>
              </div>

              <div id="quicklinkhead" className="">
                <nav>
                  <h4>quicklink</h4>
                  <ul className="">
                    <li className="">gcsukifvklnjbl</li>
                    <li className="">gcsukifvklnjbl</li>
                    <li className="">gcsukifvklnjbl</li>
                    <li className="">gcsukifvklnjbl</li>
                    <li className="">gcsukifvklnjbl</li>
                    <li className="">gcsukifvklnjbl</li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-white bg-[#0d111c]">
        <div className="flex flex-col max-w-7xl mx-auto">
          <div className=" flex justify-between p-4">
            <p className="">nsls;ss'ss</p>
            <p className="">/;kniuiyrsrr</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
