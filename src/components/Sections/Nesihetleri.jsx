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
    {
      name: "Kim müxalifətdə durursa-dursun, ancaq Vətəninə, xalqına, mənəviyyatına, məsləyinə müxalifətdə durmasın.",
      id: 10,
    },
    {
      name: "Tarix həmişə hər şeyi öz yerinə qoyur.",
      id: 11,
    },
    {
      name: "Əgər hər hansı ölkənin xalqları öz hüquqlarını anlayır və onları qoruya bilirsə, o zaman ən kiçik dövlət belə ən böyük məmləkət qədər güclü olar.",
      id: 12,
    },
    {
      name: "Azadlıq və istiqlaliyyət hər bir xalqın milli sərvətidir.",
      id: 13,
    },
    {
      name: "Başqasının fikrinə hörmət etmək, ondan faydalı bir şey götürmək qabiliyyəti hər bir adama lazımdır.",
      id: 13,
    },
    {
      name: "Hər bir insan həyatda öz yerini tapmalıdır. Amma öz yerini, özünə məxsus olan yerini tapmalıdır.",
      id: 14,
    },
    {
      name: "Kim ki, biliyindən, bacarığından artıq iddialar edir o, həmişə məğlub olur.",

      id: 15,
    },
    {
      name: "Dövlət, ölkə nə qədər çox xalqı birləşdirsə, bir o qədər zəngin olur, çünki onların hər biri ümumdünya mədəniyyətinə və sivilizasiyasına öz töhfəsini verir.",
      id: 16,
    },
    {
      name: "İlk işə başlayan şəxslərin üzərinə həmişə çox böyük, şərəfli vəzifələr düşür.",
      id: 17,
    },
    {
      name: "Yol - iqtisadiyyat, mədəniyyət, bir sözlə həyat deməkdir.",
      id: 18,
    },
    {
      name: "Heç bir vətəndaş ictimai-siyasi həyata biganə qalmamalıdır.",
      id: 19,
    },
    {
      name: "Xalqla ordunun birliyi həm xalqın qüdrətini artırır, həm də ordunu daha qüvvətli edir.",
      id: 20,
    },
    {
      name: "Dünya ümumiyyətlə quruculuqla, tikib-yaratmaqla yaşayıb, inkişaf edib.",
      id: 21,
    },
    {
      name: "Yüksək mədəniyyətə malik olan xalq həmişə irəli gedəcək, həmişə yaşayacaq, həmişə inkişaf edəcəkdir.",
      id: 22,
    },
    {
      name: "Mədəniyyət bəşəriyyətin topladığı ən yaxşı nümunələrlə xalqları zənginləşdirir.",

      id: 23,
    },
    {
      name: "Xalq gərək daim öz kökünü xatırlasın.",
      id: 24,
    },
    {
      name: "Tarix heç nəyi silmir.",
      id: 25,
    },
  ];

  return (
    <section
      id="müdrik-İfadələri"
      className={`flex flex-col 
      ${
        props.lightMode
          ? "dark bg bg-gradient-to-b  from-white via-white  to-gray-200"
          : "bg-gradient-to-b   from-black  to-gray-800 "
      } h-[800px]   sm:-mt-0
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
      <div className="absolute  w-full left-0 bottom-0">
        <Footer />
      </div>
    </section>
  );
}

export default Nəsihətləri;
