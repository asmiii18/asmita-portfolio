import { skills } from '../data/portfolioData';
import './Skills.css';

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <span className="section-eyebrow">What I work with</span>
        <h2 className="section-title fade-up">Skills</h2>

        <div className="skills__grid">
          {skills.map((group) => (
            <div className="skills__card card fade-up" key={group.category}>
              <h3 className="skills__category">{group.category}</h3>
              <div className="skills__tags">
                {group.items.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
