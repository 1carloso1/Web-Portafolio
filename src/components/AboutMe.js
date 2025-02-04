import { Container, Row, Col, } from "react-bootstrap";
import { Carousel as Carrusel} from "react-bootstrap" 
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import AcademicImg from "../assets/img/formacion_academica.svg";
import AcademicIPNImg from "../assets/img/formacion_academicaIPN.svg";
import MeImg from "../assets/img/personal2.png";
import colorSharp from "../assets/img/thunderblur.png"
import ts from 'programming-languages-logos/src/typescript/typescript.svg'
import numpy from "../assets/img/Numpy-svgrepo-com.svg";
import pandas from "../assets/img/Pandas_logo.svg";
import c from 'programming-languages-logos/src/c/c.svg'

export const AboutMe = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 6
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (
    <section className="aboutme" id="aboutme">
        <div className="aboutme-box">
            <div className="row">
                <div className="col-12">
                    <div className="intro-bx wow fadeIn">
                        <h1>About Me</h1>
                    </div>
                </div>
            </div>
        <Carrusel infinite={true} autoPlay={true} autoPlaySpeed={2000} pause={false} className="custom-carousel">
        {/* Slide 1 */}
        <Carrusel.Item className="carousel-item">
            <div className="container">
            <div className="row align-items-center">
                <Col xs={12} md={6} xl={7}>
                <TrackVisibility>
                    {({ isVisible }) => (
                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                        <p>
                        I am a software engineer passionate about the constant evolution of technology. My primary focus is on computer vision and neural networks, with a strong interest in applying artificial intelligence to solve real-world problems. In addition to my AI work, I am also passionate about web development and enjoy creating dynamic, responsive web applications. Currently, I am pursuing a Master's degree in Science and Technology at the Universidad Autónoma de Zacatecas.
                        </p>
                    </div>
                    )}
                </TrackVisibility>
                </Col>
                <Col xs={12} md={6} xl={5}>
                <TrackVisibility>
                    {({ isVisible }) => (
                    <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                        <img src={MeImg} alt="Header Img" />
                    </div>
                    )}
                </TrackVisibility>
                </Col>
            </div>
            </div>
        </Carrusel.Item>

        {/* Slide 2 */}
        <Carrusel.Item className="carousel-item">
            <div className="container">
            <div className="row align-items-center">
                <Col xs={12} md={6} xl={6}>
                <TrackVisibility>
                    {({ isVisible }) => (
                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                        <h3>Interests</h3>
                        <p>
                            I am passionate about reading, especially in the genre of fantasy reality. I am always looking to improve my software skills by learning new technologies and tools. In my free time, I enjoy science fiction movies, listening to music, and playing video games—activities that allow me to relax and develop my creativity.
                            Additionally, I actively participate in platforms like PicoCTF and TryHackMe, where I develop my skills in cybersecurity. I am also interested in finding new ways to work with systems and improve my technical knowledge. I have a strong interest in Linux, which allows me to explore new ways of working with systems and further improve my technical knowledge.
                        </p>
                    </div>
                    )}
                </TrackVisibility>
                </Col>
                <Col xs={12} md={6} xl={6}>
                <TrackVisibility>
                    {({ isVisible }) => (
                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <h3>Languajes</h3>
                    <p>
                    <strong>Spanish</strong> (Native)<br />
                    <strong>English</strong> (B2, <em>TOEFL Certification</em>)<br />
                    <strong>German</strong> (Basic, Learner)
                    </p>
                    </div>
                    )}
                </TrackVisibility>
                </Col>
            </div>
            </div>
        </Carrusel.Item>
        </Carrusel>
        </div>
            <div>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="education-bx">
                            <div className="education-bx-card">
                                <h3>Academic Background</h3>
                                <img src={AcademicIPNImg} alt="University" />
                                <p><strong>Instituto Politécnico Nacional</strong></p>
                                <p><strong>Technical Degree in Digital Systems</strong>, Class of 2017-2020</p>
                                <img src={AcademicImg} alt="University" />
                                <p><strong>Universidad Autónoma de Zacatecas</strong></p>
                                <p><strong>Bachelor's Degree in Software Engineering</strong>, Class of 2020-2024</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="cv-bx">
                            <div className="cv-bx-card">
                                <h3>Work Experience</h3>
                                <div className="experience-item">
                                    <p className="description">
                                    <strong>I lack sufficient work experience</strong>, but I dedicate my time to continuous learning to strengthen my skills and be prepared for any job opportunity where I can apply my knowledge.
                                    </p>
                                </div>
                                <div className="experience-item">
                                    <h4>Freelance Web Developer</h4>
                                    <h5>Psicosfera: Psychologist Consultation Website </h5>
                                    <p className="duration"><strong>Duration:</strong> August 2023 - February 2024</p>
                                    <p className="description">
                                    I developed a web platform to facilitate the search for psychologists, implementing a system that allows users to search by location and specialty. The platform was built using Django and Docker for scalable deployment. It includes features such as detailed profiles, secure messaging between users and psychologists, and a scheduling system that enables appointments to be booked at specific dates and times, optimizing organization and reducing scheduling conflicts.
                                    </p>
                                </div>
                                <div className="experience-item">
                                    <h4>Computer Vision Researcher | <span>Laboratory of Applied Inventions, UAZ</span></h4>
                                    <p className="duration"><strong>Duration:</strong> June 2018 - February 2024</p>
                                    <p className="description">
                                    I developed a computer vision system in Python based on the ASTM C469 standard to calculate the modulus of elasticity of concrete.
                                    This involved creating a custom dataset and training a model using the YOLO architecture to detect concrete cylinders in images and videos, enabling precise analysis of material deformation and strength.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="currlearn-bx">
                            <div className="currlearn-bx-card">
                                <h3>Currently Learning</h3>
                                <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={2000} rtl={true} className="owl-carousel owl-theme skill-slider">
                                    <div className="item">
                                        <img src={ts} alt="Skill 1" />
                                        <h5>TypeScript</h5>
                                    </div>
                                    <div className="item">
                                        <img src={c} alt="PL 4" />
                                        <h5>C</h5>
                                    </div>
                                    <div className="item">
                                        <img src={numpy} alt="Skill 5" />
                                        <h5>NumPy</h5>
                                    </div>
                                    <div className="item">
                                        <img src={pandas} alt="Skill 6" />
                                        <h5>Pandas</h5>
                                    </div>

                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        <img className="background-image-left" src={colorSharp} alt="Skills Background" />
</section>
  )
}
