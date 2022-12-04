import React from "react";
import Navbar from "../components/Navbar";

import { Link, Outlet } from "react-router-dom";

function root() {
  return (
    <div>
      {" "}
      <Navbar />
      <Outlet />
    </div>
  );
}

export default root;
