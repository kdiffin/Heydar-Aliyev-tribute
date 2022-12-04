import React from "react";

function Nəsihətləri() {
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
    <div
      id="nəsihətləri"
      className="w-full  snap-center pt-32 mt-32  h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-8">
          <p className="text-4xl font bold inline border-b-2 border-gray-500">
            Müdrik İfadələri
          </p>
        </div>

        <div className=" pb-6 shadow-lg shadow-gray-800 border-4 border-gray-800">
          <div
            className="overflow-y-scroll h-[400px]  scrollbar
           mukatafatlar-scrollbar  px-7  snap-y rounded-md
          snap-mandatory   "
          >
            {sözlər.map((söz) => {
              return (
                <p
                  key={söz.id}
                  className="text-xl hover:scale-105 transition duration-150 w-full border-gray-800 border-solid border-4 
            shadow-md border-opacity-50 mt-7 rounded-md shadow-gray-800   p-4 
            flex justify-center items-center text-center "
                >
                  {söz.name}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nəsihətləri;
