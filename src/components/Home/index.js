import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./styles.css";

const Home = ({ addProject }) => {
  const [projectName, setProjectName] = useState('');
  const [projectLink, setProjectLink] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'projectName':
        setProjectName(value);
        break;
      case 'projectLink':
        setProjectLink(value);
        break;
      case 'projectDescription':
        setProjectDescription(value);
        break;
      default:
        break;
    }
  };

  const handleAddProject = (e) => {
    e.preventDefault();
    const newProject = {
      name: projectName,
      link: projectLink,
      description: projectDescription,
    };
    // Clear input fields
    setProjectName('');
    setProjectLink('');
    setProjectDescription('');
    addProject(newProject);
    
    
  };

  const handleNavigateToProjects = () => {
    navigate('/projects');
  };

  return (
    <div className='home-container'>
      <div className='first-page-bg'>
        <div className='details-page'>
          <p className='home-paragraph'>UI/UX DESIGNER</p>
          <h2>Hello, my name<br />is Modelyn Torff</h2>
          <p className='home-description'>Short text with details about you, what you do or your professional career. You can add more information on the about page.</p>
          <div>
            <button type='button' className='project-button' onClick={handleNavigateToProjects}>Projects</button>
            <button>Linkedin</button>
          </div>
        </div>
        <img className='first-image' src={'./images/Fimage.png'} alt="name" />
      </div>

      <div className='project-input-section'>
        <h3>Add Project</h3>
        <form onSubmit={handleAddProject}>
          <label>Project Name:</label>
          <input
            type="text"
            name="projectName"
            value={projectName}
            onChange={handleInputChange}
          />
          <label>Project Link:</label>
          <input
            type="text"
            name="projectLink"
            value={projectLink}
            onChange={handleInputChange}
          />
          <label>Project Description:</label>
          <input
            type="text"
            style={{ height: '150px' }}
            name="projectDescription"
            value={projectDescription}
            onChange={handleInputChange}
          />
          <div className='button-container'>
            <button className='project-button add-button' type="submit">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Home;
