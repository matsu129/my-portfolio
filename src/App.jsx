import Header from './components/Header';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div
      data-bs-spy="scroll"
      data-bs-target="#navbarNav"
      data-bs-offset="70"
      className="scrollspy-example"
      tabIndex="0"
    >
      <Header />
      <HeroSection />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}
