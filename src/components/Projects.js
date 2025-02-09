import { useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { ProjectCard } from "./ProjectCards";
import { projects } from "./ProjectsData";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import PopProject from "./PopProject"; 
import navIcon4 from '../assets/img/nav-icon4.svg'


export const Projects = () => {
  const [showModal, setShowModal] = useState(false); // Estado para controlar la visibilidad del modal
  const [selectedProject, setSelectedProject] = useState(null); // Estado para almacenar el proyecto seleccionado

  const handleShowModal = (project) => {
    setSelectedProject(project); // Establece el proyecto seleccionado
    setShowModal(true); // Muestra el modal
  };

  const handleCloseModal = () => {
    setShowModal(false); // Cierra el modal
    setSelectedProject(null); // Limpia el proyecto seleccionado
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                  <Row>
                    {projects.map((project, index) => (
                      <ProjectCard
                        key={index}
                        {...project}
                        onClick={() => handleShowModal(project)} // Llama a la función handleShowModal
                      />
                    ))}
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      {/* Contenedor principal que centra el modal */}
      {showModal && (
          <Modal
            show={showModal}
            onHide={handleCloseModal}
            className="custom-modal"
            centered
          >
            <Modal.Header closeButton className="custom-close-btn" >
              <Modal.Title>{selectedProject?.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <PopProject project={selectedProject} /> {/* Renderiza el contenido adicional */}
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-center">
            <div className='social-icon d-flex align-items-center'>
              <span className="github-text">Ver código en GitHub:</span>
              <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="ms-2">
                <img src={navIcon4} alt="GitHub" />
              </a>
            </div>
            </Modal.Footer>
          </Modal>
      )}
    </section>
  );
};

export default Projects;
