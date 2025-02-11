import './App.css';
import { useState } from 'react';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import { AboutMe } from './components/AboutMe';
import { Contact } from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [activeSectionKey, setActiveSectionKey] = useState(Date.now());

  return (
    <div className="App">
      <NavBar setActiveSectionKey={setActiveSectionKey} />
      <div key={activeSectionKey}>
        <Banner />
        <AboutMe />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
