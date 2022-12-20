import React from "react";
import { useState } from "react";
import { useLocation } from "react-router";
import { GALLERY_MAIN_PHOTOS as photoFilters } from "../../consts";
import Navbar from "../Sections/Navbar";

import ReactResponsiveMasonry from "../Utility/ReactResponsiveMasonry";
function GalleryInfo(props) {
  //this is the component that gets rendered in the /qaleriya route

  const [photoType, setPhotoType] = useState(props.filter || "1923-1969");
  return (
    <div
      className={`w-full min-h-screen overflow-x-hidden relative   	pb-20 pt-5  
  ${
    props.lightMode
      ? "dark bg bg-gradient-to-b   from-gray-200 via-white text-black to-white"
      : "bg-gradient-to-b dark-scrollbar   from-black via-black to-gray-800 "
  }
  `}
    >
      <Navbar routAbout lightMode={props.lightMode} />
      <div className={`pb-8 flex  justify-center`}>
        <p className="text-5xl font bold text-center mt-20  mb-10 inline border-b-2 border-gray-500">
          Foto qaleriya
        </p>
      </div>
      <div className="flex justify-center  items-center">
        <div
          className=" border-b-gray-800 border-b-2  flex  flex-col gap-y-8 md:gap-y-0  md:flex-row p-7
         border-l-gray-800/10 border-l-2 dark:border-0 border-opacity-60
          border-r-gray-800/30 border-r-2 rounded-sm"
        >
          {photoFilters.map((filter, i) => {
            return (
              <div
                key={i}
                onClick={() => setPhotoType(filter.name)}
                className="text-3xl ml-10 p-5 active:scale-95 shadow-sm rounded-sm shadow-gray-800
                 dark:shadow-gray-300   cursor-pointer hover:scale-105 text-center mr-12 md:mr-0   transition-opacity border-opacity-0 duration-500"
              >
                {filter.name}
              </div>
            );
          })}
        </div>
      </div>
      <div className=" flex justify-center  p-2  mt-20">
        <ReactResponsiveMasonry filter={photoType} />
      </div>
    </div>
  );
}

export default GalleryInfo;
