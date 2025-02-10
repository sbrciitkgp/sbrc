import React from "react";

function header() {
  return (
    <>
      <div className="mt-4 row" id="spotlight-header">
        <div className="col-12 col-sm-10 offset-sm-1 mb-3 mb-sm-0 ">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Spotlight</h5>
              <p className="card-text">
                The Students' Branding and Relations Cell has launched a
                ‘Spotlight’ initiative for IIT Kharagpur students, allowing
                students to highlight their accomplishments and awards. In the
                Spotlight series, the achievements of students in the fields of
                sports, academics, technology, sociocultural activities, and
                work in the field of public welfare are highlighted. The
                Spotlights can be wathched from the offical youtube channel of
                the Students' Branding and Relations Cell in the following link.
              </p>
              <button type="button" className="btn btn-primary btn-sm">
                <a href="https://www.youtube.com/@sbrciitkgp" target="_blank">
                  <i className="fa-brands fa-youtube me-2"></i>@sbrciitkgp
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default header;
