import React from "react";
function ContactForm() {
  // function submitForm(e) {
  //   e.preventDefault(); // Prevents the default form submission behavior

  //   const formData = new FormData(e.target);
  //   formData.forEach((value, key) => {
  //     console.log(`${key}: ${value}`);
  //   });
  // }
  return (
    <div className="contact-form">
      {/* <form onSubmit={(e) => submitForm(e)}>
        <h3 className="title-form">Contact us</h3>
        <div className="input-container">
          <i className="fa-solid fa-user"></i>

          <input
            type="text"
            name="name"
            className="input"
            placeholder="Full Name"
          />
        </div>
        <div className="input-container">
          <i className="fa-solid fa-envelope"></i>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
          />
        </div>
        <div className="input-container">
          <i className="fa-solid fa-message"></i>
          <input
            type="text"
            name="name"
            className="input"
            placeholder="Subject"
          />
        </div>
        <div className="input-container textarea">
          <i className="fa-solid fa-pen"></i>

          <textarea
            name="message"
            className="input"
            placeholder="Message"
          ></textarea>
        </div>
        <input type="submit" value="Submit" className="btn" />
      </form> */}
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdeBkWgQHTxkGbmZpjuhmvT-iRUyypMwDbm6OEr_LKxH1j1CQ/viewform?embedded=true"
        width="640"
        height="660"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      ></iframe>
    </div>
  );
}

export default ContactForm;
