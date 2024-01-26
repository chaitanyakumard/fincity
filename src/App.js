
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./App.css";

const App = () => {

  const [projects, setProjects] = useState([
    { name: 'Project Name', link: './images/yoga_pos.png', description: 'I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.' },
    { name: 'Project Name', link: './images/New Project (3).png', description: 'What was your role, your deliverables, if the project was personal, freelancing.' },
    { name: 'Project Name', link: './images/New Project (4).png', description: 'You can also add in this description the type of the project, if it was for web, mobile, electron.' },
  ]);

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   switch (name) {
  //     case 'projectName':
  //       setProjectName(value);
  //       break;
  //     case 'projectLink':
  //       setProjectLink(value);
  //       break;
  //     case 'projectDescription':
  //       setProjectDescription(value);
  //       break;
  //     default:
  //       break;
  //   }
  // };

  // const addProject = () => {
  //   const newProject = {
  //     name: projectName,
  //     link: projectLink,
  //     description: projectDescription,
  //   };

  //   setProjects([...projects, newProject]);
  //   setProjectName('');
  //   setProjectLink('');
  //   setProjectDescription('');
  // };

  const addProject = (newProject) => {
    setProjects(prevProjects => [...prevProjects, { ...newProject, isUserAdded: true }]);
  };

  return (
    <Router>
      <div className='toatl-container'>
      <nav>
        <div className='nav-container'>
          <p>Modelyn Torff</p>
          <ul>
            <li><Link to="/">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route
          path="/"
          element={<Home addProject={addProject} />}
          />
        <Route
          path="/projects"
          element={<Projects projects={projects} addProject={addProject} />}
          />
        <Route
          path="/contact"
          element={<Contact />}
          />
      </Routes>
      <footer><img className='footer-img' src="./images/footer.png" alt="" /></footer>
      </div>
    </Router>
  );
}

export default App;
