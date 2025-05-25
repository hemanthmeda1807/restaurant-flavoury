// src/components/Reservation.js
import React, { useState } from 'react';

const Reservation = () => {
  const [form, setForm] = useState({ name: '', date: '', time: '', guests: 1 });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    alert(`Reservation for ${form.name} on ${form.date} at ${form.time}`);
    setForm({ name: '', date: '', time: '', guests: 1 });
  };

  return (
    <section className="reservation-section" id="reservation" data-aos="fade-up">
      <div className="reservation-container">
        <h2 className="reservation-title">Book a Table</h2>
        <form className="reservation-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" value={form.name} required onChange={handleChange} data-aos="fade-right"/>
          <input type="date" name="date" value={form.date} required onChange={handleChange} data-aos="fade-left" />
          <input type="time" name="time" value={form.time} required onChange={handleChange} data-aos="fade-right"/>
          <input type="number" name="guests" min="1" max="20" value={form.guests} onChange={handleChange} required data-aos="fade-left" />
          <button type="submit" data-aos="fade-up">Reserve Now</button>
        </form>
      </div>
    </section>
  );
};

export default Reservation;
