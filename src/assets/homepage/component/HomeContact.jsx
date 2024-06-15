import React from "react";
import msgicon from "../img/contact/msgicon.png";
import bg from "../img/contact/contactbg.png";
import { motion } from "framer-motion";

const HomeContact = () => {
 
   
  return (
    <section className="bg-[url('/src/assets/homepage/img/contact/contactbg.png')] bg-cover">
      <div className="flex flex-col p-4  max-w-7xl mx-auto ">
        <div className="md:p-4 grid grid-flow-row  md:grid-cols-2 gap-4 ">
          <div className="">
            <div
              className="flex flex-col mx-auto text-center justify-center md:text-start md:justify-start md:mt-20  gap-4 text-white md:w-2/3
                "
            >
              <motion.img 
               variants={{rotate:{rotateY:"-180deg"},
               initial:{rotate:"0deg"}}}
               whileInView="rotate"
               initial="initial"
               transition={{duration:2, delay:3, repeat:Infinity}}


               src={msgicon} alt="" width={75} className="mx-auto md:mx-0" />
              <h4 className=" capitalize text-lg md:text-2xl font-bold text-nowrap">get in touch with us</h4>
              <p  className=" text-sm md:text-base leading-6 px-2">
              We're dedicated to providing exceptional service and support to every client, and we can't wait to assist you with your digital needs.
              </p>
            </div>
          </div>
          <div className="p-8 ">
            <motion.div
             variants={{scale:{scale:1},
             initial:{scale:0}
           }}
           whileInView="scale"
           initial="initial"
           transition={{duration:1}}
              className="flex flex-col mx-auto  md:bg-white md:rounded-xl md: py-3 md:px-6 md:w-ful lg:w-2/3
                "
            >
              <form className="space-y-6" action="#" method="POST">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm text-white font-medium leading-6 md:text-gray-900"
                  >
                    Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="John Doe"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-white font-medium leading-6 md:text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="emailme@gmail.com"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <label
                    htmlFor="phone"
                    className="block text-sm text-white font-medium leading-6 md:text-gray-900"
                  >
                    Phone
                  </label>
                  <div className="mt-2">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="phone"
                      placeholder="123-456-7890"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <label
                    htmlFor="service"
                    className="block text-sm text-white font-medium leading-6 md:text-gray-900 mt-2"
                  >
                    which service do you need?
                  </label>
                  <div className="mt-2">
                    <select
                      id="service"
                      name="service"
                      type="select[multiple]"
                      autoComplete="service"
                      placeholder="select a service"
                      required
                      className="block w-full form-multiselect rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    > <option value="web a " className=" capitalize"> website developement</option>
                      <option value="web b"  className=" capitalize"> website design</option>
                      <option value="delight1"  className=" capitalize"> telegram app</option>
                      <option value="delight"  className=" capitalize"> mobile app</option>
                       </select>
                    
                   
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 capitalize"
                  >
                    get free consultancy
                  </button>
                </div>
              </form>

             
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContact;

/* 
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{' '}
              <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Start a 14 day free trial
              </a>
            </p>
          </div>
        </div>
      </>
    )
  }
   */
