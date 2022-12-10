import React, { useState } from "react";
import Əsas from "../components/Sections/Home";
import Həyatı from "../components/Sections/About";
import Mükafatları from "../components/Sections/Mukafatlar";
import Nəsihətləri from "../components/Sections/Nesihetleri";
import Popup from "../components/Utility/Popup";
import StylingWarning from "../components/Utility/StylingWarning";

import { Link, Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import Navbar from "../components/Sections/Navbar";
import { useEffect } from "react";
import Abideler from "../components/Sections/Abideler";

function root() {
  //in the rest of my code i refer to lightmode as dark, because tailwind supports only that
  // as the class option 😭😭😭😭 excuse me for that one
  const location = useLocation();
  const lightModeRouter = location.state;
  const [lightMode, setLightMode] = useState(lightModeRouter || false);

  return (
    <div className={` ${lightMode ? "text-black dark" : ""} m-0 p-0`}>
      <Əsas lightMode={lightMode} setLightMode={setLightMode} />
      <Həyatı lightMode={lightMode} setLightMode={setLightMode} />
      <Mükafatları lightMode={lightMode} />
      <Abideler lightMode={lightMode} />
      <Nəsihətləri lightMode={lightMode} />
      <StylingWarning />
    </div>
  );
}

export default root;
