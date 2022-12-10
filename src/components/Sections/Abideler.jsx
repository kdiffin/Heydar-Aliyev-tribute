import React from "react";

function Abideler(props) {
  const abideler = [
    {
      id: 1,
      name: "Heydər Əliyev Mərkəzi",
      src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.oxu.az%2Fuploads%2FW1siZiIsIjIwMjAvMDQvMjEvMTQvMjUvMjkvZDlkNzk3NmEtMmNjOS00MzRlLTgzMGItMDQ0OTBhYTlkZjU5L2UyYzU4NzE1MGE2YjRlZWVhZTk0ZTA5Y2NjMDVjNjc2Lm1heC0yMDAweDEwMDAuanBnIl0sWyJwIiwiZW5jb2RlIiwianBnIiwiLXF1YWxpdHkgODAiXSxbInAiLCJ0aHVtYiIsIjYyMHg0NjVcdTAwM2UiXV0%3Fsha%3Df5f097236fc1c403&f=1&nofb=1&ipt=9a3ecc9e77784a0acc6e06957ddada216cf78c91ccfe4fee65a964b576c99c9d&ipo=images",
    },
    {
      id: 2,
      name: "Heydər Əliyev Sarayı   ",
      src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fvista-eed.com%2Fwp-content%2Fuploads%2F2017%2F09%2FHaydarAliyevSarayi02.jpg%3Ffit%3D1366%252C721&f=1&nofb=1&ipt=1e7de1f7e5114b6c3d5bda09074038077439c215b462a82c37d1c53faf322a63&ipo=images",
    },
    {
      id: 3,
      name: "Heydər Əliyev Hava Limanı ",
      src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.proplan-pmc.com%2Ffiles%2Fprojeler%2Fhaydar_aliyev_havalimani%2Fheydar_aliyev_uluslararas_havaliman_6.jpg&f=1&nofb=1&ipt=f243c5cc242c4a7570ca674e0070d3a001a23c9185d82d8f1a734388efa2c73f&ipo=images",
    },
  ];

  return (
    <div
      id="Abidələri"
      className={`flex flex-col snap-center   ${
        props.lightMode
          ? "dark bg bg-gradient-to-b  from-gray-200  via-white to-white"
          : "bg-gradient-to-b  from-gray-800   to-black "
      }  items-center h-[1500px]  sm:-mb-0  sm:pt-0 justify-center text-center w-full md:h-screen`}
    >
      <div className="max-w-screen-2xl p-4 mx-auto flex flex-col justify-center w-full">
        <div className={`pb-8 flex  justify-center`}>
          <p className="text-4xl font bold mb-14  inline border-b-2 border-gray-500">
            Abidələri
          </p>
        </div>
        <div className="grid  grid-cols-1 gap-8 px-5 gap-y-16 sm:gap-y-0 sm:px-0 md:grid-cols-3 ">
          {abideler.map((abide) => {
            return (
              <div
                key={abideler.id}
                className={`cursor-pointer text-white relative transition duration-100 hover:scale-110  shadow-gray-800 dark:shadow-gray-400 shadow-md dark:shadow-lg rounded-md`}
              >
                <img src={abide.src} className=" h-full rounded-md " />
                <p className="text-xl py-6 absolute bottom-0  left-0 right-0 ">
                  {abide.name}
                </p>
              </div>
            );
          })}

          <br />
        </div>
      </div>
    </div>
  );
}

export default Abideler;
