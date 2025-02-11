import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logos/logoNEW2.png';
import linkdnIcon from '../assets/img/nav-icon1.svg';
import instagramIcon from '../assets/img/nav-icon3.svg';
import gitIcon from '../assets/img/nav-icon4.svg';

import { instaLink, gitLink, linkdnLink } from "../consts"

export const NavBar = ({ setActiveSectionKey }) => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50 || activeLink !== 'home') {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [activeLink]);

  const handleNavClick = (value) => {
    setActiveLink(value);
    setActiveSectionKey(Date.now()); // Cambia la clave para forzar la reanimación

    // Desplazar suavemente a la sección seleccionada
    const section = document.querySelector(value);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
      <Navbar expand="lg" className={`navbar ${scrolled ? 'scrolled' : ''}`}> 
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className='navbar-toggler-icon'></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => handleNavClick('#home')}>Home</Nav.Link>
              <Nav.Link href="#aboutme" className={activeLink === 'aboutme' ? 'active navbar-link' : 'navbar-link'} onClick={() => handleNavClick('#aboutme')}>About Me</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => handleNavClick('#skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => handleNavClick('#projects')}>Projects</Nav.Link>
            </Nav>
            <span className='navbar-text'>
              <div className='social-icon'>
                <a href={instaLink}><img src={instagramIcon} alt="Instagram" /></a>
                <a href={linkdnLink}><img src={linkdnIcon} alt="LinkedIn" /></a>
                <a href={gitLink}><img src={gitIcon} alt="GitHub" /></a>
              </div>
              <button className='vvd' onClick={() => console.log('connect')}><span>Let's Connect</span></button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};
