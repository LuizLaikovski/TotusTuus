import './gallery.css';
import imagem59 from './imagem 59.jpg';
import imagem55 from './imagem 55.jpg';
import imagem54 from './imagem 54.jpg';
import imagem57 from './imagem 57.jpg';
import imagem52 from './imagem 52.jpg';
import imagem58 from './imagem 58.jpg';

function Gallery() {
    return(
        <>
        <section id="gallery" className="gallery">
        <div className="container">
            <div className="section-title" data-aos="fade-up">
                <h2>Nossa Galeria</h2>
                <p>Momentos especiais que nosso grupo ja vivenciou!</p>
            </div>
            
            <div className="gallery-container">
                <div className="gallery-item" data-aos="zoom-in" data-aos-delay="100">
                    <img src={imagem59} alt="" />
                    <div className="gallery-overlay">
                        <h3>Chegada ao Parque</h3>
                    </div>
                </div>
                
                <div className="gallery-item" data-aos="zoom-in" data-aos-delay="200">
                    <img src={imagem55} alt="Momento de oração" />
                    <div className="gallery-overlay">
                        <h3>Momento de Oração</h3>
                    </div>
                </div>
                
                <div className="gallery-item" data-aos="zoom-in" data-aos-delay="300">
                    <img src={imagem54} alt="Diversão na montanha-russa" />
                    <div className="gallery-overlay">
                        <h3>Diversão na Montanha-Russa</h3>
                    </div>
                </div>
                
                <div className="gallery-item" data-aos="zoom-in" data-aos-delay="400">
                    <img src={imagem57} alt="Show no parque" />
                    <div className="gallery-overlay">
                        <h3>Torneio de Volêi</h3>
                    </div>
                </div>
                
                <div className="gallery-item" data-aos="zoom-in" data-aos-delay="500">
                    <img src={imagem52} alt="Jantar em grupo" />
                    <div className="gallery-overlay">
                        <h3>Churras do Totus</h3>
                    </div>
                </div>
                
                <div className="gallery-item" data-aos="zoom-in" data-aos-delay="600">
                    <img src={imagem58} alt="Foto em grupo" />
                    <div className="gallery-overlay">
                        <h3>Despertai</h3>
                    </div>
                </div>
            </div>
            
        </div>
    </section>
        </>
    )
}

export default Gallery;