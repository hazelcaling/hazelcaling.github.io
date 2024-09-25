import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";  // Icons for LinkedIn and GitHub
import "./Contact.css"; // Add custom styling here

function ContactPage() {
  return (
    <div className="contact-container" id="contact">
      <h1>Contact Me</h1>
      <p>Feel free to reach out using the form below, or connect with me on <a href="https://www.linkedin.com/in/hazel-c-37255a59/" target="_blank" rel="noopener noreferrer">LinkedIn!</a></p>

      <form className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Your Name" required maxLength={20} />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Your Email" required maxLength={50} />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" placeholder="Your Message" required maxLength={300}></textarea>

        <button type="submit">Send Message</button>
      </form>

      <div style={{ marginTop: '50px' }} className="iframe-container">
                <h3>Find Me Here:</h3>
                <iframe
                    title="San Mateo, CA Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152136.932622252!2d-123.10327041637807!3d37.55304498369889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7c4c5f91d04b%3A0xb8b7d6d4bcbf805e!2sSan%20Mateo%2C%20CA!5e0!3m2!1sen!2sus!4v1635932709166!5m2!1sen!2sus"
                    width="600"
                    height="450"
                    style={{ border: 0, borderRadius: '10px' }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>

    </div>
  );
}

export default ContactPage;
