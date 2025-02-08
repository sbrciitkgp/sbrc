import React from "react";
import { HashLink } from "react-router-hash-link";

import "./Footer.css";
import "./scrollbar.css"; //styling the scrollar

function Footer() {
  const time = new Date().getFullYear();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <footer id="footer" class="footer">
        <div class="container">
          <div class="row gy-4">
            <div class="col-lg-5 col-md-12 footer-info">
              <a href="index.html" class="logo d-flex align-items-center">
                <HashLink to={"/home-page#home-page"}>
                  <span>SBRC</span>
                </HashLink>
              </a>
              <p>
                Students' Branding and Relations Cell is a student body under
                the aegis of the Office of Alumni Affairs & International
                Relations.
              </p>
              <div class="social-links d-flex mt-4">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/sbrc.iitkgp/"
                >
                  <i className="fa fa-instagram"></i>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/sbrciitkgp"
                >
                  <i className="fa fa-facebook-square"></i>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/company/brandingandrelationscell/"
                >
                  <i className="fa fa-linkedin-square"></i>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.youtube.com/@sbrciitkgp"
                >
                  <i className="fa fa-youtube-square"></i>
                </a>
              </div>
            </div>

            <div class="col-lg-2 col-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <a href="">
                    <HashLink
                      className="nav-link scrollto active home-page"
                      style={{ width: "auto" }}
                      to={"/home-page#home-page"}
                    >
                      Home
                    </HashLink>
                  </a>
                </li>
                <li>
                  <a href="">
                    <HashLink
                      className="nav-link scrollto about-page"
                      to={"/home-page#about-page"}
                    >
                      About
                    </HashLink>
                  </a>
                </li>
                <li>
                  <a href="">
                    <HashLink
                      className="nav-link scrollto what-we-do"
                      to={"/home-page#what-we-do"}
                    >
                      What We Do
                    </HashLink>
                  </a>
                </li>
                <li>
                  <a
                    onClick={scrollToTop}
                    className="nav-link scrollto team"
                    href="#/team"
                  >
                    Team
                  </a>
                </li>
                <li>
                  <a href="">
                    <HashLink
                      className="nav-link scrollto gallery"
                      to={"/home-page#gallery"}
                    >
                      Gallery
                    </HashLink>
                  </a>
                </li>
                <li>
                  <a href="">
                    <HashLink
                      className="nav-link scrollto contact-us-page"
                      to={"/home-page#contact-us-page"}
                    >
                      Contact
                    </HashLink>
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-lg-2 col-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <a href="https://yip.iitkgp.ac.in/">
                    Young Innovators Program
                  </a>
                </li>
                <li>
                  <a href="#">UG Achievers Directory</a>
                </li>
                <li>
                  <a href="#">Spotlight</a>
                </li>
                <li>
                  <a href="#">KGP Directory</a>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
              <h4>Contact Us</h4>
              <p>
                Students' Branding and Relations Cell <br />
                Office of Alumni Affairs & International Relations
                <br />
                Indian Institute of Technology, Kharagpur Pin-721302
                <br /> West Bengal, India
                <br />
                <br />
              </p>
            </div>
          </div>
        </div>

        <div class="container mt-4">
          <div class="copyright">
            Copyright &copy; {time}. All Rights Reserved{" "}
            <strong>
              <span>| Students' Branding and Relations Cell</span>
            </strong>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
