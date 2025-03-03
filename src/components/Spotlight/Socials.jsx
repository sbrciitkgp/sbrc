import React from "react";

function Socials({ social }) {
  return (
    <div className=" social-links  my-4 d-flex align-items-center justify-content-center flex-wrap">
      {social.medium && (
        <div className="d-flex align-items-center justify-content-center px-2">
          Read on &nbsp;
          <a href={social.medium} target="_blank">
            <button className="redirect-btn m-0 d-flex flex-nowrap align-items-center px-2">
              Medium{" "}
              <i class="fa-solid fa-arrow-up-right-from-square fs-6 ms-1"></i>
            </button>
          </a>
        </div>
      )}
      <div className="text-center d-flex justify-content-around align-items-center flex-wrap px-2">
        <span className=" d-flex align-items-center">
          Connect: &nbsp;&nbsp;
          {social.linkedin && (
            <a href={social.linkedin} target="_blank" className="me-2">
              <i className="fa fa-linkedin-square"></i>
            </a>
          )}
          {social.facebook && (
            <a href={social.facebook} target="_blank" className="me-2">
              <i className="fa fa-facebook-square"></i>
            </a>
          )}
          {social.instagram && (
            <a href={social.instagram} target="_blank" className="me-2">
              <i className="fa-brands fa-square-instagram"></i>
            </a>
          )}
        </span>
      </div>
    </div>
  );
}

export default Socials;
