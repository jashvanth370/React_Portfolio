import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Reveal from './Reveal';
import { EMAILJS } from '../config';

const SUCCESS_VISIBLE_MS = 4000;

export default function Contact() {
  const formRef = useRef(null);
  const timerRef = useRef(null);
  const [sent, setSent] = useState(false);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await emailjs.sendForm(EMAILJS.serviceId, EMAILJS.templateId, formRef.current, {
        publicKey: EMAILJS.publicKey,
      });
      setSent(true);
      formRef.current.reset();
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setSent(false), SUCCESS_VISIBLE_MS);
    } catch (error) {
      console.error('EmailJS error:', error);
      alert('Failed to send message. Try again.');
    }
  };

  return (
    <section className="contact" id="contact">
      <Reveal as="h2" className="section-title">
        Get In Touch
      </Reveal>

      <div className="contact-container">
        <Reveal variant="reveal-left" className="contact-form">
          <form id="contactForm" ref={formRef} onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required />
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
            <div className={`success-message${sent ? ' show' : ''}`} id="successMessage">
              Message Sent Successfully!
            </div>
          </form>
        </Reveal>

        <Reveal variant="reveal-right" className="contact-info">
          <h3>Connect With Us , Let’s Build Something Amazing</h3>
          <p>I’m open to internships, collaborations, and exciting projects.</p>
          <br />

          <div className="info-item">
            <div className="info-icon">📧</div>
            <div className="info-details">
              <h4>Email</h4>
              <p>balakirushnanjashvanth@gmail.com</p>
            </div>
          </div>
          <div className="info-item">
            <div className="info-icon">📱</div>
            <div className="info-details">
              <h4>Phone</h4>
              <p>+94 77-(94 30 824)</p>
            </div>
          </div>
          <div className="info-item">
            <div className="info-icon">📍</div>
            <div className="info-details">
              <h4>Location</h4>
              <p>Dalugama Kelaniya Gampaha, Sri Lanka</p>
            </div>
          </div>

          {/* <div className="map-container">
            <div className="map-placeholder">
              <p>Interactive Map</p>
              <p style={{ fontSize: '0.9rem', marginTop: '10px' }}>Batticaloa, Sri Lanka</p>
            </div>
            <div className="map-overlay" />
          </div> */}
        </Reveal>
      </div>
    </section>
  );
}
