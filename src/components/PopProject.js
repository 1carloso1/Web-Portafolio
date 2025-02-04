import React from "react";

const PopProject = ({ project }) => {
  return (
    <div>
      <div>
        <img src={project.videoUrl} alt="Project GIF"/>
      </div>

      <h4>Descripción del Proyecto</h4>
      <p>{project.moreInfo}</p>

      <h4>Tecnologías Usadas:</h4>
      <div className="tech-grid">
        {project.technologies.map((tech, index) => (
          <div key={index} className="tech-item">
            <img src={tech.logoUrl} alt={tech.name} />
            <span>{tech.name}</span>
          </div>
        ))}
      </div>

    </div>
  );
};

export default PopProject;