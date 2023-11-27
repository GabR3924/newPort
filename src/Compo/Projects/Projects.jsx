import React, { useState } from 'react';
import Template from '../../assets/Desktop.png';
import './Projects.css';

function Projects() {
  // Utilizamos un objeto para almacenar el estado de cada contenedor
  const [detailVisible, setDetailVisible] = useState({
    uno: false,
    dos: false,
    tres: false,
    cuatro: false,
  });

  const toggleDetail = (container) => {
    // Creamos una copia del estado actual
    const updatedDetailVisible = { ...detailVisible };
    // Cambiamos el estado del contenedor específico
    updatedDetailVisible[container] = !updatedDetailVisible[container];
    // Actualizamos el estado global
    setDetailVisible(updatedDetailVisible);

    // Ajusta la clase del contenedor específico
    const containerElement = document.querySelector(`.${container}`);
    containerElement.classList.toggle('expanded');
  };

  return (
    <section className='section'>
      <div className='options'>
        <h1>Web App's</h1>
        <h1>Java</h1>
        <h1>API's</h1>
        <h1>UX UI</h1>
      </div>
      <div className="projects">
        <div className='uno'>
          <div className='img'></div>
          <div className="info">
            <h3>NFTs Website</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            <ul>
              <li>UX/UI</li>
              <li>Frontend</li>
              <li>CSS</li>
            </ul>
            <button className='ver' onClick={() => toggleDetail('uno')}>
              Ver
            </button>
          </div>
          <div className={`detail ${detailVisible.uno ? 'visible' : ''}`}>
            {/* Contenido del detalle del contenedor uno */}
          </div>
        </div>
        <div className='dos'>
          <div className='img'></div>
          <div className="info">
            <h3>NFTs Website</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            <ul>
              <li>UX/UI</li>
              <li>Frontend</li>
              <li>CSS</li>
            </ul>
            <button className='ver' onClick={() => toggleDetail('dos')}>
              Ver
            </button>
          </div>
          <div className={`detail ${detailVisible.dos ? 'visible' : ''}`}>
            {/* Contenido del detalle del contenedor dos */}
          </div>
        </div>
        <div className='tres'>
          <div className='img'></div>
          <div className="info">
            <h3>NFTs Website</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            <ul>
              <li>UX/UI</li>
              <li>Frontend</li>
              <li>CSS</li>
            </ul>
            <button className='ver' onClick={() => toggleDetail('tres')}>
              Ver
            </button>
          </div>
          <div className={`detail ${detailVisible.tres ? 'visible' : ''}`}>
            {/* Contenido del detalle del contenedor tres */}
          </div>
        </div>
        <div className='cuatro'>
          <div className='img'></div>
          <div className="info">
            <h3>NFTs Website</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            <ul>
              <li>UX/UI</li>
              <li>Frontend</li>
              <li>CSS</li>
            </ul>
            <button className='ver' onClick={() => toggleDetail('cuatro')}>
              Ver
            </button>
          </div>
          <div className={`detail ${detailVisible.cuatro ? 'visible' : ''}`}>
            {/* Contenido del detalle del contenedor cuatro */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
