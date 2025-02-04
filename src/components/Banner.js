import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/osocarloso2.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const speed = 150;
  const [delta, setDelta] = useState(speed);
  const [index, setIndex] = useState(1);
  const toRotate = ["AI & Computer Vision Researcher", "Web Developer", "Cybersecurity Enthusiast", "Software Ennginner :)" ];
  const period = 2500;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => speed - 50);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(speed);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Website</span>
                <h1>{`Hello, World! I'm Carlos Olvera`}</h1>
                <h2><span className="wrap fixed-width">&gt; {text}<span className="cursor">|</span></span></h2>
                  <p>I am a software engineer passionate about the constant evolution of technology. My primary focus is on computer vision and neural networks, with a strong interest in applying artificial intelligence to solve real-world problems. In addition to my AI work, I am also passionate about web development and enjoy creating dynamic, responsive web applications. Currently, I am pursuing a Master's degree in Science and Technology at the Universidad Autónoma de Zacatecas.</p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
