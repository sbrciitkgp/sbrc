import React from "react";
import Hero from "../../Hero/hero";
import Navbar from "../../Navbar/Navbar";
import AboutUs from "../../About/AboutUs";
import WhatWeDo from "../../WhatWeDo/Wwd";
import Contact from "../../Contact/ContactUs";
import Preloader from "../../Preloader/Preloader";
import Gallery from "../../Gallery/gallery";
import Footer from "../../PageFooter/Footer";
import ScrollTop from "../../ScrollTop/scrolltop";
function View() {
  return (
    <div id="view">
      <ScrollTop />
      <Preloader />
      <Navbar />
      <Hero />
      <AboutUs />
      <WhatWeDo />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default View;
