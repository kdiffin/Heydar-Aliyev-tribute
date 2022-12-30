import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

function NavigationButtonHome(props) {
  return (
    <>
      {" "}
      <Link
        to="/"
        state={props.lightMode}
        className="active:scale-90 dark:text-gray-900 sm:mx-0 back-to-home-button dark:bg-gradient-to-b dark:from-white dark:to-gray-200"
      >
        <span className="mr-3">
          <FaArrowLeft />
        </span>
        <span className="mr-4">Geriyə dön</span>
      </Link>
    </>
  );
}

export default NavigationButtonHome;
