import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';

const App = () => {
  return (
<BrowserRouter>
  <main>
    <Navbar />
    <section id="hero">
          <Hero />
        </section>
  </main>
</BrowserRouter>
  )
}

export default App