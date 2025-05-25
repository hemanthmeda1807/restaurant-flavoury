import React, { useState, useRef, useEffect } from 'react';

import interior from '../assets/interior.jpg';
import biryani from '../assets/biriyani.jpeg';
import lava from '../assets/lava.jpeg';
import pasta from '../assets/pasta.jpeg';
import salmon from '../assets/salmon.jpeg';
import tandoori from '../assets/tandoori.jpeg';
import burger from '../assets/burger.jpeg';
import wings from '../assets/wings.jpeg';
import fichi from '../assets/f&c.jpeg';
import tikka from '../assets/tikka.jpeg';

const images = [
  { src: interior, alt: 'Cozy Interior' },
  { src: biryani, alt: 'Biryani Dish' },
  { src: lava, alt: 'Lava Cake' },
  { src: pasta, alt: 'Creamy Pasta' },
  { src: salmon, alt: 'Grilled Salmon' },
  { src: tandoori, alt: 'Tandoori Chicken' },
  { src: burger, alt: 'Cheeseburger' },
  { src: wings, alt: 'Spicy Chicken wings' },
  { src: fichi, alt: 'Fish and Chips' },
  { src: tikka, alt: 'Paneer Tikka' },
];

const Gallery = () => {
  const [selected, setSelected] = useState(null);
  const lightboxRef = useRef(null);

  const closeLightbox = () => setSelected(null);

  const toggleFullscreen = () => {
    const elem = lightboxRef.current;
    if (!document.fullscreenElement) {
      elem.requestFullscreen().catch((err) => {
        alert(`Error entering fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section className="gallery-section">
      <h2 className="gallery-title">Our Gallery</h2>
      <p className="gallery-subtitle">Check out our cozy interior and delicious dishes</p>

      <div className="gallery-grid">
        {images.map((img, idx) => (
          <div
            className="gallery-item"
            data-aos="zoom-in"
            key={idx}
            onClick={() => setSelected(img)}
          >
            <img src={img.src} alt={img.alt} loading="lazy" />
          </div>
        ))}
      </div>

      {selected && (
        <div className="lightbox open" ref={lightboxRef} onClick={closeLightbox}>
          <img src={selected.src} alt={selected.alt} />
          <span className="close-btn" onClick={closeLightbox}>&times;</span>
          <button className="fullscreen-btn" onClick={(e) => { e.stopPropagation(); toggleFullscreen(); }}>
            ⛶
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
