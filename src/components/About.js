import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image" data-aos="fade-right"></div>

        <div className="about-content" data-aos="fade-left">
          <h2>About Us</h2>
          <p className="about-tagline">Serving happiness since 1999</p>
          <p>
            Nestled in the heart of the city, our restaurant is known for warm ambiance, fine ingredients, and timeless flavors. From handcrafted dishes to top-class service, we ensure a memorable dining experience.
          </p>
          <div className="about-highlights">
            <div className="highlight-box" data-aos="zoom-in" data-aos-delay="200">
              <h4>🏆 Our Legacy</h4>
              <p>Over 25 years of culinary excellence and happy guests.</p>
            </div>
            <div className="highlight-box" data-aos="zoom-in" data-aos-delay="400">
              <h4>👨‍🍳 Master Chef</h4>
              <p>Led by world-renowned Chef Antonio with Michelin experience.</p>
            </div>
            <div className="highlight-box" data-aos="zoom-in" data-aos-delay="600">
              <h4>🌿 Our Philosophy</h4>
              <p>We use organic, locally sourced ingredients and sustainable practices.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
