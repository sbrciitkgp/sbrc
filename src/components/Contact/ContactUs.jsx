import React from "react";
import "./Contact.css";
import ContactForm from "./ContactForm";

import ContactInfo from "./ContactInfo";


function ContactUs() {
  

  return (
    <section id="contact-us-page">
    <div id="contact" className="contact-page"  >
      <div className="form" >
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
    </section>
  );
}
export default ContactUs;
