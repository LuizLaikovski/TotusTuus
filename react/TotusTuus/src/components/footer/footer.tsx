import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './footer.css';
import { faFacebook, faInstagram, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

function Footer() {

    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 500) {
                backToTopBtn.classList.add('visible');
            }
            else {
                backToTopBtn.classList.remove('visible');
            }
        });
        backToTopBtn.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    return(
        <>
        <footer>
        <div className="container">
            <div className="footer-content">
                <div className="footer-info">
                    <h3>Totus Tuus Marie</h3>
                    <p>"Totus Tuus ego sum, et omnia mea tua sunt" (Sou todo teu, e tudo o que tenho é teu). Esta frase, que inspirou nosso nome, reflete nossa entrega total a Jesus por meio de Maria.</p>
                    <p>Junte-se a nós nesta jornada de fé, amizade e aventuras!</p>
                </div>
                
                <div className="footer-links">
                    <h4>Links Rápidos</h4>
                    <ul>
                        <li><a href="#home">Início</a></li>
                        <li><a href="#about">Saiba Mais</a></li>
                        <li><a href="#gallery">Galeria</a></li>
                        <li><a href="https://chat.whatsapp.com/FQNHOTFcpTh9pGIxXaoQco">Entre para o Grupo</a></li>
                    </ul>
                </div>
                
                <div className="footer-social">
                    <h4>Redes Sociais</h4>
                    <div className="social-icons">
                        <a href="https://chat.whatsapp.com/FQNHOTFcpTh9pGIxXaoQco" className="social-icon"><FontAwesomeIcon icon={faWhatsapp} /></a>
                        <a href="https://www.instagram.com/todoteumarie/" className="social-icon"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="https://www.tiktok.com/@todoteumarie" className="social-icon"><FontAwesomeIcon icon={faTiktok} /></a>
                        <a href="https://www.facebook.com/share/1eiSUwFBq6/" className="social-icon"><FontAwesomeIcon icon={faFacebook} /></a>
                    </div>
                </div>
            </div>
            
            <div className="footer-bottom">
                <p>&copy; 2025 Totus Tuus Marie. Todos os direitos reservados.</p>
            </div>
        </div>
    </footer>

    {/* Back to Top Button */}
    <button id="back-to-top" className="back-to-top">
        <FontAwesomeIcon icon={faArrowUp} />
    </button>
        </>
    )
}

export default Footer;