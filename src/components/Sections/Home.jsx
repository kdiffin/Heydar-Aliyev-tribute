import React from "react";
import heroImage from "/heroImage.jpg";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "./Navbar";

function Home() {
  // <
  //   id="əsas"
  //   className="snap-center overflow-hidden h-screen w-full  bg-gradient-to-b  from-black via-black to-gray-800 sm:snap-none "
  // >
  //   <Navbar />

  return (
    <section
      id="əsas"
      className="flex flex-col snap-center  h-screen  items-center bg-gradient-to-b  from-black via-black to-gray-800 justify-center text-center w-full "
    >
      <div
        className="max-w-screen-lg mx-auto flex flex-col
      items-center justify-center h-full    px-4   text-white md:flex-row"
      >
        <div className="flex flex-col justify-center -mb-10 sm:mb-0    h-full  md:mr-20 flex-wrap">
          <h2 className="text-4xl sm:text-7xl   text-center font-semibold text-white">
            Heydər Əliyev{" "}
          </h2>

          <p className="text-gray-500 py-4 max-w-md ">
            Müdrik liderimizin bioqrafiyası.
          </p>

          <div className=" flex justify-center items-center">
            <a
              href="#həyatı"
              className="group  justify-center text-white cursor-pointer  px-6  w-2/3 sm:w-1/3 py-3 my-2 mr-10 flex items-center rounded-md bg-gradient-to-r from-blue-900 via-red-900 to-green-900"
            >
              Davam et{" "}
              <span className="group-hover:rotate-90 duration-300 ml-1">
                <FaArrowRight />
              </span>
            </a>
          </div>
        </div>

        <div className="flex pb-10 sm:pb-0 justify-center">
          <img
            src={heroImage}
            className="rounded-2xl mb-4  sm:mb-0 w-2/3 md:w-5/6"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
