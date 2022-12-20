import React from "react";
import { useLocation } from "react-router";
import About from "../components/Sections/About";
import { POLITICALPORTRAIT_PARAGRAPH } from "../consts";

function politicalPortrait() {
  //looking back, ive repeated a lot of code here thats similar to heyat.jsx
  //i probably couldve given the data for this from the root.jsx file itself through props
  //but oh well too lazy to implement it now
  const location = useLocation();
  const lightMode = location.state;
  return (
    <div
      className={`text-white overflow-y-scroll h-screen ${
        !lightMode && "dark-scrollbar"
      }  `}
    >
      {/* routed prop will be useful when u go to the about component and see all the ternaries */}
      <About
        routed
        lightMode={lightMode}
        name="Siyasi portreti"
        paragraph={POLITICALPORTRAIT_PARAGRAPH}
      />
    </div>
  );
}

export default politicalPortrait;
