import React from "react";
import { useState } from "react";
import {
  GALLERY_PHOTOS_1923 as imgs1923,
  GALLERY_PHOTOS_1969 as imgs1969,
  GALLERY_PHOTOS_1990 as imgs1990,
  GALLERY_PHOTOS_MOMENTS as imgsMoments,
} from "../../consts";
function ReactResponsiveMasonry(props) {
  const allImages = {
    "1923-1969": imgs1923,
    "1969-1987": imgs1969,
    "1990-2003": imgs1990,
    "Ömründən anlar": imgsMoments,
  };

  //the props.filter is the value recieved whenever somebody clicks the filtering button
  const images = allImages[props.filter];
  console.log(images);
  return (
    <div className="grid  grid-cols- md:grid-cols-6  max-w-screen-2xl auto-rows-[200px_300px] gap-3 ">
      {images.map((image, i) => {
        return (
          <div
            key={i}
            className={`${image.rowSpan} col-span-1 sm:${image.colSpan}`}
          >
            <div className="w-full h-full cursor-pointer relative group">
              <div
                className={`w-full  h-full  ${
                  props.filter === "Ömründən anlar" ? "" : "group-hover:blur-sm"
                } active:scale-95 overflow-hidden`}
              >
                <img
                  src={image.src}
                  alt="galleryimg"
                  className="w-full pointer-events-none h-full  object-cover  group-hover:scale-125  object-center cursor-pointer transition duration-500 ease-in-out"
                />
              </div>
              <div
                className={`absolute opacity-0 bottom-0 
              group-hover:opacity-100 p-4 w-full
              ${
                props.filter === "Ömründən anlar"
                  ? ""
                  : "  group-hover:bg-black/30"
              }
               text-xl
               pointer-events-none z-10 transition  h-full flex items-center text-center justify-center    duration-300 ease-in-out text-white`}
              >
                {image.name}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ReactResponsiveMasonry;
