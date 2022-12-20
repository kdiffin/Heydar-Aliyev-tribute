import React, { useState } from "react";
import Əsas from "../components/Sections/Home";
import Həyatı from "../components/Sections/About";
import Mükafatları from "../components/Sections/Mukafatlar";
import Nəsihətləri from "../components/Sections/Nesihetleri";
import Education from "../components/Sections/Education";

import StylingWarning from "../components/Utility/StylingWarning";
import { useLocation } from "react-router-dom";
import Abideler from "../components/Sections/Abideler";
import {
  ABIDELER_ITEMS,
  ABOUT_TEXT,
  POLITICALPORTRAIT_TEXT,
  SPEECHES_ITEMS,
} from "../consts";
import Gallery from "../components/Sections/Gallery";

function root() {
  //in the rest of my code i refer to lightmode as dark, because tailwind supports only that
  // as the class option 😭😭😭😭 excuse me for that one
  const location = useLocation();
  const lightModeRouter = location.state;
  const [lightMode, setLightMode] = useState(lightModeRouter || false);

  return (
    <div
      className={` ${
        lightMode ? "text-black  dark " : "dark-scrollbar"
      } m-0 app  p-0`}
    >
      <Əsas lightMode={lightMode} setLightMode={setLightMode} />
      <Həyatı
        lightMode={lightMode}
        setLightMode={setLightMode}
        name="Həyatı"
        link="Həyatı"
        firstLines={ABOUT_TEXT}
        isHeyati
      />
      <Mükafatları lightMode={lightMode} />
      <Həyatı
        lightMode={lightMode}
        setLightMode={setLightMode}
        name="Siyasi portreti"
        link="Siyasi-portreti"
        firstLines={POLITICALPORTRAIT_TEXT}
      />
      <Abideler
        lightMode={lightMode}
        name="Abidələr"
        isAbideler
        items={ABIDELER_ITEMS}
      />
      <Education lightMode={lightMode} />
      <Abideler lightMode={lightMode} name="Çıxışları" items={SPEECHES_ITEMS} />
      <Gallery lightMode={lightMode} />

      <Nəsihətləri lightMode={lightMode} />
      <StylingWarning />
    </div>
  );
}

export default root;
