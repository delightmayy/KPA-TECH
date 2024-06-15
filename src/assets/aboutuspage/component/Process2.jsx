import React from "react";
import img1 from "../heroimg/process/process1.png";
import img2 from "../heroimg/process/process2.png";
import img3 from "../heroimg/process/process3.png";
import img4 from "../heroimg/process/process4.png";
import img5 from "../heroimg/process/process5.png";
import { motion } from "framer-motion";
const Process2 = () => {
  
  return (
    <section className="bg-[#E9ECEE]">
      <div className="max-w-7xl mx-auto flex flex-col px-4">

        <div className=" md:p-8 py-8 md:w-3/5  mx-auto md:mx-0  flex flex-col justify-center md:justify-start gap-4 px-4">
          <h3 className=" mx-auto md:mx-0 border border-black rounded-full p-3 font-bold text-xl text-center w-2/4">Our Process</h3>
          <p className=" text-center md:text-start">We follow a meticulous process that ensures transparency, collaboration, and, most importantly, the delivery of high-quality solutions that exceed expectations.</p>
        </div>

        <motion.div
        variants={{ scale: { scale: 0.9 }, initial: { scale: 1 } }}
        whileInView="scale"
        initial="initial">
          <div  className="   md:grid md:grid-cols-8 p-8 bg-white md:bg-[#E9ECEE] ">
            <div
             className=" bg-white rounded-lg  shadow-inner shadow-slate-400 flex flex-col  md:col-span-5 md:pe-16   p-8 gap-4">
              <h1 className="text-center md:text-start text-8xl font-bold text-[#e0e0e0]">
                01
              </h1>
              <h3 className="text-center md:text-start text-lg font-bold text-sky-600">
                Discovery and Planning
              </h3>
              <p className="text-center text-sm md:text-base md:text-start md:pe-8 pb-8">
                Every successful project begins with a thorough understanding of
                our client's goals, objectives, and requirements. We start by
                conducting in-depth discussions to gather insights and define
                project scope. This phase lays the foundation for a successful
                partnership and ensures alignment between our team and our
                clients.
              </p>
            </div>
            <img
              src={img1}
              alt=""
              className=" rounded-lg w-4/5 mx-auto md:w-full md:h-5/6 col-span-3 md:my-auto md:-ms-8 lg:-ms-16  z-10 -mt-8   "
            />
          </div>
        </motion.div>
        <motion.div
        variants={{ scale: { scale: 0.9 }, initial: { scale: 1 } }}
        whileInView="scale"
        initial="initial">
          <div className="flex flex-col-reverse   md:grid md:grid-cols-8 p-8 bg-white md:bg-[#E9ECEE] ">
            <img
              src={img2}
              alt=""
              className=" rounded-lg w-4/5 mx-auto md:w-full md:h-5/6 col-span-3 md:my-auto md:ms-8  z-10 -mt-8 "
            />

            <div className=" bg-white rounded-lg shadow-inner shadow-slate-400 flex flex-col  md:col-span-5 md:ps-16  p-8 gap-4">
              <h1 className="text-center md:text-end text-8xl font-bold text-[#e0e0e0]">
                02
              </h1>
              <h3 className="text-center md:text-end text-lg font-bold text-sky-600">
                {" "}
                Design and Prototyping
              </h3>
              <p className="text-center text-sm md:text-base md:text-end pb-8">
                With a clear understanding of the project requirements, our
                talented designers and developers collaborate to create detailed
                wireframes, mockups, and prototypes. This iterative process
                allows us to visualize the final product and gather feedback
                from our clients, ensuring that we're on the right track before
                moving forward.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
        variants={{ scale: { scale: 0.9 }, initial: { scale: 1 } }}
        whileInView="scale"
        initial="initial">
          <div className="   md:grid md:grid-cols-8 p-8 bg-white md:bg-[#E9ECEE] ">
            <div className=" bg-white rounded-lg shadow-inner shadow-slate-400 flex flex-col  md:col-span-5 md:pe-16   p-8 gap-4">
              <h1 className="text-center md:text-start text-8xl font-bold text-[#e0e0e0]">
                03
              </h1>
              <h3 className="text-center md:text-start text-lg font-bold text-sky-600">
                Development and Testing
              </h3>
              <p className="text-center text-sm md:text-base md:text-start md:pe-8 pb-8">
                Once the design is approved, our development team gets to work
                bringing the project to life. Using cutting-edge technologies
                and best practices, we build robust, scalable solutions that
                meet the highest standards of quality. Throughout the
                development process, we conduct rigorous testing to identify and
                address any issues, ensuring a seamless user experience.
              </p>
            </div>
            <img
              src={img3}
              alt=""
              className=" rounded-lg w-4/5 mx-auto md:w-full md:h-5/6 col-span-3 md:my-auto md:-ms-8 lg:-ms-16  z-10  -mt-8"
            />
          </div>
        </motion.div>
        <motion.div
        variants={{ scale: { scale: 0.9 }, initial: { scale: 1 } }}
        whileInView="scale"
        initial="initial">
          <div className=" flex flex-col-reverse  md:grid md:grid-cols-8 p-8 bg-white md:bg-[#E9ECEE] ">
            <img
              src={img4}
              alt=""
              className=" rounded-lg w-4/5 mx-auto md:w-full md:h-5/6 col-span-3 md:my-auto md:ms-8  z-10 -mt-8 "
            />

            <div className=" bg-white rounded-lg shadow-inner shadow-slate-400 flex flex-col  md:col-span-5 md:ps-16  p-8 gap-4">
              <h1 className="text-center md:text-end text-8xl font-bold text-[#e0e0e0]">
                04
              </h1>
              <h3 className="text-center md:text-end text-lg font-bold text-sky-600">
                {" "}
                Deployment and Launch
              </h3>
              <p className="text-center text-sm md:text-base md:text-end pb-8">
                With the project completed and thoroughly tested, we prepare for
                deployment and launch. Our team handles all aspects of
                deployment, including server setup, configuration, and
                optimization. We work closely with our clients to coordinate the
                launch, ensuring a smooth transition and minimal downtime.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
        variants={{ scale: { scale: 0.9 }, initial: { scale: 1 } }}
        whileInView="scale"
        initial="initial">
          <div className="   md:grid md:grid-cols-8 p-8 bg-white md:bg-[#E9ECEE] ">
            <div className=" bg-white rounded-lg shadow-inner shadow-slate-400 flex flex-col  md:col-span-5 md:pe-16   p-8 gap-4">
              <h1 className="text-center md:text-start text-8xl font-bold text-[#e0e0e0]">
                05
              </h1>
              <h3 className="text-center md:text-start text-lg font-bold text-sky-600">
                Support and Maintenance
              </h3>
              <p className="text-center text-sm md:text-base md:text-start md:pe-8 pb-8">
                Our commitment to our clients doesn't end with project delivery.
                We provide ongoing support and maintenance to ensure that our
                solutions remain secure, reliable, and up-to-date. Whether it's
                addressing technical issues, implementing updates, or providing
                training and documentation, we're here to support our clients
                every step of the way.
              </p>
            </div>
            <img
              src={img5}
              alt=""
              className=" rounded-lg w-4/5 mx-auto md:w-full md:h-5/6 col-span-3 md:my-auto md:-ms-8 lg:-ms-16  z-10 -mt-8 "
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process2;
