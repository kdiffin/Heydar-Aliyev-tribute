import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Navbar from "./Navbar";
import HeaderText from "../Utility/HeaderText";
import NavigationButton from "../Utility/NavigationButton";
import NavigationButtonHome from "../Utility/NavigationButtonHome";

function About(props) {
  //there are 2 different sources of props here, the ones found in the /routes directory
  //and secondly the ones coming from the root.jsx file.
  return (
    <section
      id={props.isHeyati ? "həyatı" : "siyasi-portreti"}
      className={
        !props.routed
          ? `flex flex-col  h-[1500px] xxs:h-[1300px]   items-center justify-center 
          ${
            props.lightMode
              ? "dark bg bg-gradient-to-b  from-gray-200 via-white to-white"
              : "bg-gradient-to-b dark-scrollbar  from-gray-800 via-gray-800 to-black "
          }
          snap-center  w-full xl:h-screen`
          : `w-full   	pb-20 pt-5  
          ${
            props.lightMode
              ? "dark bg bg-gradient-to-b   from-gray-200 via-white text-black to-white"
              : "bg-gradient-to-b dark-scrollbar  from-black via-black to-gray-800 "
          }
    text-white`
      }
    >
      {props.routed ? <Navbar routAbout lightMode={props.lightMode} /> : <></>}{" "}
      <div className="max-w-screen-lg  p-8 mx-auto flex flex-col justify-center w-full">
        {props.routed ? (
          <NavigationButtonHome lightMode={props.lightMode} />
        ) : (
          <></>
        )}
        <HeaderText name={props.name} centered={props.routed ? false : true} />
        <div className="text-xl mt-5">
          {props.firstLines}
          {!props.routed && props.isHeyati ? (
            <>
              <p>
                1993-cü il oktyabrın 3-də ümumxalq səsverməsi nəticəsində Heydər
                Əliyev Azərbaycan Respublikasının Prezidenti seçildi.
              </p>
              <br />
              <p>
                2003-cü il dekabrın 12-də müalicə olunduğu Klivlend Klinikasında
                vəfat etmiş, dekabrın 15-də Bakıda Fəxri Xiyabanda dəfn
                olunmuşdur.
              </p>
            </>
          ) : (
            <></>
          )}
          {!props.routed ? (
            <NavigationButton lightMode={props.lightMode} link={props.link} />
          ) : (
            <>{props.paragraph}</>
          )}
        </div>
      </div>
    </section>
  );
}

export default About;
