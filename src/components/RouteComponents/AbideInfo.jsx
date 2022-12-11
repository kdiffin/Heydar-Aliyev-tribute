import React from "react";
import { useLocation } from "react-router";
import Navbar from "../Sections/Navbar";
import { nanoid } from "nanoid";
import PopupImg from "../Utility/PopupImg";
import { useState } from "react";

function AbideInfo(props) {
  const [showPopupImg, setShowPopUpImg] = useState(false);
  const [ImgIndex, setImgIndex] = useState(false);

  const location = useLocation();
  const lightMode = location.state;

  function popUpToggle(idz) {
    setShowPopUpImg(true);

    const boolList = props.imgs.map((img) => img.id === idz);
    const index = boolList.indexOf(true);
    setImgIndex(index);
  }

  return (
    <div
      className={` ${
        lightMode ? "text-black  dark  " : "dark-scrollbar"
      } m-0 app snap-none p-0`}
    >
      <div
        className={`w-full snap-center	pb-20 pt-1 min-h-screen h-[1600px] sm:h-full 
    ${
      lightMode
        ? "dark bg bg-gradient-to-b   from-gray-200 via-white text-black to-white"
        : "bg-gradient-to-b  from-black via-black  text-white to-gray-800 "
    }
    `}
      >
        <Navbar routAbout lightMode={lightMode} />

        <div className="flex max-w-screen-2xl  p-4 mx-auto   flex-col justify-center   w-full">
          <div className="flex justify-center mt-20 text-center flex-col items-center">
            <p className="text-4xl font-semibold   border-b-2 border-gray-500">
              {props.name}
            </p>
            <p className="text-2xl font-semibold m-10">Qalleriya</p>
          </div>
          <div className="flex justify-center ">
            <div
              className={`flex overflow-y-scroll  border-2 rounded-xl sm:rounded-md border-opacity-70  dark:border-gray-300
           shadow-lg shadow-gray-700 dark:shadow-gray-300 border-gray-800 md:overflow-y-hidden md:overflow-x-scroll 
           w-full h-[1000px] sm:h-[450px] gap-y-4  p-4 
           ${
             lightMode ? "" : "dark-scrollbar"
           } gap-x-8  flex-col sm:flex-row  bg-red-gray-800 `}
            >
              {props.imgs.map((img) => {
                return (
                  <img
                    onClick={() => popUpToggle(img.id)}
                    key={img.id}
                    src={img.src}
                    className="cursor-zoom-in"
                    alt="imagegallery"
                  />
                );
              })}
            </div>
          </div>
        </div>
        {showPopupImg ? (
          <PopupImg
            setShowPopUpImg={setShowPopUpImg}
            img={props.imgs[ImgIndex].src}
          />
        ) : (
          <></>
        )}
      </div>
      <div
        className={`flex flex-col ${
          props.name === "Heydər Əliyev Mərkəzi"
            ? "  md:h-[4101px] sm:h-[5000px] xs:h-[5400px] xxs:h-[7000px] h-[7901px] "
            : props.name === "Heydər Əliyev Sarayı"
            ? " lg:h-[7900px] md:h-[9500px] sm:h-[10045px] xs:h-[13302px] xxs:h-[17200px] h-[18802px] "
            : ""
        }
        h-[8250px] xxs:h-[7300px] xs:h-[5700px] md:h-[3500px]  sm:-mt-0 sm:h-[4300px] sm:pt-20 items-center justify-center bg-gradient-to-b dark-scrollbar dark:from-white  dark:via-white dark:to-gray-200 from-gray-800 via-gray-800 to-black 
      snap-start  w-full `}
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
          <div className={`pb-8 flex justify-center `}>
            <p className="text-4xl font-semibold text-center   border-b-2 border-gray-500">
              {props.name} haqqında
            </p>
          </div>
          <div className="text-lg sm:text-xl mt-5">{props.paragraph}</div>
        </div>
      </div>
    </div>
  );
}

export default AbideInfo;
