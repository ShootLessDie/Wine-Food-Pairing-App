import React from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./Modules/MainPage";
import Sommelier from "./Modules/Sommelier";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/sommelier" element={<Sommelier />} />
    </Routes>
  );
};

export default App;
