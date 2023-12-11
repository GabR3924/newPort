import React from 'react';
import './Modal.css'; // Asegúrate de tener el archivo CSS correspondiente para el modal

const Modal = ({ project, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <ul>
          {project.categories.map((category, index) => (
            <li key={index}>{category}</li>
          ))}
        </ul>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default Modal;
