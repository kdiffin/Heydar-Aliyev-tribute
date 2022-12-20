import React, { useState } from "react";

function stylingWarning() {
  const [closeWarning, setCloseWarning] = useState(false);

  return (
    <>
      {!sessionStorage.getItem("firstTimeRefresh") ? (
        <div
          className={`absolute ${
            closeWarning ? "sm:hidden" : ""
          }top-0  z-20  justify-center p-8 hidden sm:flex items-center left-0 w-full overflow-y-hidden h-full bg-gradient-to-b from-black to-gray-800 text-gray-500`}
        >
          <p
            onClick={() => {
              // session storage is used to know if the user has opened up the site for the first time
              // but it doesnt last forever unlike localstorage which lingers even beyond the site closing
              //this is perfect for popups which u need to show only when the user opens up the page,
              //but no on every re-render of the component.
              sessionStorage.setItem("firstTimeRefresh", true);
              setCloseWarning(true);
            }}
            className="text-4xl absolute top-0 right-0 mr-10 mt-10  hover:scale-110 cursor-pointer transition duration-300 active:scale-90"
          >
            x
          </p>

          <div className="flex flex-col justify-center items-center text-center">
            <p className="text-2xl text-white">
              Sayt qəribə və yaxud nasaz görsəndiyi halda, sayt düzələnə qədər
              "ctrl" və "-" düymələrinə basın
            </p>
            <br />

            <p className="text-2xl text-white">
              In the case of the site looking rather weird or zoomed in, press
              the ctrl and - keys until satisfied.
            </p>
            <br />
            <br />
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default stylingWarning;
