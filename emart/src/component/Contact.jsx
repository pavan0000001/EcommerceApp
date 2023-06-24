import React from "react";
import "./Contact.css"; // Import the CSS file for styling

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>Have a question or feedback? We'd love to hear from you. Get in touch with us using the contact information below or fill out the contact form.</p>

      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>
          Email: mr.n.pavansai@gmail.com<br />
          Phone: 6302721790<br />
          Address: oldCity, Hyderabad, Telangana, India
        </p>
      </div>

      <div className="contact-form">
        <h2>Contact Form</h2>
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <br />
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <br />
          <label>
            Message:
            <textarea name="message" rows="4" />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

