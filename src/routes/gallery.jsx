import React from "react";
import { useLocation } from "react-router";
import GalleryInfo from "../components/RouteComponents/GalleryInfo";
import About from "../components/Sections/About";

function gallery() {
  const location = useLocation();
  const lightMode = location.state ? location.state.lightMode : false;
  const filter = location.state ? location.state.filter : "1923-1969";

  return (
    <div
      className={`text-white overflow-y-scroll h-screen ${
        !lightMode && "dark-scrollbar"
      }  `}
    >
      {/* routed prop will be useful when u go to the about component and see all the ternaries */}
      <GalleryInfo routed lightMode={lightMode} filter={filter} />
    </div>
  );
}

export default gallery;
