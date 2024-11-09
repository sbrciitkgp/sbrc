// import logo from './logo.svg';
import React from "react";

import View from "./components/Pages/View/View";
import TeamPage from "./components/Pages/TeamPage/TeamPage";

import { HashRouter } from 'react-router-dom';

import { Route, Routes} from "react-router-dom";

function App(){
  return (
    <>
    <HashRouter>
      <Routes>
        <Route exact path='/' element={<View/>} />
        <Route exact path="/team" element={<TeamPage />}/>
        <Route exact path="/home-page" element={<View />}/>
      </Routes>
    </HashRouter>

    </>

  );
}

export default App;