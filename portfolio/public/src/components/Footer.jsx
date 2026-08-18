import { FiGithub, FiLinkedin, FiMail, FiCode } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© {year} {personalInfo.name}. Built with React & Vite.</p>
        <div className="footer__links">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FiGithub size={18} />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FiLinkedin size={18} />
          </a>
          <a href={personalInfo.leetcode} target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
            <FiCode size={18} />
          </a>
          <a href={`mailto:${personalInfo.email}`} aria-label="Email">
            <FiMail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
