import React from "react";
import Navbar from "../Navbar/Navbar";
import Header from "./Header";
import Footer from "../PageFooter/Footer";
import Individual from "./Individual";
import "./spotlight.css";
import details from "./details";

function Spotlight() {
  return (
    <>
      <Navbar />
      <Header />
      {details.map((detail) => {
        return <Individual details={detail} key={detail.name} />;
      })}
      <Footer />
    </>
  );
}

export default Spotlight;
