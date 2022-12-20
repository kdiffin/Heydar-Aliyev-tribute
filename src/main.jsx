import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import Heyat from "./routes/heyat";
import Mərkəzi from "./routes/merkezi";
import Sarayı from "./routes/sarayi";
import HavaLimani from "./routes/havaLimani";
import PoliticalPortrait from "./routes/politicalPortrait";
import Speeches from "./routes/speeches";

import "./index.css";
import Education from "./routes/education";
import Gallery from "./routes/gallery";
import {
  SPEECHES_PARAGRAPH1,
  SPEECHES_PARAGRAPH2,
  SPEECHES_PARAGRAPH3,
} from "./consts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  { path: "/Həyatı", element: <Heyat /> },
  { path: "/Təhsilə-Dəyəri", element: <Education /> },

  { path: "/Mərkəzi", element: <Mərkəzi /> },
  { path: "/Qaleriya", element: <Gallery /> },
  { path: "/Siyasi-portreti", element: <PoliticalPortrait /> },
  {
    path: "/Çıxışları/Andiçmə-mərasimi",
    element: (
      <Speeches
        name="Azərbaycan Respublikası Prezidentinin andiçmə mərasimində nitq"
        paragraph={SPEECHES_PARAGRAPH1}
      />
    ),
  },
  {
    path: "/Çıxışları/BMT-49cu-sessiya",
    element: (
      <Speeches
        name="BMT Baş Məclisinin 49-cu sessiyasında çıxış   "
        paragraph={SPEECHES_PARAGRAPH2}
      />
    ),
  },
  {
    path: "/Çıxışları/3cü-zirvə-toplantısında-çıxış",
    element: (
      <Speeches
        name="Türkdilli dövlət başçılarının 3-cü zirvə toplantısında çıxış    "
        paragraph={SPEECHES_PARAGRAPH3}
      />
    ),
  },

  { path: "/Sarayı", element: <Sarayı /> },
  { path: "/Hava-Limanı", element: <HavaLimani /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
