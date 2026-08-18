import { FiAward } from 'react-icons/fi';
import { certifications, achievements } from '../data/portfolioData';
import './Certifications.css';

export default function Certifications() {
  return (
    <section id="certifications" className="section certifications">
      <div className="container">
        <span className="section-eyebrow">Proof of work</span>
        <h2 className="section-title fade-up">Certifications & Achievements</h2>

        <div className="certifications__grid">
          {certifications.map((cert) => (
            <div className="cert-card card fade-up" key={cert.name}>
              <FiAward size={20} className="cert-card__icon" />
              <div>
                <h3 className="cert-card__name">{cert.name}</h3>
                <p className="cert-card__issuer">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="achievements__title fade-up">Achievements</h3>
        <ul className="achievements__list fade-up">
          {achievements.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
