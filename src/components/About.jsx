import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import AboutParagraph from "./AboutParagraph";

function About(props) {
  return (
    <div
      id="həyatı"
      className={
        !props.routed
          ? "w-full  snap-center	pt-44  h-screen bg-gradient-to-b from-gray-800 to-black text-white"
          : "w-full  	pb-20 pt-48 h-full  bg-gradient-to-b from-gray-800 to-black text-white"
      }
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        {props.routed ? (
          <Link
            to="/"
            className="bg-gradient-to-b text-md py-3 w-48 justify-center mb-10  flex items-center active:scale-90  text-gray-400 rounded-md from-gray-800 via-gray-800 to-[#1b283a81]   shadow-m shadow-blue-200"
          >
            <span className="mr-3">
              <FaArrowLeft />
            </span>
            <span className="mr-4">Geriyə dön</span>
          </Link>
        ) : (
          <></>
        )}
        <div className="pb-8">
          <p className="text-4xl font bold inline border-b-2 border-gray-500">
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
              <br />
              <br />
              <br />

              <Link
                to={"/Həyatı"}
                className="bg-gradient-to-t py-5 w-48 justify-center ml-[450px] flex items-center active:scale-90  text-gray-400 rounded-xl from-[#050916] via-[#0d1222]  to-[#0d1020] shadow-m shadow-blue-200"
              >
                <span className=" mr-3">Daha Ətraflı</span> <FaArrowRight />
              </Link>
            </>
          ) : (
            <AboutParagraph />
          )}
        </div>
      </div>
    </div>
  );
}

export default About;
