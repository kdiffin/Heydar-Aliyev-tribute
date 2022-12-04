import React from "react";
import Footer from "../components/Footer";
import Əsas from "../components/Home";
import Həyatı from "../components/About";
import Mükafatları from "../components/Mukafatlar";
import Nəsihətləri from "../components/Nesihetleri";

function main() {
  return (
    <div className="bg-gray-800">
      <Əsas />
      <Həyatı />
      <Mükafatları />
      <Nəsihətləri />
      <Footer />
    </div>
  );
}

export default main;
