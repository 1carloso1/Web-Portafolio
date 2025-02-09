import { useEffect, useState } from 'react';  
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logos/logoNEW2.png'
import linkdnIcon from '../assets/img/nav-icon1.svg'
import instagramIcon from '../assets/img/nav-icon3.svg'
import gitIcon from '../assets/img/nav-icon4.svg'
const gitLink = "https://github.com/1carloso1"
const instaLink = "https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2F_carloso_%3Figsh%3DMTk4OW94N205bTh5cg%253D%253D%26fbclid%3DIwZXh0bgNhZW0CMTAAAR34K9URCO5-mr4NJkwvyDVOaza2nGeo6JkmmEqiRBahVBnpjgjmlKBSKO0_aem_COrAEZAR9_Z5JvMaFgCugg&h=AT2946MaA24JXXgM4efQC-9kaDu95SgCwm1Mz-tJlcgxhnrBDFFSBD0kGOzQRary5KO4_wZBD6XQn1325XT6KptSwxeUn35n1vrxD3qQUhXOqYigDKNvxVPf9x5yLQqnYAJNpQ"
const linkdnLink = "https://www.linkedin.com/in/carlos-eduardo-olvera-851843337/"
export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50 || activeLink !== 'home') {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [activeLink])

  const OnUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

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
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => OnUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#aboutme" className={activeLink === 'aboutme' ? 'active navbar-link' : 'navbar-link'} onClick={() => OnUpdateActiveLink('aboutme')}>About Me</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => OnUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => OnUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
              <a href={instaLink}><img src={instagramIcon} alt="" /></a>
              <a href={linkdnLink}><img src={linkdnIcon} alt="" /></a>
              <a href={gitLink}><img src={gitIcon} alt="" /></a>
            </div>
            <button className='vvd' onClick={() => console.log('connect')}><span>Let's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );   
}
