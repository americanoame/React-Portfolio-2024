import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Project from './pages/project/Project';
import Contact from './pages/contact/Contact';

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Navbar />
        <section id="hero">
          <Hero />
        </section>
        <section id="project">
          <Project />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </BrowserRouter>
  );
};

export default App;
