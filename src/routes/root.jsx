import React from "react";
import Əsas from "../components/Sections/Home";
import Həyatı from "../components/Sections/About";
import Mükafatları from "../components/Sections/Mukafatlar";
import Nəsihətləri from "../components/Sections/Nesihetleri";
import Popup from "../components/Utility/Popup";

import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Sections/Navbar";

function root() {
  {
    /* <Əsas />
  <Həyatı />
  <Mükafatları />
  <Nəsihətləri />
  <Popup /> */
  }
  return (
    <>
      <Navbar />
      <Əsas />
      <Həyatı />
      <Mükafatları />
      <Nəsihətləri />
    </>
  );
}

export default root;
