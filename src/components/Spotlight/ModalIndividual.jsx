import React from "react";
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

              <div className="card-body social-links  ">
                <p className="text-center d-flex justify-content-between align-items-center">
                  {modalValue.medium && (
                    <span className="d-flex align-items-center">
                      Read on &nbsp;
                      <a href={modalValue.medium} target="_blank">
                        <button className="redirect-btn m-0">
                          Medium{" "}
                          <i class="fa-solid fa-arrow-up-right-from-square fs-6"></i>
                        </button>
                      </a>
                    </span>
                  )}
                  <span className="mt-2 d-flex align-items-center">
                    Connect: &nbsp;&nbsp;&nbsp;&nbsp;
                    {modalValue.linkedin && (
                      <a
                        href={modalValue.linkedin}
                        target="_blank"
                        className="me-2"
                      >
                        <i className="fa fa-linkedin-square"></i>
                      </a>
                    )}
                    {modalValue.facebook && (
                      <a
                        href={modalValue.facebook}
                        target="_blank"
                        className="me-2"
                      >
                        <i className="fa fa-facebook-square"></i>
                      </a>
                    )}
                    {modalValue.instagram && (
                      <a
                        href={modalValue.instagram}
                        target="_blank"
                        className="me-2"
                      >
                        <i className="fa-brands fa-square-instagram"></i>
                      </a>
                    )}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalIndividual;
