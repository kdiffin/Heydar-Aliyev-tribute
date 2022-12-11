import React from "react";

function PopupImg(props) {
  return (
    <div className="fixed bg-black/50 top-0 w-full h-full  z-10">
      <div className="flex w-full h-full justify-center items-center">
        <div className=" relative w-11/12 px-2 rounded-md group ">
          <div className="flex justify-center items-center">
            <img
              src={props.img}
              alt="popupimg"
              className="cursor-zoom-out"
              onClick={() => props.setShowPopUpImg(false)}
            />
          </div>
        </div>
      </div>
      <div
        onClick={() => props.setShowPopUpImg(false)}
        className="absolute top-0 right-0 text-3xl mr-10 text-white mt-6 active:scale-90   cursor-pointer"
      >
        {" "}
        X
      </div>
    </div>
  );
}

export default PopupImg;
