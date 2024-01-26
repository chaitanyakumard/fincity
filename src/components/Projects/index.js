import React from 'react';
import "./styles.css";
import Contact from '../Contact';

const Projects = ({ projects, addProject }) => {

  return (
    <div className='projects-bg-container'>
      <div className='project-container'>
        <h3 className='projects-title'>Projects</h3>

        {/* Render the form for adding new projects */}


        {/* Render existing projects */}
        {projects.map((project, index) => (
          <div key={index} className={`project-section ${index % 2 === 0 ? 'even-project' : 'odd-project'}`}>
            <div className='description-container'>
              <h4 className='pro-name'>{project.name}</h4>
              <p className='pro-description'>{project.description}</p>
              <button className='view-project-button' type='button'>View Project</button>
            </div>
            <img className='pro-image' src={project.link} alt={`Project ${index + 1}`} />
          </div>
        ))}
      </div>
      <Contact />
    </div>
  );
}

export default Projects;
