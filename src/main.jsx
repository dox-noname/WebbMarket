import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Apcart from "./card/Apcart.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loginview from "./routers/LoginView.jsx";
import Dashboard from "./routers/Dashboard.jsx";
import Chooseusername from "./routers/Chooseusername.jsx";
import { FiltersProvider } from "./card/context/filters.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  // <BrowserRouter>
  //   <Routes>
  //     <Route path="/" element={<Apcart />} />
  //     <Route path="login" element={<Loginview />} />
  //     <Route path="dashbord" element={<Dashboard />} />
  //     <Route path="choose-username" element={<Chooseusername />} />
  //   </Routes>
  // </BrowserRouter>
  <FiltersProvider>
    <App/>
  </FiltersProvider>
);
