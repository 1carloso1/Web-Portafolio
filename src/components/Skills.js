
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import python from 'programming-languages-logos/src/python/python.svg'
import js from 'programming-languages-logos/src/javascript/javascript.svg'
import java from 'programming-languages-logos/src/java/java.svg'
import csharp from 'programming-languages-logos/src/csharp/csharp.svg'
import html from 'programming-languages-logos/src/html/html.svg'
import css from 'programming-languages-logos/src/css/css.svg'
import microsoft from "../assets/img/Microsoft_logo2.svg";
import linux from "../assets/img/Linux_logo2.svg";
import sql from "../assets/img/Sql_data_base_with_logo.svg";
import django from "../assets/img/Django_logo.svg";
import bs from "../assets/img/Bootstrap_logo.svg";
import opencv from "../assets/img/OpenCV_Logo_with_text_svg_version.svg";
import tf from "../assets/img/TensorFlowLogo.svg";
import docker from "../assets/img/Docker-svgrepo-com.svg";
import git from "../assets/img/nav-icon4.svg";
import latex from "../assets/img/latex-svgrepo-com.svg";
import react from "../assets/img/React_Logo_SVG.svg";
import colorSharp from "../assets/img/thunderblur.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
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
    
    <section className="skill" id="skills">
        <div className="skill-box">
          <div className="row">
            <div className="col-12">
              <div className="intro-bx wow fadeIn">
                <h1>Skills</h1>
                <p>
                  Here is a showcase of my key competencies and technical abilities. Below, you’ll find areas where I specialize as well as the tools and technologies I use to bring ideas to life.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx1 wow zoomIn">
                        <h2>Areas of Expertise</h2>
                        <p>My academic journey has given me a solid foundation in artificial intelligence, with a focus on computer vision. I am also passionate about web development and cybersecurity, participating in CTF challenges to further hone my skills in these areas.</p>
                        <p><b>Below is a list of my skills and my proficiency level in each. The percentage represents my mastery of each skill, where 0% means no skill in the area, and 100% means full mastery of the skill.</b></p>
                        <div className="skill-slider">
                            <div className="grid-columns">
                              <div className="item grid-item">
                                <div class="progress-bar progbar-cv">
                                  <progress></progress>
                                </div>
                                <h5>Computer Vision</h5>
                              </div>
                              <div className="item grid-item">
                                <div class="progress-bar progbar-dl">
                                  <progress></progress>
                                </div>
                                  <h5>Deep Learning</h5>
                              </div>
                              <div className="item grid-item">
                                <div class="progress-bar progbar-ml">
                                  <progress></progress>
                                </div>
                                  <h5>Machine Learning</h5>
                              </div>
                              <div className="item grid-item">
                                <div class="progress-bar progbar-wdev">
                                  <progress></progress>
                                </div>
                                  <h5>Web Development</h5>
                              </div>
                              <div className="item grid-item">
                                <div class="progress-bar progbar-wdes">
                                  <progress></progress>
                                </div>
                                  <h5>Web Design</h5>
                              </div>
                              <div className="item grid-item">
                                <div class="progress-bar progbar-cyb">
                                  <progress></progress>
                                </div>
                                  <h5>Cybersecurity</h5>
                              </div>
                            </div>
                        </div>
                    </div>
                    <div className="skill-bx2 wow zoomIn"> 
                        <h2>Tech Skills</h2>
                        <h4>Programming Languages</h4>
                        <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={2000} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={python} alt="PL 1" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={java} alt="PL 2" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={js} alt="PL 3" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={csharp} alt="PL 4" />
                                <h5>C#</h5>
                            </div>
                            <div className="item">
                                <img src={sql} alt="PL 4" />
                                <h5>SQL</h5>
                            </div>
                            <div className="item">
                                <img src={html} alt="PL 5" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={css} alt="PL 6" />
                                <h5>CSS</h5>
                            </div>
                        </Carousel>
                        <h4>Frameworks & Libraries</h4>
                        <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={2000} rtl={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={django} alt="Skill 1" />
                                <h5>Django</h5>
                            </div>
                            <div className="item">
                                <img src={react} alt="Skill 2" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={bs} alt="Skill 3" />
                                <h5>Bootstrap</h5>
                            </div>
                            <div className="item">
                                <img src={opencv} alt="Skill 4" />
                                <h5>OpenCV</h5>
                            </div>
                            <div className="item">
                                <img src={tf} alt="Skill 4" />
                                <h5>TensorFlow</h5>
                            </div>
                        </Carousel>
                        <h4>Tools & Platforms</h4>
                        <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={2000} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={microsoft} alt="Skill 1" />
                                <h5>Windows</h5>
                            </div>
                            <div className="item">
                                <img src={linux} alt="Skill 2" />
                                <h5>Linux</h5>
                            </div>
                            <div className="item">
                                <img src={docker} alt="Skill 3" />
                                <h5>Docker</h5>
                            </div>
                            <div className="item">
                                <img src={git} alt="Skill 4" />
                                <h5>Git</h5>
                            </div>
                            <div className="item">
                                <img src={latex} alt="Skill 4" />
                                <h5>LaTeX</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Skills Background" />
    </section>
  )
}
