// import logo from './logo.svg';
import React from "react";

import View from "./components/Pages/View/View";
import TeamPage from "./components/Pages/TeamPage/TeamPage";

import { HashRouter } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import { Route, Routes } from "react-router-dom";
import Spotlight from "./components/Spotlight/Spotlight.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<View />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/home-page" element={<View />} />
          <Route path="#about" element={<View />} />
          <Route path="#what-we-do" element={<View />} />
          <Route path="#gallery" element={<View />} />
          <Route path="#contact" element={<View />} />
          <Route path="/spotlight" element={<Spotlight />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
