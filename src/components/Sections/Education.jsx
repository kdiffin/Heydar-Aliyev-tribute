import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { SCHOOLS_EDUCATION as schools } from "../../consts";
import AboutParagraph from "../RouteComponents/AboutParagraph";
import EducationParagraph from "../RouteComponents/EducationParagraph";
import Popup from "../Utility/Popup";
import Navbar from "./Navbar";

function Education(props) {
  const [showPopUp, setShowPopUp] = useState(false);
  const [mukafatIndex, setMukafatIndex] = useState();

  function popUpToggle(idz) {
    setShowPopUp(true);

    const boolList = schools.map((school) => school.id === idz);
    const index = boolList.indexOf(true);
    setMukafatIndex(index);
  }

  return (
    <section
      id="təhsilə-dəyəri"
      className={
        !props.routed
          ? `flex flex-col  h-[1500px]  xxs:h-[1300px] items-center justify-center 
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
      {/* this is the pic gallery of all the things universities he made */}
      {props.routed ? (
        <>
          <div className="max-w-screen-lg min-h-screen mb-40 mt-24 p-4 mx-auto flex flex-col  w-full">
            <div className={`pb-8 flex  justify-center`}>
              <p className="text-5xl font bold text-center mt-20  mb-14 inline border-b-2 border-gray-500">
                Yaratdığı təhsil müəssisələri
              </p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3    gap-8 px-12 sm:px-0">
              {schools.map((school) => {
                return (
                  <div
                    key={school.id}
                    onClick={() => popUpToggle(school.id)}
                    className={
                      "shadow-md group cursor-pointer dark:shadow-md h-[250px]  flex justify-center items-center active:scale-95  p-10 relative shadow-gray-600  dark:shadow-gray-300 rounded-md "
                    }
                  >
                    <img
                      src={school.src}
                      className={"rounded-t-lg h-[100%]  object-fit-down "}
                    />
                    <div className="absolute dark:text-white  transition px-3 text-center justify-center   ease-in-out duration-700 group-hover:opacity-100 opacity-0  flex top-0 left-0 rounded-md h-full w-full bg-gradient-to-t from-black   via-black/600 to-transparent">
                      <h1 className="  text-xl   mt-auto mb-5 font-bold">
                        {school.name}
                      </h1>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className={`pb-8 flex  justify-center`}>
          <p className="text-4xl font bold  text-center inline  border-b-2 border-gray-500">
            Milli təhsil quruculuğunda rolu
          </p>
        </div>
        <div className="text-xl mt-5">
          <p>
            Heydər Əliyev hələ Azərbaycana birinci rəhbərliyi dövründə təhsilin
            inkişafına böyük önəm verirdi. Ötən əsrin 70-80-ci illərində onun
            rəhbərliyi altında təhsil müəssisələrinin geniş şəbəkəsinin
            yaradılması və həmin şəbəkənin zəngin maddi-texniki bazasının
            formalaşdırılması, respublika hüdudlarından kənardakı ali məktəblərə
            gənclərin göndərilməsi, hərbi kadrların yetişdirilməsi, respublika
            elmlər akademiyasının elmi-tədqiqat institutlarında fundamental
            elmin inkişafının təmin olunması gələcəkdə milli müstəqillik üçün
            zəruri intellektual zəmin yaratmışdır.
          </p>
          <br />
          <p>
            Həmin illərdə respublikada məktəblərin, ali və orta ixtisas
            müəssisələri üçün yeni binaların tikintisi geniş vüsət almış, təhsil
            infrastrukturu tamamilə yeniləşdirilmiş, ixtisaslı kadrlar
            hazırlayan ali və orta ixtisas məktəbləri açılmışdır. Respublikanın
            müxtəlif bölgələrində 800-ə yaxın məktəb tikilərək istifadəyə
            verilmiş, ölkəmizdə fəaliyyət göstərən ali məktəblərin ümumi sayı
            12-dən 17-yə, tələbələrin sayı 70 mindən 100 minə qədər artmışdır.
          </p>{" "}
          <br />
          {!props.routed ? (
            <>
              <Link
                onClick={() => scrollTo(0, 0)}
                state={props.lightMode}
                to={"/Təhsilə-Dəyəri"}
                className={`to-route-button dark:text-gray-800 dark:bg-gradient-to-b dark:from-white dark:to-gray-200 dark:shadow-md active:scale-90`}
              >
                <span className=" mr-3">Daha Ətraflı</span> <FaArrowRight />
              </Link>
            </>
          ) : (
            <EducationParagraph />
          )}
        </div>
        {showPopUp ? (
          <Popup
            setShowPopUp={setShowPopUp}
            mukafatImg={schools[mukafatIndex].src}
            mukafatName={schools[mukafatIndex].name}
            mukafatMelumat={schools[mukafatIndex].melumat}
            mukafatSubTitle={schools[mukafatIndex].subTitle}
            lightMode={props.lightMode}
            education
            wikiLink={schools[mukafatIndex].wikiLink}
          />
        ) : (
          <></>
        )}
      </div>
    </section>
  );
}

export default Education;
