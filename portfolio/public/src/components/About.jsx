import { about, education } from '../data/portfolioData';
import './About.css';

export default function About() {
  const current = education[0];

  return (
    <section id="about" className="section about">
      <div className="container">
        <span className="section-eyebrow">Get to know me</span>
        <h2 className="section-title fade-up">About Me</h2>

        <div className="about__grid">
          <p className="about__bio fade-up">{about.bio}</p>

          <div className="about__facts fade-up">
            <div className="about__fact">
              <span className="about__fact-label">Currently studying</span>
              <span className="about__fact-value">{current.degree}</span>
            </div>
            <div className="about__fact">
              <span className="about__fact-label">University</span>
              <span className="about__fact-value">{current.institution}</span>
            </div>
            <div className="about__fact">
              <span className="about__fact-label">CGPA</span>
              <span className="about__fact-value">{current.score}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
