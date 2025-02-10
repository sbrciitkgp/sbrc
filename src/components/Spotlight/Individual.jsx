import React from "react";

function Individual({ details }) {
  return (
    <div className="row">
      <div className="col-sm-10 offset-sm-1 col-12">
        <div className="card p-4">
          <div className="row g-0">
            <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center p-0">
              <div className="overflow-hidden w-100 iframe-container">
                {details.video}
              </div>
            </div>
            <div className="col-12 col-lg-6 d-flex justify-content-center">
              <div className="card-body px-0 px-lg-4 py-4">
                <h5 className="card-title">{details.name}</h5>
                <p
                  className="card-text"
                  style={{ textTransform: "none !important" }}
                >
                  <i className="fa-solid fa-user-graduate"></i>
                  {details.department}
                </p>
                <p className="card-text">
                  <i class="fa-solid fa-hotel"></i>
                  {details.hall}
                </p>
                <p className="card-text">
                  <i class="fa-solid fa-briefcase"></i>
                  {details.work}
                </p>
                <p className="card-text">{details.about}</p>
                <div class="card-body social-links">
                  <a href={details.linkedin} target="_blank" className="me-2">
                    <i className="fa fa-linkedin-square"></i>
                  </a>
                  <a href={details.facebook} target="_blank" className="me-2">
                    <i className="fa fa-facebook-square"></i>
                  </a>
                  <a href={details.instagram} target="_blank" className="me-2">
                    <i className="fa-brands fa-square-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Individual;
