import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Link } from 'react-router-dom';
import './card.css';

const ProjectCard = ({ project }) => (
  <VerticalTimelineElement className="timeline-element" iconStyle={{ background: `url(${project.image})`, backgroundSize: 'cover', width: '30px', height: '30px' }}>
    <div className="project-background-container">
      <div className="project-desc">
        <span>{project.desc}</span>
      </div>

      <img src={project.image} alt="" />

      <div className="project-title">
        <span>{project.title}</span>
      </div>

      <div className="project-title">
        <span> Role: {project.role}</span>
      </div>

      <div className="project-btn">
        <Link to={project.demo} className="btn sm small" target="_blank" rel="noopner noreferrer">
          Demo
        </Link>
        <Link to={project.github} className="btn sm medium" target="_blank" rel="noopner noreferrer">
          Github
        </Link>
      </div>
    </div>
  </VerticalTimelineElement>
);

export default ProjectCard;
