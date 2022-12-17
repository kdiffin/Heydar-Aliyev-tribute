import React from "react";
import AbideInfo from "../components/RouteComponents/AbideInfo";
import { IMGS_CENTER as imgs, PARAGRAPH_CENTER as paragraph } from "../consts";
function abideler() {
  return (
    <>
      {" "}
      <AbideInfo
        imgs={imgs}
        name="Heydər Əliyev Mərkəzi"
        paragraph={paragraph}
      />
    </>
  );
}

export default abideler;
