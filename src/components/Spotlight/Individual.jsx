import React, { useState, useEffect } from "react";

function Individual({ details, onModalClick }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const maxLength = 100;

  // Function to update isMobile on resize
  const updateScreenSize = () => {
    setIsMobile(window.innerWidth < 768);
    setIsExpanded(false);
  };

  // Listen for screen size changes
  useEffect(() => {
    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  const changeView = () => {
    onModalClick(details);
  };

  return (
    <div
      className="col-sm-6 col-lg-4 col-12 offset-0 offset-sm-0 offset-lg-0 individual my-3"
      id="individual"
    >
      <div className="h-sm-60">
        <div className="card p-3">
          <div className="row g-0">
            <div className="col-12 d-flex align-items-center justify-content-center p-0">
              <div className="overflow-hidden w-100 iframe-container">
                {details.video}
              </div>
            </div>
            <div className="col-12  d-flex justify-content-center content expandable">
              <div className="card-body px-0 py-4">
                <h5 className="card-title">
                  <b>{details.name}</b>
                </h5>
                {/* <p>isMobile: {isMobile ? "true" : "false"}</p> */}
                {/* <p>isExpanded: {isExpanded ? "true" : "false"}</p> */}

                {/* Always show department, hall, and work on large screens */}
                {isExpanded && (
                  <>
                    <p className="card-text">
                      <i className="fa-solid fa-user-graduate"></i>
                      {details.department}
                    </p>
                    <p className="card-text">
                      <i className="fa-solid fa-hotel"></i> {details.hall}
                    </p>
                    <p className="card-text">
                      <i className="fa-solid fa-briefcase"></i> {details.work}
                    </p>
                  </>
                )}

                <p className="card-text about text-justify">
                  {isExpanded
                    ? details.about
                    : `${details.about.substring(0, maxLength)}...`}
                </p>

                {isExpanded ? (
                  <div className="card-body social-links text-center">
                    <p className="text-center">
                      Connect: &nbsp;&nbsp;&nbsp;&nbsp;
                      <a
                        href={details.linkedin}
                        target="_blank"
                        className="me-2"
                      >
                        <i className="fa fa-linkedin-square"></i>
                      </a>
                      <a
                        href={details.facebook}
                        target="_blank"
                        className="me-2"
                      >
                        <i className="fa fa-facebook-square"></i>
                      </a>
                      <a
                        href={details.instagram}
                        target="_blank"
                        className="me-2"
                      >
                        <i className="fa-brands fa-square-instagram"></i>
                      </a>
                    </p>
                  </div>
                ) : null}

                <button
                  className="read-more-btn ms-auto"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                  onClick={changeView}
                >
                  {isExpanded ? "Read Less" : "Read More"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Individual;
