// import logo from './logo.svg';
import React from "react";

import View from "./components/Pages/View/View";
import TeamPage from "./components/Pages/TeamPage/TeamPage";

import { HashRouter } from "react-router-dom";

import { Route, Routes } from "react-router-dom";
import Spotlight from "./components/Spotlight/Spotlight.jsx";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<View />} />
          <Route exact path="/team" element={<TeamPage />} />
          <Route exact path="/home-page" element={<View />} />
          <Route exact path="#about" element={<View />} />
          <Route exact path="#what-we-do" element={<View />} />
          <Route exact path="#gallery" element={<View />} />
          <Route exact path="#contact" element={<View />} />
          <Route exact path="/spotlight" element={<Spotlight />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
