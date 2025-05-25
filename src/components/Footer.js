import React from "react";

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="footer-container">
                {/* Quick Links */}
                <div className="footer-section footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#menu">Menu</a></li>
                        <li><a href="#reservation">Reservation</a></li>
                        <li><a href="#events">Events</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div className="footer-section footer-newsletter">
                    <h3>Subscribe to our Newsletter</h3>
                    <p>Get the latest updates and offers right in your inbox.</p>
                    <form
                        className="newsletter-form"
                        onSubmit={(e) => {
                            e.preventDefault();
                            alert("Thanks for subscribing!");
                        }}
                    >
                        <input type="email" name="email" placeholder="Enter your email" required />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>

                {/* Contact & Social */}
                <div className="footer-section footer-contact">
                    <h3>Contact Us</h3>
                    <p>✉️ contact@restaurant.com</p>
                    <p>🕒 Monday – Sunday 8:00AM – 10:00PM</p>
                    <p>📞 +91 98765 43210</p>
                    <div className="social-icons">
                        <a
                            href="https://facebook.com/yourpage"
                            aria-label="Facebook"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src="https://cdn-icons-png.flaticon.com/24/733/733547.png" alt="Facebook" />
                        </a>
                        <a
                            href="https://twitter.com/yourpage"
                            aria-label="Twitter"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src="https://cdn-icons-png.flaticon.com/24/733/733579.png" alt="Twitter" />
                        </a>
                        <a
                            href="https://instagram.com/yourpage"
                            aria-label="Instagram"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src="https://cdn-icons-png.flaticon.com/24/2111/2111463.png" alt="Instagram" />
                        </a>
                        <a
                            href="https://linkedin.com/in/yourprofile"
                            aria-label="LinkedIn"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src="https://cdn-icons-png.flaticon.com/24/733/733561.png" alt="LinkedIn" />
                        </a>
                    </div>

                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2025 Flavoury. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
