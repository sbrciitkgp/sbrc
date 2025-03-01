import React from "react";

function header() {
  return (
    <>
      <div className="mt-1 spotlight-header" id="spotlight-header">
        <div className="col-12 col-sm-10 offset-sm-1 mb-0 p-0">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title text-center">
                <b>Spotlight</b>
              </h1>
              <p className="card-text">
                The Students' Branding and Relations Cell has launched a
                ‘Spotlight’ initiative for IIT Kharagpur students, allowing
                students to highlight their accomplishments and awards. In the
                Spotlight series, the achievements of students in the fields of
                sports, academics, technology, sociocultural activities, and
                work in the field of public welfare are highlighted. The
                interviews of Spotlight series are posted on the offical youtube
                channel of the Students' Branding and Relations Cell.
              </p>
              <a
                href="https://www.youtube.com/@sbrciitkgp"
                target="_blank"
                className="yt-link"
              >
                <button className="redirect-btn">
                  <i className="fa-brands fa-youtube me-2"></i>
                  @sbrciitkgp
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default header;
