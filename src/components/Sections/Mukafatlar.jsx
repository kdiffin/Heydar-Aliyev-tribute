import React, { useState } from "react";
import mukafat1 from "/mukafat1.png";
import mukafat2 from "/mukafat2.png";
import mukafat3 from "/mukafat3.png";
import mukafat4 from "/mukafat4.png";
import mukafat5 from "/mukafat5.png";
import mukafat6 from "/mukafat6.png";
import mukafatAze1 from "/mukafatAze1.png";
import mukafatAze2 from "/mukafatAze2.svg";

import mukafatAze3 from "/mukafatAze3.svg";
import mukafatAze4 from "/mukafatAze4.svg";
import mukafatAze5 from "/mukafatAze5.svg";
import mukafatAze6 from "/mukafatAze6.png";

import merkezilogo from "/h.e-merkezilogo.png";

function Mukafatlar() {
  const [mukafatType, setMukafatType] = useState("azerbaijan");

  const mukafatlar = [
    {
      id: 1,
      src:
        mukafatType === "azerbaijan" ? (
          mukafatAze1
        ) : mukafatType === "ussr" ? (
          mukafat1
        ) : mukafatType === "abideler" ? (
          <></>
        ) : (
          <></>
        ),
      name:
        mukafatType === "azerbaijan" ? (
          " Atatürk Beynəlxalq Sülh Mükafatı"
        ) : mukafatType === "ussr" ? (
          "SSRİ Silahlı Qüvvələrinin 70 illiyi yubiley medalı"
        ) : mukafatType === "abideler" ? (
          <></>
        ) : (
          <></>
        ),
    },
    {
      id: 2,
      src:
        mukafatType === "azerbaijan" ? (
          mukafatAze2
        ) : mukafatType === "ussr" ? (
          mukafat2
        ) : mukafatType === "abideler" ? (
          <></>
        ) : (
          <></>
        ),
      name:
        mukafatType === "azerbaijan" ? (
          "Tbilisi Dövlət Universitetinin fəxri doktoru"
        ) : mukafatType === "ussr" ? (
          "Böyük Vətən müharibəsində Almaniya üzərində qələbə "
        ) : mukafatType === "abideler" ? (
          <></>
        ) : (
          <></>
        ),
    },
    {
      id: 3,
      src:
        mukafatType === "azerbaijan" ? (
          mukafatAze3
        ) : mukafatType === "ussr" ? (
          mukafat3
        ) : mukafatType === "abideler" ? (
          <></>
        ) : (
          <></>
        ),
      name:
        mukafatType === "azerbaijan" ? (
          "Dövlət nişanı"
        ) : mukafatType === "ussr" ? (
          "Beş dəfə Lenin ordeni"
        ) : mukafatType === "abideler" ? (
          <></>
        ) : (
          <></>
        ),
    },
    {
      id: 4,
      src:
        mukafatType === "azerbaijan" ? (
          mukafatAze4
        ) : mukafatType === "ussr" ? (
          mukafat4
        ) : mukafatType === "abideler" ? (
          <></>
        ) : (
          <></>
        ),
      name:
        mukafatType === "azerbaijan" ? (
          "`Yaroslav Mudrı` ordeni "
        ) : mukafatType === "ussr" ? (
          "Əmək igidliyi medalı"
        ) : mukafatType === "abideler" ? (
          <></>
        ) : (
          <></>
        ),
    },
    {
      id: 5,
      src:
        mukafatType === "azerbaijan" ? (
          mukafatAze5
        ) : mukafatType === "ussr" ? (
          mukafat5
        ) : mukafatType === "abideler" ? (
          <></>
        ) : (
          <></>
        ),
      name:
        mukafatType === "azerbaijan" ? (
          "Egey Universitetinin fəxri doktoru"
        ) : mukafatType === "ussr" ? (
          "Böyük Vətən müharibəsində qələbənin 40 illiyi yubiley medalı"
        ) : mukafatType === "abideler" ? (
          <></>
        ) : (
          <></>
        ),
    },
    {
      id: 6,
      src:
        mukafatType === "azerbaijan" ? (
          mukafatAze6
        ) : mukafatType === "ussr" ? (
          mukafat6
        ) : mukafatType === "abideler" ? (
          <></>
        ) : (
          <></>
        ),

      name:
        mukafatType === "azerbaijan" ? (
          "`Fəxri legion` ordeni"
        ) : mukafatType === "ussr" ? (
          "İki dəfə Sosialist Əməyi Qəhrəmanı"
        ) : mukafatType === "abideler" ? (
          <></>
        ) : (
          <></>
        ),
    },
  ];

  // <div
  //   id="mükafatları"
  //   className="snap-center  overflow-hidden  flex justify-center items-center     sm:snap-none  bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
  // >
  // </div>
  return (
    <section
      id="mükafatları"
      className="flex flex-col snap-center  h-[2500px] bg-gradient-to-b from-black  to-gray-800 items-center justify-center text-center w-full sm:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto  flex flex-col justify-center w-full h-full">
        <div className="mb-12 px-10 items-center shadow-sm   flex flex-col sm:flex-row rounded-lg   shadow-gray-800 pt-5  pb-2">
          <div className="flex  flex-col pt-5 ">
            <p className="text-4xl font-bold inline border-b-2 text-left border-gray-500">
              Mükafatları
            </p>
            <p className="py-6">
              Həyatı boyu əldə etmiş müxtəlif nailiyyətləri{" "}
            </p>
          </div>
          <div className="flex ml-auto">
            <div
              onClick={() => setMukafatType("azerbaijan")}
              className="ml-4  cursor-pointer  text-lg mt-5  w-1/5 active:scale-90 p-3 sm:w-28  py-5 flex items-center justify-center shadow-md shadow-gray-800 rounded-md"
            >
              <img
                className="h-5  mr-3"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.publicdomainpictures.net%2Fpictures%2F340000%2Fvelka%2Fflag-of-azerbaijan-1588676171Dkl.jpg&f=1&nofb=1&ipt=34d0cddbd7ff458d003854447b6939b0ec18d49295df6fbc6fb79770907f62de&ipo=images"
              />
              AZE
            </div>

            <div
              onClick={() => setMukafatType("ussr")}
              className="ml-4 cursor-pointer mt-5  text-lg active:scale-90 p-3 w-1/5 sm:w-28 py-5 flex items-center justify-center shadow-md shadow-gray-800 rounded-md"
            >
              <img
                className="h-5 mr-3 "
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.britannica.com%2F36%2F22536-050-E22B1D13%2FFlag-Union-of-Soviet-Socialist-Republics.jpg%3Fw%3D400%26h%3D300%26c%3Dcrop&f=1&nofb=1&ipt=b5c9608aa7283fc7662aaa53a398de5dd9cf4e9fd62dd058f4809bc39e5a640c&ipo=images "
              />
              SSRI
            </div>

            <div
              onClick={() => setMukafatType("abideler")}
              className="ml-4 mt-5 text-lg cursor-pointer  w-1/5 sm:w-32  active:scale-90   py-5 flex items-center justify-center  shadow-md shadow-gray-800 rounded-md"
            >
              <img className="h-5  mr-3" src={merkezilogo}></img>
              Abidələr
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3  gap-8 px-12 sm:px-0">
          {mukafatlar.map((mukafat) => {
            return (
              <div
                key={mukafat.id}
                className={
                  mukafatType === "azerbaijan"
                    ? "shadow-md group cursor-pointer active:scale-95  p-10 relative shadow-gray-600 rounded-lg "
                    : "shadow-md group cursor-pointer active:scale-95 p-5   relative shadow-gray-600 rounded-lg "
                }
              >
                <img
                  src={mukafat.src}
                  className={
                    mukafat.src === mukafatAze2 || mukafat.src === mukafatAze5
                      ? "rounded-t-lg   object-fit-down w-60 pt-5 ml-auto mr-auto"
                      : mukafat.src === mukafatAze4
                      ? "rounded-t-lg   object-fit-down w-40 ml-auto  mr-auto"
                      : mukafat.src === mukafatAze1
                      ? "rounded-t-lg   object-fit-down w-[190px] ml-auto  mr-auto"
                      : mukafat.src === mukafatAze3
                      ? "rounded-t-lg   object-fit-down w-56 ml-auto  mr-auto"
                      : mukafat.src === mukafatAze6
                      ? "rounded-t-lg   object-fit-down ml-auto  pt-7  scale-125  mr-auto"
                      : mukafat.src === mukafat3
                      ? "rounded-t-lg   object-fit-down w-[200px] pt-2   ml-auto  mr-auto"
                      : "rounded-t-lg   object-fit-down "
                  }
                />
                <div className="absolute transition px-3 text-center justify-center   ease-in-out duration-700 group-hover:opacity-100 opacity-0  flex top-0 left-0 rounded-xl h-full w-full bg-gradient-to-t from-black   via-black/600 to-transparent">
                  <h1 className="  text-xl   mt-auto mb-5 font-bold">
                    {mukafat.name}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Mukafatlar;
