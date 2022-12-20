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
import { Link } from "react-router-dom";
import { FaShareSquare } from "react-icons/fa";

function Mukafatlar(props) {
  const [mukafatType, setMukafatType] = useState("azerbaijan");
  const [showPopUp, setShowPopUp] = useState(false);

  // when i reference mukafatIndex as "all", just know that it means it'll trigger the popup with all of the achievments/mukafatlar
  //which reside above ussr and aze buttons
  const [mukafatIndex, setMukafatIndex] = useState();

  const mukafatlar = [
    {
      id: 1,
      src:
        mukafatType === "azerbaijan" ? (
          mukafatAze1
        ) : mukafatType === "ussr" ? (
          mukafat1
        ) : (
          <></>
        ),
      name:
        mukafatType === "azerbaijan" ? (
          " Atatürk Beynəlxalq Sülh Mükafatı"
        ) : mukafatType === "ussr" ? (
          "SSRİ Silahlı Qüvvələrinin 70 illiyi yubiley medalı"
        ) : (
          <></>
        ),
      melumat:
        mukafatType === "azerbaijan"
          ? "1986-cı ildən etibarən verilməyə başlanan və dünyada sülhə töhfə vermiş insanlara verilən Türkiyənin Dövlət mükafatıdır."
          : mukafatType === "ussr"
          ? " 1988-ci ildə SSRİ Silahlı Qüvvələrinin 70 illik yubileyi münasibətilə təsis olunmuşdur."
          : "ssr1",
      subTitle:
        mukafatType === "azerbaijan"
          ? "Türkiyənin ən nüfuzlu mükafatı."
          : mukafatType === "ussr"
          ? ""
          : "ssr1",
      wikiLink:
        mukafatType === "azerbaijan"
          ? "https://az.wikipedia.org/wiki/Atat%C3%BCrk_Beyn%C9%99lxalq_S%C3%BClh_M%C3%BCkafat%C4%B1"
          : mukafatType === "ussr"
          ? ""
          : "ssr3",
    },
    {
      id: 2,
      src:
        mukafatType === "azerbaijan" ? (
          mukafatAze2
        ) : mukafatType === "ussr" ? (
          mukafat2
        ) : (
          <></>
        ),
      name:
        mukafatType === "azerbaijan" ? (
          "Tbilisi Dövlət Universitetinin fəxri doktoru"
        ) : mukafatType === "ussr" ? (
          "Böyük Vətən müharibəsində Almaniya üzərində qələbə "
        ) : (
          <></>
        ),
      melumat:
        mukafatType === "azerbaijan"
          ? "Ölkənin ən böyük elm mərkəzlərindən biri. 1918-ci ilin fevralında yaradılıb. Universitetdə təxminən 18.000 tələbə təhsil alır. Universitetdə Hüquq, İqtisadiyyat, Sosial elmlər, Tibb və Təbiət Elmləri Fakültəsi var."
          : mukafatType === "ussr"
          ? " II Dünya Müharibəsi cəbhələrində Qırmızı Ordu, Hərbi Dəniz Qüvvələri və NKVD qoşunlarının sıralarında bilavasitə iştirak edən və ya hərbi rayonlardakı işləri ilə qələbəni təmin edən bütün hərbi personal və mülki heyət"
          : "ssr2",
      subTitle:
        mukafatType === "azerbaijan"
          ? "Gürcüstanın aparıcı və ən böyük ali məktəbi."
          : mukafatType === "ussr"
          ? "`1941–1945-ci illər Böyük Vətən Müharibəsində Almaniya üzərində qələbəyə görə` medalı ilə təltif edilsin:"
          : "ssr1",
      wikiLink:
        mukafatType === "azerbaijan"
          ? "https://az.wikipedia.org/wiki/Tbilisi_D%C3%B6vl%C9%99t_Universiteti"
          : mukafatType === "ussr"
          ? ""
          : "ssr3",
    },
    {
      id: 3,
      src:
        mukafatType === "azerbaijan" ? (
          mukafatAze3
        ) : mukafatType === "ussr" ? (
          mukafat3
        ) : (
          <></>
        ),
      name:
        mukafatType === "azerbaijan" ? (
          "Dövlət nişanı"
        ) : mukafatType === "ussr" ? (
          "Beş dəfə Lenin ordeni"
        ) : (
          <></>
        ),

      subTitle:
        mukafatType === "azerbaijan"
          ? "Türkiyə Respublikasının ən yüksək mükafatı.  "
          : mukafatType === "ussr"
          ? ""
          : "ssr1",
      melumat:
        mukafatType === "azerbaijan"
          ? `   1988-ci ildə təsis edilmişdir.  Türkiyə prezidenti tərəfindən təqdim edilən 'Dövlət nişanı' dövlət başçısının tövsiyəsi əsasında Türkiyə Respublikası Nazirlər Kabinetinin qərarı ilə verilir. Bu mükafata xarici ölkələrin dövlət başçıları ölkələr arasında dostluq əlaqələrinin inkişafı və xalqların bir-biri ilə daha da yaxınlaşmasındakı xidmətlərinə görə layiq görülürlər`
          : mukafatType === "ussr"
          ? " SSRİ-nin ən yüksək mükafatı. 6 aprel 1930-cu ildə SSRİ MİK-in fərmanı ilə yaradılıb. "
          : "ssr3",
      wikiLink:
        mukafatType === "azerbaijan"
          ? "https://az.wikipedia.org/wiki/D%C3%B6vl%C9%99t_ni%C5%9Fan%C4%B1_(T%C3%BCrkiy%C9%99)"
          : mukafatType === "ussr"
          ? ""
          : "ssr3",
    },
    {
      id: 4,
      src:
        mukafatType === "azerbaijan" ? (
          mukafatAze4
        ) : mukafatType === "ussr" ? (
          mukafat4
        ) : (
          <></>
        ),
      name:
        mukafatType === "azerbaijan" ? (
          "`Yaroslav Mudrı` ordeni "
        ) : mukafatType === "ussr" ? (
          "Əmək igidliyi medalı"
        ) : (
          <></>
        ),
      subTitle:
        mukafatType === "azerbaijan"
          ? "Ukraynanın ali mükafatı.  "
          : mukafatType === "ussr"
          ? ""
          : "ssr1",
      melumat:
        mukafatType === "azerbaijan"
          ? " 2001-ci ildə Ukraynanın `Qızıl tale` Beynəlxalq Açıq Məşhurluq Reytinqinin `Qloriya Populi` qızıl ulduzu, 2003-cü ildə Ukrayna Prezidenti yanında Dövlət İdarəçilik Akademiyasının fəxri doktoru və 2003-cü ilin 27 İyununda Ukraynanın mədəniyyət ictimaiyyətinin `Şərəf` ordenini əldə edib."
          : mukafatType === "ussr"
          ? "SSRİ Ali Sovetinin 27 dekabr 1938-ci il tarixli qanunu ilə təsis olunmuş SSRİ medalı"
          : "ssr4",
      wikiLink:
        mukafatType === "azerbaijan"
          ? "https://az.wikipedia.org/wiki/Heyd%C9%99r_%C6%8Fliyev"
          : mukafatType === "ussr"
          ? ""
          : "ssr3",
    },
    {
      id: 5,
      src:
        mukafatType === "azerbaijan" ? (
          mukafatAze5
        ) : mukafatType === "ussr" ? (
          mukafat5
        ) : (
          <></>
        ),
      name:
        mukafatType === "azerbaijan" ? (
          "Ege Universitetinin fəxri doktoru"
        ) : mukafatType === "ussr" ? (
          "Böyük Vətən müharibəsində qələbənin 40 illiyi yubiley medalı"
        ) : (
          <></>
        ),
      melumat:
        mukafatType === "azerbaijan"
          ? "1955-cı ildə yaradılan, Türkiyənin qabaqda gələn universitetlərindən biri. 2016-ci ildə açıqlanan məlumatda , dünyanın ən yaxşı universitetləri arasında 482-ci olmuşdur[2]."
          : mukafatType === "ussr"
          ? "1985-ci ildə təsis olunmuş SSRİ medalı."
          : "ssr5",
      wikiLink:
        mukafatType === "azerbaijan"
          ? "https://az.wikipedia.org/wiki/Egey_Universiteti"
          : mukafatType === "ussr"
          ? ""
          : "ssr3",
    },
    {
      id: 6,
      src:
        mukafatType === "azerbaijan" ? (
          mukafatAze6
        ) : mukafatType === "ussr" ? (
          mukafat6
        ) : (
          <></>
        ),

      name:
        mukafatType === "azerbaijan" ? (
          "`Fəxri legion` ordeni"
        ) : mukafatType === "ussr" ? (
          "İki dəfə Sosialist Əməyi Qəhrəmanı"
        ) : (
          <></>
        ),
      subTitle:
        mukafatType === "azerbaijan"
          ? "Fransanın ən yüksək hərbi və mülki dövlət mükafatı.  "
          : mukafatType === "ussr"
          ? ""
          : "ssr1",
      melumat:
        mukafatType === "azerbaijan"
          ? "19 may 1802-ci ildə Napoleon Bonapart tərəfindən təsis edilmişdir. Bu ordenlə təltif olunmuş azərbaycanlılar arasında müharibə veteranı Əhmədiyyə Cəbrayılov, dahi rəssam Tahir Salahov, prezident İlham Əliyev və YUNESKO və İSESKO-nun xoşməramlı səfiri Mehriban Əliyeva da var."
          : mukafatType === "ussr"
          ? "Sosialist Əməyi Qəhrəmanı fəxri adı və bu adın verilməsinin əsasnaməsi SSRİ Ali Soveti Rəyasət Heyətinin 27 dekabr 1938-ci il tarixli qərarı ilə təsis edilmişdir. Buna qədər Əmək Qəhrəmanı adı mövcud idi. SSRİ üzrə ümumilikdə 20 613 nəfər Sosialist Əməyi Qəhrəmanı adına layiq görülmüşdür ki, bunlardan 201-i iki dəfə, 15-sı isə üç dəfə bu fəxri adla təltif edilmişdir. 134 nəfərə verilmiş Sosialist Əməyi Qəhrəmanı fəxri adı sonradan geri alınmışdır."
          : "ssr6",
      wikiLink:
        mukafatType === "azerbaijan"
          ? "https://az.wikipedia.org/wiki/%22F%C9%99xri_legion%22_ordeni"
          : mukafatType === "ussr"
          ? ""
          : "ssr3",
    },
  ];

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
      <div className="max-w-screen-lg p-4 mx-auto  flex flex-col justify-center w-full h-full">
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
