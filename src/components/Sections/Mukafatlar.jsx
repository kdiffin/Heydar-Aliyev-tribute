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
import Popup from "../Utility/Popup";
import { FaShareSquare } from "react-icons/fa";
import {
  ACHIEVMENTS_AZ as mukafatlarAze,
  ACHIEVMENTS_USSR as mukafatlarSSR,
} from "../../consts";

function Mukafatlar(props) {
  const [mukafatType, setMukafatType] = useState("azerbaijan");
  const [showPopUp, setShowPopUp] = useState(false);

  // when i reference mukafatIndex as "all", just know that it means it'll trigger the popup with all of the achievments/mukafatlar
  //which reside above ussr and aze buttons
  const [mukafatIndex, setMukafatIndex] = useState();

  const mukafatlar =
    mukafatType === "azerbaijan" ? mukafatlarAze : mukafatlarSSR;

  function popUpToggle(idz) {
    setShowPopUp(true);

    if (idz) {
      const boolList = mukafatlar.map((mukafat) => mukafat.id === idz);
      const index = boolList.indexOf(true);
      setMukafatIndex(index);
    } else {
      setMukafatIndex("all");
    }
  }

  return (
    <section
      id="mükafatları"
      className={`flex flex-col snap-center   ${
        props.lightMode
          ? "dark bg bg-gradient-to-b  from-white via-white to-gray-200"
          : "bg-gradient-to-b  from-black  to-gray-800 "
      } h-[2500px] items-center justify-center text-center w-full md:h-screen`}
    >
      <div className="xl:max-w-screen-md 2xl:max-w-screen-lg p-4 mx-auto  flex flex-col justify-center w-full h-full">
        <div className="relative">
          <div className="group mb-12 px-10 items-center shadow-md dark:shadow-none    flex flex-col sm:flex-row rounded-lg   shadow-gray-800 pt-5  pb-2">
            <div className="flex  flex-col pt-5 ">
              <p className="text-4xl font-bold inline border-b-2 text-left border-gray-500">
                Mükafatları
              </p>
              <p className="py-6">
                Həyatı boyu əldə etmiş müxtəlif nailiyyətləri{" "}
              </p>
            </div>
            <div className="flex justify-center  sm:ml-auto">
              <div
                onClick={() => setMukafatType("azerbaijan")}
                className="mukafatlar-button dark:shadow-md  active:scale-90 sm:px-0 w-2/5  sm:w-28   shadow-md shadow-gray-800 "
              >
                <img
                  className="h-5  mr-3  "
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.publicdomainpictures.net%2Fpictures%2F340000%2Fvelka%2Fflag-of-azerbaijan-1588676171Dkl.jpg&f=1&nofb=1&ipt=34d0cddbd7ff458d003854447b6939b0ec18d49295df6fbc6fb79770907f62de&ipo=images"
                />
                AZE
              </div>

              <div
                onClick={() => setMukafatType("ussr")}
                className="mukafatlar-button dark:shadow-md sm:px-0  sm:w-32  w-1/6 active:scale-90    shadow-md shadow-gray-800"
              >
                <img
                  className="h-5 sm:mr-3 "
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.britannica.com%2F36%2F22536-050-E22B1D13%2FFlag-Union-of-Soviet-Socialist-Republics.jpg%3Fw%3D400%26h%3D300%26c%3Dcrop&f=1&nofb=1&ipt=b5c9608aa7283fc7662aaa53a398de5dd9cf4e9fd62dd058f4809bc39e5a640c&ipo=images "
                />
                SSRI
              </div>
            </div>
            <div
              onClick={() => popUpToggle()}
              className=" group-hover:opacity-100 transition duration-300 active:scale-75 absolute md:opacity-0 dark:border-none top-3 right-3  cursor-pointer p-2    border-gray-700 border-2 border-opacity-40 rounded-md "
            >
              <div className="flex justify-center items-center">
                <FaShareSquare />
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3    gap-8 px-12 sm:px-0">
          {mukafatlar.map((mukafat) => {
            return (
              <div
                key={mukafat.id}
                onClick={() => popUpToggle(mukafat.id)}
                className={
                  mukafatType === "azerbaijan"
                    ? "shadow-md group cursor-pointer dark:shadow-md  active:scale-95  p-10 relative shadow-gray-600 dark:shadow-gray-300 rounded-lg"
                    : "shadow-md group cursor-pointer active:scale-95 p-5   relative shadow-gray-600 dark:shadow-gray-300 rounded-lg "
                }
              >
                <img
                  //this is a pretty dumb looking piece of code but working
                  //with images made transparent inside containers kinda weird
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
                <div className="absolute dark:text-white  transition px-3 text-center justify-center   ease-in-out duration-700 group-hover:opacity-100 opacity-0  flex top-0 left-0 rounded-xl h-full w-full bg-gradient-to-t from-black   via-black/600 to-transparent">
                  <h1 className="  text-xl   mt-auto mb-5 font-bold">
                    {mukafat.name}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {showPopUp ? (
        //repeated code here but idk how to do it another way
        <Popup
          mukafatIndex={mukafatIndex}
          setShowPopUp={setShowPopUp}
          mukafatImg={
            mukafatIndex === "all" ? "" : mukafatlar[mukafatIndex].src
          }
          mukafatName={
            mukafatIndex === "all" ? "" : mukafatlar[mukafatIndex].name
          }
          mukafatMelumat={
            mukafatIndex === "all" ? "" : mukafatlar[mukafatIndex].melumat
          }
          mukafatSubTitle={
            mukafatIndex === "all" ? "" : mukafatlar[mukafatIndex].subTitle
          }
          lightMode={props.lightMode}
          mukafatType={mukafatType}
          wikiLink={
            mukafatIndex === "all" ? "" : mukafatlar[mukafatIndex].wikiLink
          }
        />
      ) : (
        <></>
      )}
    </section>
  );
}

export default Mukafatlar;
