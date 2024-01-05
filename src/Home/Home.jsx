import React from "react";
import './Home.css'; // Agrega un archivo de estilo para este componente
import FSD1 from '../Images/FSD1.svg'
import FSD2 from '../Images/FSD2.webp'

const Homepage = () => {
    return (
      <div className="homepage-container">
        <div className="homepage-content">
          <h1 className="homepage-title">Hi, I'm Uriel Castillo</h1>
          <h2 className="homepage-subtitle">Full Stack Web Developer</h2>
          <p className="homepage-description">
            Welcome to my portfolio! Check out all the amazing things I've been working on. ❤️
          </p>
        </div>
        <img className="homepage-image" src={FSD2} alt='Imagen de Homepage' />
        <img className="homepage-image2" src={FSD1} alt='Imagen Homepage 2' />
      </div>
      
      
    );
  };

export default Homepage;
