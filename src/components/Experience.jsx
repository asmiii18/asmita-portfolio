import { experience } from '../data/portfolioData';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <span className="section-eyebrow">Where I've worked</span>
        <h2 className="section-title fade-up">Internships / Experience</h2>

        <div className="timeline">
          {experience.map((item, index) => (
            <div className="timeline__item fade-up" key={item.role + index}>
              <div className="timeline__marker" />
              <div className="timeline__content card">
                <span className="timeline__duration">{item.duration}</span>
                <h3 className="timeline__role">{item.role}</h3>
                <p className="timeline__org">{item.organization}</p>
                <p className="timeline__desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
