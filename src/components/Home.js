import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const fullText = "Crafted with Passion, Served with Love";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index <= fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, index));
        setIndex(index + 1);
      }, 150); // typing speed, adjust for smoothness

      return () => clearTimeout(timeout);
    } else {
      // Pause before restart
      const timeout = setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <section className="hero">
      <div className="hero-content" data-aos="fade-up">
        <h1 className="hero-title">Flavoury</h1>
        <p className="hero-subtitle">{displayedText}</p>
        <button className="hero-button" onClick={scrollToMenu} data-aos="zoom-in">Explore Menu</button>

        <div className="hero-features" data-aos="fade-up">
          <div className="feature">
            <i className="fas fa-utensils"></i>
            <p>Fine Dining</p>
          </div>
          <div className="feature">
            <i className="fas fa-leaf"></i>
            <p>Organic Ingredients</p>
          </div>
          <div className="feature">
            <i className="fas fa-bolt"></i>
            <p>Fast Service</p>
          </div>
        </div>
      </div>
      <div className="scroll-arrow" onClick={scrollToMenu}>
        <i className="fas fa-angle-down"></i>
      </div>
    </section>
  );
};

export default Home;
