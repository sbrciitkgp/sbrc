import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Header from "./Header";
import Footer from "../PageFooter/Footer";
import Individual from "./Individual";
import Modal from "./Modal";
import "./spotlight.css";
import details from "./details.js";

function Spotlight() {
  const [modalValue, setModalValue] = useState({});

  const changeModalValue = (details) => {
    setModalValue(details);
  };
  return (
    <>
      <Navbar />
      <Header />
      <div className="individual-container ">
        <h1 className="text-center individual-head">Previous Episodes</h1>
        <div className="row px-md-4 mx-1 mx-sm-4">
          {details.map((detail) => {
            return (
              <Individual
                details={detail}
                key={detail.name}
                onModalClick={changeModalValue}
              />
            );
          })}
        </div>
      </div>
      <Modal modalValue={modalValue} />
      <Footer />
    </>
  );
}

export default Spotlight;
