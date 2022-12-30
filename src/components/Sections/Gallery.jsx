import React from "react";
import { FaShareSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GALLERY_MAIN_PHOTOS as photos } from "../../consts";
import HeaderText from "../Utility/HeaderText";

function Gallery(props) {
  return (
    <div
      id="qalereya"
      className={`flex flex-col  h-[1300px] pb-60 sm:pb-0 xxs:h-[2300px] items-center justify-center 
  ${
    props.lightMode
      ? "dark bg bg-gradient-to-b  from-gray-200 via-white to-white"
      : "bg-gradient-to-b dark-scrollbar  from-gray-800 via-gray-800 to-black "
  }
  snap-center  w-full md:h-screen`}
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col items-center  justify-center w-full">
        <HeaderText name="Foto Qalereya" centered />

        <div
          className="p-5 border-4 dark:border-0 parentHover border-solid rounded-md
         border-opacity-30 relative  border-gray-800"
        >
          <div className="grid  md:grid-cols-2 max-w-3xl     gap-8 ">
            {photos.map((photo, i) => {
              return (
                <div
                  key={i}
                  className="shadow-md group cursor-default     relative shadow-gray-600 dark:shadow-gray-300 rounded-lg"
                >
                  <img
                    src={photo.src}
                    alt="galleryphoto"
                    className="rounded-md   "
                  />

                  <Link
                    to="/Qalereya"
                    state={{
                      filter: photo.name,
                      lightMode: props.lightMode,
                    }}
                    className="absolute dark:text-white opacity-100  transition px-3 
                  text-center justify-center   ease-in-out duration-700 group-hover:opacity-100 sm:opacity-0 
                   flex top-0 left-0 rounded-md h-full w-full bg-gradient-to-t from-black    to-transparent"
                  >
                    <h1 className="  text-xl   mt-auto mb-5 font-semibold">
                      {photo.name}
                    </h1>
                  </Link>
                </div>
              );
            })}
            {/* <div className="h-1/4 absolute bottom-0 text-white parentHover--child text-center flex  transition  right-0 opacity-0  ease-in-out duration-1000  w-full bg-gradient-to-t from-black via-black/50  ">
              <Link
                to="/Qaleriya"
                className="text-xl align-bottom cursor-pointer p-10 justify-center mt-auto flex items-center  mx-auto"
                state={props.lightMode}
              >
                Daha Ətraflı{" "}
                <span className="ml-3">
                  <FaShareSquare size={19} />
                </span>
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
