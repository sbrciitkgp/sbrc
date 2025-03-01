import videoBg from "../../assets/videos/BGV3.mp4";
import { motion } from "framer-motion";
import Img from "../../assets/images/Signature.jpg";
import "./hero.css";
import { HashLink } from "react-router-hash-link";
import React, { useEffect } from "react";
import { Link } from "react-router-dom"; 

function Hero() {
  const titleVariants = {
    hidden: { opacity: 0, scale: 1 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 2, delay: 1, ease: "easeInOut" },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0.2, scale: 1 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 2, delay: 1, ease: "easeInOut" },
    },
  };

  useEffect(() => {
    const parallaxBg = document.querySelector(".title");
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      parallaxBg.style.transform = `translateY(-${scrollY * 0.36}px)`;
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <section id="home-page">
      <div id="home" className="home">
        <video id="myVideo" preload="auto" src={videoBg} autoPlay muted />
        <motion.div
          className="overlay"
          variants={overlayVariants}
          initial="hidden"
          animate="show"
        ></motion.div>
        <motion.div
          className="title"
          variants={titleVariants}
          initial="hidden"
          animate="show"
        >
          <div className="wrap-title">
            <div>
              <img className="title-image" src={Img} alt="SBRC" />
            </div>
            <div>
              <h1>STUDENTS' BRANDING AND RELATIONS CELL, IIT KHARAGPUR</h1>
            </div>
          </div>

          <motion.div className="buttons-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
            <a href="https://yip.iitkgp.ac.in/" className="visit-btn" target="_blank" rel="noopener noreferrer">
            Visit YIP
            </a>

            <Link to="/spotlight" className="visit-btn">
              Visit Spotlight
            </Link>
          </motion.div>

        </motion.div>

        <motion.a initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 6 }} href="">
          <HashLink to="#about-page">
            <svg className="arrows">
              <path className="a1" d="M0 0 L30 32 L60 0"></path>
              <path className="a2" d="M0 20 L30 52 L60 20"></path>
              <path className="a3" d="M0 40 L30 72 L60 40"></path>
            </svg>
          </HashLink>
        </motion.a>
      </div>
    </section>
  );
}

export default Hero;
