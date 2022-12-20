import React from "react";
import { Link } from "react-router-dom";

function Abideler(props) {
  return (
    <section
      id={props.isAbideler ? "abidələri" : "çıxışları"}
      className={`flex flex-col snap-center   ${
        props.lightMode
          ? "dark bg bg-gradient-to-b  from-white  via-white to-gray-200"
          : "bg-gradient-to-b  from-black    to-gray-800 "
      }  items-center h-[1500px]  sm:-mb-0  sm:pt-0 justify-center text-center w-full md:h-screen`}
    >
      <div
        className={` max-w-screen-xl ${
          props.isAbideler && "xl:max-w-screen-2xl"
        } p-4 mx-auto flex flex-col items-center  justify-center w-full`}
      >
        <div className={`pb-8 flex  justify-center`}>
          <p className="text-4xl font bold mb-14  inline border-b-2 border-gray-500">
            {props.name}
          </p>
        </div>
        <div className="grid  grid-cols-1 gap-8 px-5 gap-y-16 md:gap-y-0 sm:px-0 md:grid-cols-3 ">
          {props.items.map((abide) => {
            return (
              <Link
                key={abide.id}
                to={abide.link}
                state={props.lightMode}
                className={`cursor-pointer text-white relative transition duration-100 
                hover:scale-110  shadow-gray-800 dark:shadow-gray-400 shadow-md
                 dark:shadow-lg rounded-md`}
              >
                <img
                  src={abide.src}
                  className={` ${
                    props.isAbideler ? "rounded-md" : "rounded-lg"
                  } h-full  `}
                />
                <p
                  className={` ${
                    !props.isAbideler &&
                    "bg-gradient-to-t from-black via-black/60"
                  }  text-xl py-6 absolute bottom-0  left-0 right-0 `}
                >
                  {abide.name}
                </p>
              </Link>
            );
          })}

          <br />
        </div>
      </div>
    </section>
  );
}

export default Abideler;
