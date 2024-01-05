import React from "react";
import './Aboutme.css'; // Importa un archivo de estilo para este componente
import Foto1 from '../Images/FOTO1.jpeg'


const AboutMe = () => {
  return (
    <div className="container-about-me">
      <img src={Foto1} alt='foto de cara' />
      <div className="about-me-container">
        <h1 className="about-me-title">Hello! I'm Uriel Castillo</h1>
        <p className="about-me-content">
          A passionate 18-year-old FullStack developer, graduated from Henry 🚀.
          My fascination with programming goes beyond the code. I'm driven by the
          potential to transform big ideas into innovative and accessible
          solutions that improve people's lives. 🌟💻
        </p>
        <p className="about-me-content">
          My focus on FullStack development has equipped me with solid skills in
          both frontend and backend, allowing me to create comprehensive and
          functional web experiences. 💡 I enjoy tackling technological challenges
          and always seek ways to optimize and enhance the efficiency of my
          projects. 🛠️
        </p>
        <p className="about-me-content">
          What inspires me in this field is the ability to create tools and
          platforms that simplify everyday tasks and offer creative solutions.
          During my time at Henry, I've had the opportunity to work on exciting
          projects ranging from practical applications to innovative websites.
          🚀🌐
        </p>
        <p className="about-me-content">
          I'm eager to continue learning and growing in this dynamic tech world.
          My goal is to keep developing skills and knowledge, collaborate with
          passionate teams, and contribute to projects that have a positive impact
          on people's lives. 📚🌍
        </p>
        <p className="about-me-content">
          Connect with me, and let's explore how we can collaborate to bring
          incredible ideas to life! ✨
        </p>
      </div>
    </div>
  );
};

export default AboutMe;