import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AboutMe } from './components/AboutMe';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
