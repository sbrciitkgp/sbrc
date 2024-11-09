import React from "react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

function ContactInfo() {
  const ref4 = useRef(null);
  const isInView4 = useInView(ref4, { once: true });
  return (
    <div ref={ref4} className="contact-info">
      <p className="title-info">
        Where to find us
        <a
          href="https://goo.gl/maps/a7k37ZPQLCE1Sa6e9"
          target="_blank"
          rel="noreferrer"
        >
          <motion.i
            className="fa-solid fa-location-dot"
            style={{
              transform: isInView4 ? "none" : "translateY(-50px)",
              opacity: isInView4 ? 1 : 0,
              transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 1.6s",
            }}
            whileHover={{ scale: 1.3 }}
          ></motion.i>
        </a>
      </p>

      <div className="info">
        <div className="information">
          <p>
            Students' Branding and Relations Cell
            <br /> Office of Alumni Affairs & Branding
            <br />
            Indian Institute of Technology, Kharagpur Pin-721302
            <br /> West Bengal, India
            <br />
          </p>
        </div>
        <p className="title-info">Email Us</p>
        <div className="information">
          <p>Email : barc@iitkgp.ac.in</p>
          <button
            style={{
              transform: isInView4 ? "none" : "translateY(-50px)",
              opacity: isInView4 ? 1 : 0,
              transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 2s",
            }}
            className="email-clamp"
          >
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=barc@iitkgp.ac.in"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-envelope"></i>
            </a>
          </button>
        </div>
        <p className="title-info">Call Us</p>
        <p className="text">Mr. Aishwary Patel</p>
        <div className="information">
          <p>
            <a style={{ color: "inherit" }} href="tel:+91-9630271203">
              +91-9630271203
            </a>
            <br />
            aishwarypatel2004@gmail.com
          </p>
        </div>
        <p className="text">Ms. Bhumi Tayal</p>
        <div className="information">
          <p>
            <a style={{ color: "inherit" }} href="tel:+91-7684067297">
              +91-7684067297
            </a>
            <br />
            tayalbhumi8@gmail.com
          </p>
        </div>
      </div>

      <div className="social-media">
        <p>Connect with us :</p>
        <div className="social-icons">
          <motion.a
            style={{
              transform: isInView4 ? "none" : "translateY(+50px)",
              opacity: isInView4 ? 1 : 0,
              transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s",
            }}
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/barc.iitkgp/"
          >
            <motion.i
              whileHover={{ scale: 1.3 }}
              className="fa fa-instagram"
              style={{ fontSize: "20px", color: "white" }}
            ></motion.i>
          </motion.a>
          <motion.a
            style={{
              transform: isInView4 ? "none" : "translateY(+50px)",
              opacity: isInView4 ? 1 : 0,
              transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s",
            }}
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/barciitkgp"
          >
            <motion.i
              whileHover={{ scale: 1.3 }}
              className="fa fa-facebook-square"
              style={{ fontSize: "20px", color: "white" }}
            ></motion.i>
          </motion.a>
          <motion.a
            style={{
              transform: isInView4 ? "none" : "translateY(+50px)",
              opacity: isInView4 ? 1 : 0,
              transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s",
            }}
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/company/brandingandrelationscell/"
          >
            <motion.i
              whileHover={{ scale: 1.3 }}
              className="fa fa-linkedin-square"
              style={{ fontSize: "20px", color: "white" }}
            ></motion.i>
          </motion.a>
          <motion.a
            style={{
              transform: isInView4 ? "none" : "translateY(+50px)",
              opacity: isInView4 ? 1 : 0,
              transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s",
            }}
            target="_blank"
            rel="noreferrer"
            href="https://www.youtube.com/@barciitkgp"
          >
            <motion.i
              whileHover={{ scale: 1.3 }}
              className="fa fa-youtube-square"
              style={{ fontSize: "20px", color: "white" }}
            ></motion.i>
          </motion.a>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
