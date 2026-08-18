import { FiBookOpen } from 'react-icons/fi';
import { education } from '../data/portfolioData';
import './Education.css';

export default function Education() {
  return (
    <section id="education" className="section education">
      <div className="container">
        <span className="section-eyebrow">Academic background</span>
        <h2 className="section-title fade-up">Education</h2>

        <div className="education__list">
          {education.map((item) => (
            <div className="education__card card fade-up" key={item.degree}>
              <div className="education__icon">
                <FiBookOpen size={22} />
              </div>
              <div>
                <h3 className="education__degree">{item.degree}</h3>
                <p className="education__institution">{item.institution}</p>
                <div className="education__meta">
                  <span className="tag">{item.duration}</span>
                  <span className="tag">{item.score}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
