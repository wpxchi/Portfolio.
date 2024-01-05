import React from "react";
import './cv.css'; // Importa un archivo de estilo para este componente
import CV from '../Images/CV.jpg';

const Cv = () => {
  return (
    <div className="cv-container">
      <img className="cv-image" src={CV} alt='Imagen Cv' />
    </div>
  );
};

export default Cv;