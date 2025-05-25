import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import './App.css';
import NavbarA from './components/NavbarA';
import NavbarB from './components/NavbarB';
import Home from './components/Home';
import Menu from './components/Menu';
import Reservation from './components/Reservation';
import About from './components/About';
import Contact from './components/Contact';
import Events from './components/Events';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  const [showAltNavbar, setShowAltNavbar] = useState(false);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,  // animation duration
      once: true       // whether animation should happen only once
    });
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setShowAltNavbar(window.scrollY > window.innerHeight * 0.8);
      AOS.refresh(); // Optional: refresh AOS on scroll (especially useful if content height changes)
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="App">
      {showAltNavbar ? <NavbarB /> : <NavbarA />}
      <div id="home"><Home /></div>
      <div><Menu /></div>
      <div id="reservation"><Reservation /></div>
      <div id="about"><About /></div>
      <div id="contact"><Contact /></div>
      <div id="events"><Events /></div>
      <div id="gallery"><Gallery /></div>
      <Footer /> 
    </div>
  );
}

export default App;
