import React, { useState } from "react";
import "./Navbar.css";
import { motion } from "framer-motion";
import Img from "../../assets/images/sbrclogo.png";
import { Link, useLocation, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "animate.css";
function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === "/" || location.pathname === "/home";
  const [header, changeHeader] = useState("header fixed-top ");
  window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
      changeHeader("header fixed-top sticky header-scrolled");
    } else {
      changeHeader("header fixed-top ");
    }
  };

  const sections = document.querySelectorAll("section");
  const navLi = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    if (
      location.pathname === "/home" ||
      location.pathname === "/" ||
      location.pathname === "/home#home-page"
    ) {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute("id");
        }
      });
      navLi.forEach((a) => {
        a.classList.remove("active");
        if (a.classList.contains(current)) {
          a.classList.add("active");
        }
      });
    }
  });

  const [Nav, switchNav] = useState("navbar");
  const [Icon, switchIcon] = useState("fa-solid fa-bars mobile-nav-toggle");
  const [state, changeState] = useState(false);

  function mobNav() {
    changeState(!state);

    if (state) {
      switchNav("navbar-mobile");
      switchIcon("fa-solid fa-xmark mobile-nav-toggle");
    } else {
      switchNav("navbar");
      switchIcon("fa-solid fa-bars mobile-nav-toggle");
    }
  }
  function closeNav() {
    if (Nav === "navbar-mobile") {
      mobNav();
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <motion.div>
      <header id="header" className={header}>
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <Link
            className="logo d-flex align-items-center "
            to={"/home#home-page"}
          >
            <img
              style={{ scale: "1.1" }}
              className="logo-img"
              src={Img}
              alt=""
            />
          </Link>
          <nav id="navbar" className={Nav}>
            <div id="scrollspy1">
              <ul>
                <li
                  onClick={() => {
                    closeNav();
                    scrollToTop();
                  }}
                >
                  <HashLink
                    className={`nav-link scrollto home-page fw-semibold ${
                      isHomePage ? "active" : ""
                    }`}
                    style={{ width: "auto" }}
                    to={"/home"}
                  >
                    Home
                  </HashLink>
                </li>
                <li onClick={closeNav}>
                  <HashLink
                    className="nav-link scrollto about-page fw-semibold"
                    to={"/home#about-page"}
                  >
                    About
                  </HashLink>
                </li>
                <li>
                  <li className="position-relative fw-semibold">
                    {" "}
                    <a
                      className="dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      onMouseEnter={() => setDropdownOpen(true)}
                    >
                      What We Do
                    </a>
                    <div
                      className={`dropdown-menu ${
                        isDropdownOpen ? "show" : ""
                      } mx-2`}
                    >
                      <div
                        className="postion-absolute "
                        onMouseEnter={() => setDropdownOpen(true)}
                        onMouseLeave={() => {
                          setDropdownOpen(false);
                        }}
                      >
                        <li onClick={() => setDropdownOpen(false)}>
                          <Link to="https://yip.iitkgp.ac.in/" target="_blank">
                            YIP
                          </Link>
                        </li>
                        <li onClick={() => setDropdownOpen(false)}>
                          <Link to="/spotlight" className="scrollto spotlight">
                            Spotlight
                          </Link>
                        </li>
                        <li>
                          <Link to="/ugad">UGAD</Link>
                        </li>
                        <li onClick={() => setDropdownOpen(false)}>
                          <Link
                            to="https://drive.google.com/file/d/1xLpHLJshQ_OekVm90RRvzW69sad47gNb/view"
                            target="_blank"
                          >
                            KGP Directory
                          </Link>
                        </li>
                      </div>
                    </div>
                  </li>
                </li>
                <li onClick={closeNav}>
                  <NavLink
                    className="nav-link fw-semibold"
                    to="/spotlight"
                    activeClassName="active"
                  >
                    Spotlight{" "}
                  </NavLink>
                </li>
                <li onClick={closeNav}>
                  <NavLink
                    className="nav-link fw-semibold"
                    to="/team"
                    activeClassName="active"
                  >
                    Team{" "}
                  </NavLink>
                </li>
                <li onClick={closeNav}>
                  <HashLink
                    className="nav-link scrollto gallery fw-semibold"
                    to="/home#gallery"
                  >
                    Gallery
                  </HashLink>
                </li>
                <li onClick={closeNav}>
                  <HashLink
                    className="nav-link scrollto contact-us-page fw-semibold"
                    to="/home#contact-us-page"
                  >
                    Contact Us
                  </HashLink>
                </li>
              </ul>
            </div>
            <button
              style={{
                height: "40px",
                width: "40px",
                backgroundColor: "transparent",
                border: "none",
              }}
              onClick={mobNav}
              className={Icon}
            ></button>
          </nav>
        </div>
      </header>
    </motion.div>
  );
}

export default Navbar;
