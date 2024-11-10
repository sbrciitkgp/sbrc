import React from "react";
import { useRef } from "react";
import YIPstats from "./YIPStats";
import "./styles/AboutDesktop.css";
import "./styles/AboutMobile.css";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

function AboutUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
 
  return (
    <section id="about-page">
    <div id="about" className="about-us-outer">
      <motion.div>
        <div className=" about-grid">
          <div className="yip-stats-container" >
            <YIPstats />
          </div>
          <motion.div className="about-us-container"
          ref={ref}
           style={{
          transform: isInView ? "none" : "translateY(+50px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s"
        }}>
            <div className="about-us">
              <motion.h1>
                ABOUT
              </motion.h1>
            </div>

            <div className=" about-us-text">
              <motion.p>
                Students' Branding and Relations cell is a student body under the aegis of
                the Office of Alumni Affairs & International Relations. It aims towards
                positioning IIT Kharagpur as a global leader in the field of
                science and technology.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
    </section>
  );
}
export default AboutUs;
