import React from "react";
import { useLocation } from "react-router";
import Education from "../components/Sections/Education";

function education() {
  const location = useLocation();
  const lightMode = location.state;

  return (
    <div
      className={`text-white overflow-y-scroll h-screen ${
        !lightMode && "dark-scrollbar"
      }  `}
    >
      {/* routed prop will be useful when u go to the about component and see all the ternaries */}
      <Education routed lightMode={lightMode} />
    </div>
  );
}

export default education;
