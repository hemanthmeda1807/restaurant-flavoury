import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate sending logic
    console.log('Sending form data:', formData);

    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });

    // Hide message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-info" data-aos="fade-right">
          <h2>Contact Us</h2>
          <p><strong>Email:</strong> contact@restaurant.com</p>
          <p><strong>Phone:</strong> +91 7093441870</p>
          <p><strong>Address:</strong> Main Street, Food City, Huwai</p>
          <div className="map">
            <iframe
              title="Google Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!..."  // use a valid Google embed URL
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="contact-form" data-aos="fade-left">
          <h3>Send Us a Message</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
            />
            <button type="submit">Send</button>
          </form>
          {submitted && (
            <p className="confirmation-message">Thank you! We received your message and will get back to you shortly.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
