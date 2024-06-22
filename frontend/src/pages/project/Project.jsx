import { VerticalTimeline } from 'react-vertical-timeline-component';
import ProjectCard from '../../components/card/Card';
import projects from '../../data';



const Project = () => {
  return (
    <div className="project-container">
      <div className="projetc-text">
        <h3 className="">Recent Project</h3>
        <VerticalTimeline>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </VerticalTimeline>
      </div>

      
    </div>
  );
};

export default Project;
