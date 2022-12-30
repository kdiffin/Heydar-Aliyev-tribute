import React from "react";

function HeaderText(props) {
  return (
    <>
      <div className={`pb-8 flex  ${props.centered && "justify-center"}`}>
        <p
          className={` ${props.additionalClassName} text-4xl font bold   inline border-b-2 border-gray-500`}
        >
          {props.name}
        </p>
      </div>
    </>
  );
}

export default HeaderText;
