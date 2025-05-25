// Events.js
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const sampleEvents = [
  {
    id: 1,
    title: 'Live Jazz Night',
    date: '2025-06-07',
    time: '7:00 PM',
    description: 'Enjoy a night of smooth jazz with our special menu.',
    category: 'Music'
  },
  {
    id: 2,
    title: 'Wine Tasting',
    date: '2025-06-10',
    time: '6:30 PM',
    description: 'Savor the best local wines paired with gourmet bites.',
    category: 'Tasting'
  },
  {
    id: 3,
    title: 'Cooking Workshop',
    date: '2025-06-14',
    time: '3:00 PM',
    description: 'Learn the art of Italian cooking from our head chef.',
    category: 'Workshop'
  }
];

const Events = () => {
  const [filter, setFilter] = useState('All');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '' });

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const filteredEvents = sampleEvents.filter(
    (event) => filter === 'All' || event.category === filter
  );

  const handleRegister = () => {
    alert(`Registered ${formData.name} for ${selectedEvent.title}`);
    setSelectedEvent(null);
    setFormData({ name: '', email: '' });
  };

  return (
    <section className="events-section">
      <div className="events-hero">
        <div className="hero-overlay">
          <h1>Celebrate Moments With Us</h1>
          <p>From live performances to gourmet nights, find your vibe here.</p>
        </div>
      </div>

      <h2 className="events-heading">Upcoming Events</h2>
      <p className="events-note"><mark>Click on an event to view more details and register.</mark></p>

      <div className="filter-buttons">
        {['All', 'Music', 'Tasting', 'Workshop'].map((cat) => (
          <button
            key={cat}
            className={filter === cat ? 'active' : ''}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="event-cards">
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            className="event-card"
            data-aos="fade-up"
            onClick={() => setSelectedEvent(event)}
          >
            <h3>{event.title}</h3>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Time:</strong> {event.time}</p>
            <p>{event.description}</p>
          </div>
        ))}
      </div>

      {selectedEvent && (
        <div className="event-modal">
          <div className="modal-content">
            <h2>{selectedEvent.title}</h2>
            <p><strong>Date:</strong> {selectedEvent.date}</p>
            <p><strong>Time:</strong> {selectedEvent.time}</p>
            <p>{selectedEvent.description}</p>

            <form className="register-form">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </form>

            <div className="modal-buttons">
              <button onClick={handleRegister} className="register-btn">Register</button>
              <button onClick={() => setSelectedEvent(null)} className="cancel-btn">Cancel</button>
            </div>
          </div>
        </div>
      )}

      <div className="event-testimonials" data-aos="fade-up">
        <h3>What Our Guests Say</h3>
        <blockquote>"The live music nights are truly magical!" — Emily</blockquote>
        <blockquote>"I loved the wine tasting experience!" — John</blockquote>
      </div>
    </section>
  );
};

export default Events;
