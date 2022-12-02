import React from "react";
import heroImage from "/public/heroImage.jpg";
import { FaArrowRight } from "react-icons/fa";

function Home() {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b  from-black via-black to-gray-800 "
    >
      <div
        className="max-w-screen-lg mx-auto flex flex-col 
        items-center justify-center h-full   px-4 text-white md:flex-row"
      >
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Azərbaycanın ümümilli lideri
          </h2>
          <p className="text-gray-500 py-4 max-w-md">*insert anything here*</p>

          <div>
            <button className="group  text-white cursor-pointer w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-blue-700 via-red-700 to-green-700">
              Davam et{" "}
              <span className="group-hover:rotate-90 duration-300 ml-1">
                <FaArrowRight />
              </span>
            </button>
          </div>
        </div>

        <div>
          <img
            src={heroImage}
            className="rounded-2xl mx-auto  w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
