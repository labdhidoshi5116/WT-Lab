import React, { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message submitted!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="Name" value={form.name} onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Your message" value={form.message} onChange={handleChange} required />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
