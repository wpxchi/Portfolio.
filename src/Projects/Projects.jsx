import React from "react";
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="project">
        <div className="project-header">
          <h1>EventoX</h1>
        </div>
        <div className="project-content">
          <p>
            EventoX is a cutting-edge web platform designed for the creation and
            sale of events. This innovative site offers users the ability to
            explore, purchase, and even create their own events. With a
            user-friendly interface, robust features, and a secure payment system
            powered by MercadoPago, EventoX provides a comprehensive solution for
            event enthusiasts and creators alike.
          </p>
          <p>
            As a Front End Developer at EventoX, my primary focus was on
            integration tasks, bug reviews, and maintenance. I played a vital
            role in ensuring the platform's smooth functionality by seamlessly
            integrating various components, conducting thorough bug reviews, and
            performing routine maintenance tasks. My attention to detail and
            dedication to enhancing the user experience contributed significantly
            to the overall success and reliability of EventoX.
          </p>
        </div>
      </div>

      <div className="project">
        <div className="project-header">
          <h1>Pokemon PI</h1>
        </div>
        <div className="project-content">
          <p>
            PI Pokemons is an engaging web platform dedicated to showcasing
            Pokemon cards, providing users with an interactive space to learn more
            about these fascinating creatures and even create their own Pokemon
            cards. In the PI Pokemons project, I worked as a Full Stack developer,
            handling tasks on both the server and client sides. I implemented
            technologies such as React, Redux, JavaScript, CSS, Node.js, and
            PostgreSQL to achieve seamless integration and provide a
            comprehensive experience for users.
          </p>
        </div>
      </div>

      <div className="github-link">
        <h3 className="github-link-text">You can view all the projects on my GitHub</h3>
      </div>
    </div>
  );
};

export default Projects;