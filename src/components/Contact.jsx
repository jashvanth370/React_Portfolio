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
    const formData = new FormData(formRef.current);
    const name = formData.get('name') || '';
    const email = formData.get('email') || '';
    const subject = formData.get('subject') || '';
    const message = formData.get('message') || '';

    // Supplies all aliases so {{message}}, {{request}}, {{name}}, {{email}} always populate
    const templateParams = {
      name,
      user_name: name,
      from_name: name,
      email,
      user_email: email,
      from_email: email,
      reply_to: email,
      subject,
      title: subject,
      message,
      request: message,
    };

    try {
      await emailjs.send(EMAILJS.serviceId, EMAILJS.templateId, templateParams, {
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
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="your@email.com" required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" placeholder="Project Inquiry / Message Subject" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="3" placeholder="Tell me about your project..." required />
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
          <h3>Let’s Work Together</h3>
          <p>
            Have a project in mind, an exciting role to discuss, or want to collaborate? Feel free to reach out directly.
          </p>

          <div className="info-item">
            <div className="info-icon">📧</div>
            <div className="info-details">
              <h4>Email</h4>
              <a href="mailto:balakirushnanjashvanth@gmail.com">balakirushnanjashvanth@gmail.com</a>
            </div>
          </div>
          <div className="info-item">
            <div className="info-icon">📱</div>
            <div className="info-details">
              <h4>Phone</h4>
              <a href="tel:+94779430824">+94 77-(94 30 824)</a>
            </div>
          </div>
          <div className="info-item">
            <div className="info-icon">📍</div>
            <div className="info-details">
              <h4>Location</h4>
              <p>Dalugama Kelaniya, Gampaha, Sri Lanka</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
