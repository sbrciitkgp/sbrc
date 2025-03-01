import React, { useState } from "react";
import "./PageNavbar.css";
import { motion } from "framer-motion";
import Img from "../../assets/images/sbrclogo.png";
import { Link } from "react-router-dom";
import "animate.css";
function PageNavbar() {
  const [header, changeHeader] = useState("header pageHead fixed-top ");
  window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
      changeHeader("header fixed-top sticky header-scrolled pageHead-scrolled");
    } else {
      changeHeader("header fixed-top pageHead");
    }
  };

  const sections = document.querySelectorAll("section");
  const navLi = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
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
  });

  const [Nav, switchNav] = useState("navbar");
  const [Icon, switchIcon] = useState("fa-solid fa-bars mobile-nav-toggle");
  const [state, changeState] = useState(false);

  function mobNav() {
    changeState(!state);
    if (state) {
      switchNav("navbar-mobile pagenav-mob");
      switchIcon("fa-solid fa-xmark mobile-nav-toggle");
    } else {
      switchNav("navbar pagenav");
      switchIcon("fa-solid fa-bars mobile-nav-toggle");
    }
  }
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  function closeNav() {
    if (Nav === "navbar-mobile") {
      mobNav();
    }
  }
  return (
    <motion.div>
      <header id="header" className={header}>
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <Link
            onClick={scrollToTop}
            className="logo d-flex align-items-center "
            to={"/home-page"}
          >
            <img
              className="logo-img"
              style={{ scale: "1.1" }}
              src={Img}
              alt=""
            />
            <span></span>
          </Link>

          <nav id="navbar" className={Nav}>
            <div id="scrollspy1">
              <ul>
                <li onClick={closeNav}>
                  <a
                    onClick={scrollToTop}
                    className="getstarted"
                    href="/home-page"
                  >
                    Home
                  </a>
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

export default PageNavbar;
