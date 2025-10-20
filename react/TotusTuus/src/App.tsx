import { useEffect, useState } from 'react';
import './App.css';
import About from './components/about/about';
import Footer from './components/footer/footer';
import Gallery from './components/gallery/gallerry';
import Header from './components/header/header';
import Hero from './components/Hero/Hero';
import Join from './components/join/join';
import 'aos/dist/aos.css';
import Aos from 'aos';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Simula o carregamento da página
  useEffect(() => {
    Aos.init({
      duration: 600,
    });

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 1 segundo de delay para o preloader

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && (
        <div className="preloader">
          <div className="loader"></div>
        </div>
      )}
      
      <div className={`content ${isLoading ? 'hidden' : ''}`}>
        <Header />
        <Hero />
        <About />
        <Gallery />
        <Join />
        {/* <NewTrip /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;