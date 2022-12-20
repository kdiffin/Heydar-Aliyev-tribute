import React from "react";
import { useLocation } from "react-router";
import GalleryInfo from "../components/RouteComponents/GalleryInfo";
import About from "../components/Sections/About";

function gallery() {
  const location = useLocation();
  const lightMode = location.state.lightMode;
  const filter = location.state.filter;

  return (
    <div
      className={`text-white overflow-y-scroll h-screen ${
        !lightMode && "dark-scrollbar"
      }  `}
    >
      {/* routed prop will be useful when u go to the about component and see all the ternaries */}
      <GalleryInfo routed lightMode={lightMode || false} filter={filter} />
    </div>
  );
}

export default gallery;
