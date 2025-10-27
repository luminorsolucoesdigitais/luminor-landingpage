import Header from './components/Header';
import { HeroGeometric } from './components/ui/shape-landing-hero';
import About from './components/About';
import Differentials from './components/Differentials';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroGeometric />
        <About />
        <Services />
        <Differentials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
