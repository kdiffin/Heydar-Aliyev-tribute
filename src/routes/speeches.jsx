import React from "react";
import { useLocation } from "react-router";

import About from "../components/Sections/About";
import { POLITICALPORTRAIT_PARAGRAPH } from "../consts";

function speeches(props) {
  const location = useLocation();
  const lightMode = location.state;
  return (
    <div
      className={`text-white overflow-y-scroll h-screen ${
        !lightMode && "dark-scrollbar"
      }  `}
    >
      <>
        <About
          routed
          routAbout
          lightMode={lightMode}
          name={props.name}
          paragraph={props.paragraph}
        />
      </>
    </div>
  );
}

export default speeches;
