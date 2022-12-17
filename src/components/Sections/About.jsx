import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import AboutParagraph from "../RouteComponents/AboutParagraph";
import Navbar from "./Navbar";

function About(props) {
  return (
    <section
      id="həyatı"
      className={
        !props.routed
          ? `flex flex-col  h-[1500px] xxs:h-[1300px] items-center justify-center 
          ${
            props.lightMode
              ? "dark bg bg-gradient-to-b  from-gray-200 via-white to-white"
              : "bg-gradient-to-b dark-scrollbar  from-gray-800 via-gray-800 to-black "
          }
          snap-center  w-full md:h-screen`
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
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        {props.routed ? (
          <Link
            to="/"
            state={props.lightMode}
            className="active:scale-90 dark:text-gray-900 sm:mx-0 back-to-home-button dark:bg-gradient-to-b dark:from-white dark:to-gray-200"
          >
            <span className="mr-3">
              <FaArrowLeft />
            </span>
            <span className="mr-4">Geriyə dön</span>
          </Link>
        ) : (
          <></>
        )}
        <div className={`pb-8 flex ${props.routed ? "" : "justify-center"}`}>
          <p className="text-4xl font bold  inline border-b-2 border-gray-500">
            Həyatı
          </p>
        </div>
        <div className="text-xl mt-5">
          <p>
            Heydər Əlirza oğlu Əliyev 1923-cü il mayın 10-da Azərbaycanın
            Naxçıvan şəhərində dəmiryolçu ailəsində dünyaya gəlmişdir. 1939-cu
            ildə Naxçıvan Pedaqoji Texnikumunu bitirdikdən sonra Azərbaycan
            Sənaye İnstitutunun memarlıq fakültəsində təhsil almışdır. Başlanan
            müharibə ona təhsilini başa çatdırmağa imkan verməmişdir.
          </p>
          <br />
          <p>
            Heydər Əliyev 1941–1944-cü illərdə Naxçıvan MSSR Xalq Daxili İşlər
            Komissarlığında və Naxçıvan MSSR Xalq Komissarları Sovetində
            müxtəlif məsul vəzifələrdə xidmət etmiş, 1944-cü ilin mayında isə
            Naxçıvan Vilayət Partiya Komitəsi tərəfindən dövlət təhlükəsizliyi
            orqanlarına işə göndərilmişdir.
          </p>{" "}
          <br />
          {props.routed ? (
            <></>
          ) : (
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
          )}
          {!props.routed ? (
            <>
              <Link
                onClick={() => scrollTo(0, 0)}
                state={props.lightMode}
                to={"/Həyatı"}
                className={`to-route-button dark:bg-gradient-to-b dark:from-white dark:to-gray-200 dark:shadow-md active:scale-90 dark:text-gray-800`}
              >
                <span className=" mr-3">Daha Ətraflı</span> <FaArrowRight />
              </Link>
            </>
          ) : (
            <AboutParagraph />
          )}
        </div>
      </div>
    </section>
  );
}

export default About;
