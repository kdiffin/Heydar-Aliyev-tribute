import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function NavigationButton(props) {
  return (
    <Link
      onClick={() => scrollTo(0, 0)}
      state={props.lightMode}
      to={props.link}
      className={`to-route-button dark:bg-gradient-to-b dark:from-white dark:to-gray-200 dark:shadow-md active:scale-90 dark:text-gray-800`}
    >
      <span className=" mr-3">Daha Ətraflı</span> <FaArrowRight />
    </Link>
  );
}

export default NavigationButton;
