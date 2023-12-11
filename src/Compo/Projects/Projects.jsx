import React, { useState } from 'react';
import './Projects.css';
import { Data } from '../../data.js';

function Projects() {
  const [detailVisible, setDetailVisible] = useState({
    uno: false,
    dos: false,
    tres: false,
    cuatro: false,
  });

  const toggleDetail = (container) => {
    const updatedDetailVisible = { ...detailVisible };
    updatedDetailVisible[container] = !updatedDetailVisible[container];
    setDetailVisible(updatedDetailVisible);

    const containerElement = document.querySelector(`.${container}`);
    containerElement.classList.toggle('expanded');
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
              <button className='ver' onClick={() => toggleDetail(project.id)}>
                Ver
              </button>
            </div>
            <div className={`detail ${detailVisible[project.id] ? 'visible' : ''}`}>
              {/* Contenido del detalle del contenedor */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
