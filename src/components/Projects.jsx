import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { projects } from '../data/portfolioData';
import './Projects.css';

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <span className="section-eyebrow">Things I've built</span>
        <h2 className="section-title fade-up">Projects</h2>

        <div className="projects__grid">
          {projects.map((project) => (
            <article className="project-card card fade-up" key={project.name}>
              <h3 className="project-card__name">{project.name}</h3>
              <p className="project-card__desc">{project.description}</p>

              <ul className="project-card__features">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <div className="project-card__tags">
                {project.technologies.map((tech) => (
                  <span className="tag" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-card__links">
                {project.github !== '[ADD INFORMATION]' ? (
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <FiGithub size={16} /> Code
                  </a>
                ) : (
                  <span className="project-card__missing">[ADD INFORMATION]</span>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <FiExternalLink size={16} /> Live Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
