import React from 'react';
import './ContactUs.css'; // Adding a CSS file for styling

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact us</h2>
      <p className="contact-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        laoreet ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        laoreet ipsum dolor sit amet.
      </p>
      <form className="contact-form">
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Enter your name" />
        </div>
        <div className="input-group">
          <label htmlFor="phone">Phone</label>
          <input type="text" id="phone" placeholder="Enter your phone number" />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
