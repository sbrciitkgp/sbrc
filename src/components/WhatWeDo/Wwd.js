import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./Wwd.css";
import img2 from "./thumbnails/YIP.png";
import img3 from "./thumbnails/SPOT.png";
import img1 from "./thumbnails/UGAD.png";
import img4 from "./thumbnails/kgpdirectory.png";

function WWD() {
  const ref3 = useRef(null);
  const isInView3 = useInView(ref3, { once: true });
  return (
    <section id="what-we-do">
      <div
        ref={ref3}
        className="container-fluid  row col-md-12 text-center wwd-wrap"
      >
        <motion.h1
          style={{
            transform: isInView3 ? "none" : "translateY(+50px)",
            opacity: isInView3 ? 1 : 0,
            transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
          }}
          className="wwd-title"
        >
          WHAT WE DO
        </motion.h1>
        <div class="container mx-0 col-lg-3 col-md-2 col-xs-3 my-3 " id="con1">
          <div class="card">
            <div class="front text-center">
              <div className="profile_img">
                <img
                  className="mx-0"
                  src={img1}
                  alt="img1"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="text">UG Achievers Directory</div>
            </div>
            <div class="back text-center">
              <p>
                The Students' Branding and Relations Cell's UG Achievers
                Directory (UGAD) initiative aims to highlight IIT Kharagpur
                students who have accomplished notable achievements during a
                particular academic year. The official IIT Kharagpur website
                features UGAD.
              </p>
            </div>
          </div>
        </div>
        <div class="container mx-0 col-lg-3 col-md-2 col-xs-3 my-3" id="con2">
          <div class="card">
            <div class="front text-center">
              <div className="profile_img">
                {" "}
                <img src={img2} alt="img1" style={{ objectFit: "contain" }} />
              </div>
              <div className="text">Young Innovators Program</div>
            </div>
            <div class="back text-center">
              <p>
                Young Innovators Program is a platform to foster young minds
                with scientific enthusiasm and a credo to solve the problems
                facing the globe. In a two day visit to IIT Kharagpur, the
                students will get a chance to explore the scientific environment
                within and an opportunity to present their projects in front of
                distinguished researches and guests.
              </p>
              <div>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://yip.iitkgp.ac.in/"
                  className="yip-redirect d-flex align-items-center"
                  previewlistener="true"
                >
                  <span>YIP</span>
                  <i
                    class="fa-solid fa-arrow-up-right-from-square"
                    aria-hidden="true"
                  ></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="container mx-0 col-lg-3 col-md-2 col-xs-3 my-3" id="con3">
          <div class="card">
            <div class="front text-center col">
              <div className="profile_img">
                {" "}
                <img src={img3} alt="img1" style={{ objectFit: "contain" }} />
              </div>
              <div className="text my-5">Spotlight</div>
            </div>
            <div class="back text-center">
              <p>
                The Students' Branding and Relations Cell has launched a
                ‘Spotlight’ initiative for IIT Kharagpur students, allowing
                students to highlight their accomplishments and awards. In the
                Spotlight series, the achievements of students in the fields of
                sports, academics, technology, sociocultural activities, and
                work in the field of public welfare are highlighted.
              </p>
            </div>
          </div>
        </div>
        <div class="container mx-0 col-lg-3 col-md-2 col-xs-3 my-3" id="con4">
          <div class="card">
            <div class="front text-center col">
              <div className="profile_img">
                <img src={img4} alt="img1" style={{ objectFit: "contain" }} />
              </div>
              <div className="text my-5">KGP Directory</div>
            </div>
            <div class="back text-center">
              <p>
                KGP Directory is an initiative of the Students' Branding and
                Relations Cell, which comprises everything about IIT Kharagpur
                in a highly structured format. It contains all the essential
                information a fresher would require about IIT Kharagpur, all
                under one roof.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WWD;
