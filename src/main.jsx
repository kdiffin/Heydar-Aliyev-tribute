import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import Heyat from "./routes/heyat";
import Mərkəzi from "./routes/merkezi";
import Sarayı from "./routes/sarayi";
import HavaLimani from "./routes/havaLimani";

import "./index.css";
import Education from "./routes/education";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  { path: "/Həyatı", element: <Heyat /> },
  { path: "/Təhsilə-Dəyəri", element: <Education /> },

  { path: "/Mərkəzi", element: <Mərkəzi /> },
  { path: "/Sarayı", element: <Sarayı /> },
  { path: "/Hava-Limanı", element: <HavaLimani /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
