import { useState } from 'react';
import { FiMail, FiGithub, FiLinkedin, FiSend, FiCode } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';
import './Contact.css';

const initialForm = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // NOTE: This form is not connected to a backend or email service yet.
    // See the comment block below the component for how to wire it up
    // (e.g. Formspree, EmailJS, or your own API endpoint).
    setStatus('not-configured');
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <span className="section-eyebrow">Let's talk</span>
        <h2 className="section-title fade-up">Contact</h2>

        <div className="contact__grid">
          <div className="contact__info fade-up">
            <p className="contact__desc">
              Have an opportunity, a question, or just want to connect? Reach out through the form or directly via
              the links below.
            </p>

            <div className="contact__links">
              <a href={`mailto:${personalInfo.email}`}>
                <FiMail size={18} /> {personalInfo.email}
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                <FiGithub size={18} /> GitHub
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                <FiLinkedin size={18} /> LinkedIn
              </a>
            </div>
          </div>

          <form className="contact__form card fade-up" onSubmit={handleSubmit}>
            <div className="contact__field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} />
            </div>

            <div className="contact__field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} />
            </div>

            <div className="contact__field">
              <label htmlFor="subject">Subject</label>
              <input id="subject" name="subject" type="text" required value={form.subject} onChange={handleChange} />
            </div>

            <div className="contact__field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required value={form.message} onChange={handleChange} />
            </div>

            <button type="submit" className="btn btn-primary">
              <FiSend size={16} /> Send Message
            </button>

            {status === 'not-configured' && (
              <p className="contact__notice">
                <FiCode size={14} /> This form isn't connected to an email service yet — see README.md for setup
                instructions (Formspree / EmailJS).
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
