import { FiDownload, FiFileText } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';
import './ResumeDownload.css';

export default function ResumeDownload() {
  return (
    <section id="resume" className="section resume-download">
      <div className="container resume-download__inner card fade-up">
        <div className="resume-download__text">
          <FiFileText size={28} className="resume-download__icon" />
          <div>
            <h2 className="resume-download__title">Want the full picture?</h2>
            <p className="resume-download__sub">Download my resume for complete details.</p>
          </div>
        </div>
        <a href={personalInfo.resumeFile} download className="btn btn-primary">
          <FiDownload size={16} /> Download Resume
        </a>
      </div>
    </section>
  );
}
