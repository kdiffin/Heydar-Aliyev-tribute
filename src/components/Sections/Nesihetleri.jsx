import React from "react";
import { WORDS_NESIHETLERI as sözlər } from "../../consts";
import Footer from "../Utility/Footer";

function Nəsihətləri(props) {
  return (
    <section
      id="müdrik-İfadələri"
      className={`flex flex-col 
      ${
        props.lightMode
          ? "dark bg bg-gradient-to-b  from-white via-white  to-gray-200"
          : "bg-gradient-to-b   from-black  to-gray-800 "
      } h-[850px]   
      snap-center  items-center justify-center relative text-center w-full md:h-screen`}
    >
      <div className="max-w-screen-lg p-4 mx-auto mb-20 sm:mb-0 flex flex-col justify-center w-full">
        <div className="pb-8">
          <p className="text-4xl font bold inline border-b-2 border-gray-500">
            Müdrik İfadələri
          </p>
        </div>

        <div
          className=" pb-6 shadow-lg dark:shadow-gray-300 shadow-gray-800 
          mb-[200px] sm:mb-[0] rounded-sm border-4 border-gray-800 dark:border-gray-300"
        >
          <div
            className="overflow-y-scroll h-[400px]  scrollbar
            dark:light-scrollbar

           mukatafatlar-scrollbar  px-7   n snap-y rounded-md
          snap-mandatory   "
          >
            {sözlər.map((söz) => {
              return (
                <p
                  key={söz.id}
                  className="text-xl hover:scale-105 transition duration-150 w-full border-gray-800 border-solid border-4 
            shadow-md  mt-7 rounded-md dark:shadow-none shadow-gray-800 dark:border-gray-300  p-4 
            flex justify-center items-center text-center "
                >
                  {söz.name}
                </p>
              );
            })}
          </div>
        </div>
      </div>
      <div className="absolute   w-full left-0 bottom-0">
        <Footer />
      </div>
    </section>
  );
}

export default Nəsihətləri;
