import React, { useState } from "react";
import Navbar from "../components/NavBar";
import "../assets/css/Contact.css";
import contact from "..//assets/images/contact.jpg";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can add logic here to handle form submission, such as sending data to a server

    // For now, let's just display the submitted data in the console
    console.log(formData);
  };

  return (
    <div className="Contact">
      <Navbar />
      <br />
      <h1>Contact us!</h1>
      <div className="con">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Your Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Submit</button>
        </form>
        
        </div>
        <div className="co">
        <img src={contact} style={{maxWidth:"15.8cm",marginTop:"1.2cm",maxHeight:"15cm"}}/>
        </div>
    </div>
  );
}

export default Contact;
