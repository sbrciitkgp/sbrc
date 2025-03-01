import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./Wwd.css";
import img1 from "./thumbnails/UGAD.png";
import img2 from "./thumbnails/YIP.png";
import img3 from "./thumbnails/SPOT.png";
import img4 from "./thumbnails/kgpdirectory.png";

const items = [
  {
    title: "Young Innovators' Program",
    img: img2,
    description:
      "Young Innovators' Program is a platform to foster young minds with scientific enthusiasm and a credo to solve the problems facing the globe. In a two-day visit to IIT Kharagpur, students will get a chance to explore the scientific environment and present their projects in front of distinguished researchers and guests. YIP not only promotes scientific thinking but also nurtures innovation and problem-solving skills, aligning to the national vision to become Vishwaguru.",
    link: "https://yip.iitkgp.ac.in/",
    linkText: "Visit YIP",
  },
  {
    title: "Spotlight",
    img: img3,
    description:
      "The Students' Branding and Relations Cell has launched a ‘Spotlight’ initiative for IIT Kharagpur students, allowing them to highlight their accomplishments in fields such as sports, academics, technology, and welfare.",
    link: "/spotlight",
    linkText: "Visit Spotlight",
  },
  {
    title: "UG Achievers Directory",
    img: img1,
    description:
      "The Students' Branding and Relations Cell's UG Achievers Directory (UGAD) initiative aims to highlight IIT Kharagpur students who have accomplished notable achievements during a particular academic year. The official IIT Kharagpur website features UGAD.",
  },
  {
    title: "KGP Directory",
    img: img4,
    description:
      "KGP Directory is an initiative of the Students' Branding and Relations Cell, comprising everything about IIT Kharagpur in a highly structured format. It contains all essential information a fresher would require, all under one roof.",
    link: "https://drive.google.com/file/d/1xLpHLJshQ_OekVm90RRvzW69sad47gNb/view",
    linkText: "Visit",
  },
];

function WWD() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="what-we-do">
      <div ref={ref} className="wwd-container">
        <motion.h3
          className="wwd-title"
          style={{
            transform: isInView ? "none" : "translateY(+50px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1s ease-in-out 0.4s",
          }}
        >
          What We Do
        </motion.h3>
        <div className="wwd-column">
          {items.map((item, index) => (
            <div key={index} className="wwd-card">
              <img src={item.img} alt={item.title} className="wwd-image" />
              <h3 className="wwd-text">{item.title}</h3>
              <p className="wwd-description">{item.description}</p>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="wwd-link"
                >
                  {item.linkText}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WWD;
