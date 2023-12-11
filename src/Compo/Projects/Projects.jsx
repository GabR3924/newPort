import React, { useState } from 'react';
import './Projects.css';
import { Data } from '../../data.js';
import Modal from '../Modal/Modal.jsx';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (projectId) => {
    console.log("Abrir modal para el proyecto:", projectId);
    setSelectedProject(projectId);
  };

  const closeModal = () => {
    console.log("Cerrar modal para el proyecto:", selectedProject);
    setSelectedProject(null);
  };

  return (
    <section className='section'>
      <h1>Proyectos</h1>
      <div className="projects">
        {Data.map((project) => (
          <div key={project.id} className={project.id}>
            <img src={project.image} alt={project.title} className='img' />
            <div className="info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul>
                {project.categories.map((category, index) => (
                  <li key={index}>{category}</li>
                ))}
              </ul>
              <button className='ver' onClick={() => openModal(project.id)}>
                Ver
              </button>
            </div>
          </div>
        ))}
      </div>
      {selectedProject && (
        <Modal project={Data.find((project) => project.id === selectedProject)} onClose={closeModal} />
      )}
    </section>
  );
}

export default Projects;
