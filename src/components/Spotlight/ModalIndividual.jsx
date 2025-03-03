import React from "react";
import Socials from "./Socials";
function ModalIndividual({ modalValue }) {
  return (
    <div className="row" id="individual">
      <div className="card p-3 h-100">
        <div className="row g-0">
          <div className="col-12 col-xl-7  d-flex align-items-start justify-content-center p-0 pt-4">
            <div className="overflow-hidden w-100 iframe-container">
              {modalValue.video}
            </div>
          </div>
          <div
            className="d-flex col-xl-5 justify-content-center content align-items-start overflow-y-hidden max-h-lg-90
              "
          >
            <div className="card-body px-0 px-lg-4 py-4 about-container">
              <h5 className="card-title">
                <b>{modalValue.name}</b>
              </h5>

              <p className="card-text">
                <i className="fa-solid fa-user-graduate mt-1"></i>
                <span> {modalValue.department}</span>
              </p>
              <p className="card-text">
                <i className="fa-solid fa-hotel mt-1"></i> {modalValue.hall}
              </p>
              <p className="card-text">
                <i className="fa-solid fa-briefcase mt-1"></i>
                <span>{modalValue.work}</span>
              </p>

              <p className="card-text about text-justify">{modalValue.about}</p>
              <p className="mt-4">
                <Socials social={modalValue} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalIndividual;
