import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiDownload } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__bg" aria-hidden="true">
        <svg className="hero__network" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
          <g stroke="currentColor" strokeWidth="1" opacity="0.4">
            <line x1="60" y1="80" x2="220" y2="160" />
            <line x1="220" y1="160" x2="180" y2="320" />
            <line x1="220" y1="160" x2="400" y2="120" />
            <line x1="400" y1="120" x2="560" y2="220" />
            <line x1="560" y1="220" x2="720" y2="140" />
            <line x1="180" y1="320" x2="360" y2="380" />
            <line x1="360" y1="380" x2="560" y2="220" />
            <line x1="360" y1="380" x2="500" y2="500" />
            <line x1="560" y1="220" x2="680" y2="400" />
          </g>
          <g fill="currentColor">
            <circle cx="60" cy="80" r="4" />
            <circle cx="220" cy="160" r="5" />
            <circle cx="180" cy="320" r="4" />
            <circle cx="400" cy="120" r="4" />
            <circle cx="560" cy="220" r="5" />
            <circle cx="720" cy="140" r="4" />
            <circle cx="360" cy="380" r="4" />
            <circle cx="500" cy="500" r="4" />
            <circle cx="680" cy="400" r="4" />
          </g>
        </svg>
      </div>

      <div className="container hero__inner">
        <div className="hero__text">
          <span className="section-eyebrow">Hello, I'm</span>
          <h1 className="hero__name">{personalInfo.name}</h1>
          <p className="hero__title">{personalInfo.title}</p>
          <p className="hero__intro">{personalInfo.tagline}</p>

          <div className="hero__cta">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href={personalInfo.resumeFile} download className="btn btn-outline">
              <FiDownload size={16} /> Download Resume
            </a>
          </div>

          <div className="hero__socials">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
              <FiGithub size={20} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
              <FiLinkedin size={20} />
            </a>
            <a href={`mailto:${personalInfo.email}`} aria-label="Send email">
              <FiMail size={20} />
            </a>
          </div>
        </div>

        <div className="hero__portrait">
          <div className="hero__portrait-frame">
            <img src={personalInfo.profileImage} alt={`Portrait of ${personalInfo.name}`} />
          </div>
        </div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll to About section">
        <FiArrowDown size={18} />
      </a>
    </section>
  );
}
