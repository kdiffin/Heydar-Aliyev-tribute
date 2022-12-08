import React from "react";
import Footer from "../Utility/Footer";

function Nəsihətləri(props) {
  const sözlər = [
    {
      name: "Mən fəxr edirəm ki, Azərbaycanlıyam!",
      id: 2,
    },
    {
      name: "Xalq dövlət üçün yox, dövlət xalq üçün olmalıdır.",
      id: 1,
    },
    {
      name: "Öz ana dilini bilməyən adamlar şikəst adamlardır!      ",

      id: 4,
    },
    {
      name: "Böyük siyasəti kiçik hisslərə, xırda mənfəətlərə bağlamaq olmaz",

      id: 3,
    },
    {
      name: "Dil böyük bir aləmdir. ",

      id: 5,
    },
    {
      name: "Sənətdə hər kəsin öz yeri var. Heç kəs kiminsə yerini almır.      ",

      id: 6,
    },
    {
      name: "Ədalətsizliklə ədaləti bərpa etmək olmaz.",

      id: 7,
    },
    {
      name: "Müstəqillik yolu qədər çətin yol yoxdur. ",

      id: 8,
    },
    {
      name: "Fikir müxtəlifliyi təbii hadisədir.      ",

      id: 9,
    },
  ];
  return (
    <section
      id="Müdrik İfadələri"
      className={`flex flex-col 
      ${
        props.lightMode
          ? "dark bg bg-gradient-to-b  from-gray-200 via-white to-white"
          : "bg-gradient-to-b   from-gray-800  to-black "
      } h-[1000px]  
      snap-center  items-center justify-center relative text-center w-full sm:h-screen`}
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-8">
          <p className="text-4xl font bold inline border-b-2 border-gray-500">
            Müdrik İfadələri
          </p>
        </div>

        <div
          className=" pb-6 shadow-lg dark:shadow-gray-300 shadow-gray-800 
        rounded-sm border-4 border-gray-800 dark:border-gray-300"
        >
          <div
            className="overflow-y-scroll h-[400px]  scrollbar
            dark:light-scrollbar

           mukatafatlar-scrollbar  px-7  snap-y rounded-md
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
      <div className="absolute  w-full left-0 bottom-0">
        <Footer />
      </div>
    </section>
  );
}

export default Nəsihətləri;
