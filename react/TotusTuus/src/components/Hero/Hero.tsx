import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Hero.css';
import { useRef } from 'react';
import { faCalendarDays, faCircleExclamation, faCircleXmark, faHandsPraying, faLocationDot, faMugHot, faShirt } from '@fortawesome/free-solid-svg-icons';

function Hero() {
    const revealSectionRef = useRef<HTMLDivElement>(null);
    const confettiContainerRef = useRef<HTMLDivElement>(null);

    const createConfetti = () => {
        if (!confettiContainerRef.current) return;
        
        const colors = ['#f94144', '#f3722c', '#f8961e', '#f9c74f', '#90be6d', '#43aa8b', '#577590'];
        
        confettiContainerRef.current.innerHTML = '';
        
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.width = Math.random() * 10 + 5 + 'px';
            confetti.style.height = Math.random() * 10 + 5 + 'px';
            confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
            confetti.style.animationDelay = Math.random() * 2 + 's';
            confettiContainerRef.current.appendChild(confetti);
        }
    };

    const revealSecret = () => {
        if (!revealSectionRef.current) return;
        
        const overlay = document.createElement('div');
        overlay.classList.add('modal-overlay');
        document.body.appendChild(overlay);
        
        revealSectionRef.current.classList.add('modal-active');
        document.body.classList.add('modal-open');
        
        createConfetti();
        
        const closeModal = () => {
            if (revealSectionRef.current) {
                revealSectionRef.current.classList.remove('modal-active');
                document.body.classList.remove('modal-open');
                overlay.remove();
            }
        };
        
        overlay.addEventListener('click', closeModal);
    };

    return (
        <>
            <section id="home" className="hero">
                <div className="particles" id="particles"></div>
                <div className="container">
                    <div className="hero-content">
                        <h1 data-aos="fade-up">Totus Tuus Marie</h1>
                        <p data-aos="fade-up">Acompanhe a contagem para a nossa grande aventura no Beto Carrero World!</p>

                        <div className="countdown-buttons">
                            <a href="#about" className="btn btn-primary">Saiba Mais</a>
                            <button
                                id="secret-btn"
                                className="btn btn-primary"
                                onClick={revealSecret}>
                                Veja mais sobre a Viagem ao Beto...
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <div id="reveal-section" ref={revealSectionRef} className="reveal-section">
                <div id="confetti-container" ref={confettiContainerRef} className="confetti-container"></div>
                <button className="modal-close-btn" onClick={() => {
                    if (revealSectionRef.current) {
                        revealSectionRef.current.classList.remove('modal-active');
                        document.body.classList.remove('modal-open');
                        document.querySelector('.modal-overlay')?.remove();
                    }
                }}>
                    <FontAwesomeIcon icon={faCircleXmark} />
                </button>
                <div className="reveal-content">
                    <h3>Viagem ao Beto Carrero World</h3>
                    {/* <p>Estamos muito felizes em anunciar nossa próxima aventura: uma viagem incrível 
                    ao Beto Carrero World em Outubro de 2025!</p> */}

                    <p>Infelizmente todas as vagas foram esgotadas, mas segue abaixo a lista de espera para a nossa incrivel viagem!!</p>
                
                    <div className="reveal-details">
                        <div className="reveal-detail">
                            <div className="feature-icon-hero"><FontAwesomeIcon icon={faCalendarDays} /></div>
                            <span>18 de Outubro de 2025</span>
                        </div>
                        <div className="reveal-detail">
                            <div className="feature-icon-hero"><FontAwesomeIcon icon={faLocationDot} /></div>
                            <span>Beto Carrero World - Penha, SC</span>
                        </div>
                        <div className="reveal-detail">
                            <div className="feature-icon-hero"><FontAwesomeIcon icon={faHandsPraying} /></div>
                            <span>Acompanhamento espiritual</span>
                        </div>
                        <div className="reveal-detail">
                            <div className="feature-icon-hero"><FontAwesomeIcon icon={faMugHot} /></div>
                            <span>Café da Manhã incluso</span>
                        </div>
                        <div className="reveal-detail">
                            <div className="feature-icon-hero"><FontAwesomeIcon icon={faCircleExclamation} /></div>
                            <span>Somente 46 Vagas</span>
                        </div>
                        <div className="reveal-detail">
                            <div className="feature-icon-hero"><FontAwesomeIcon icon={faShirt} /></div>
                            <span>Camisa Personalizada</span>
                        </div>
                    </div>
                
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSevYOnhCDCRLwnmvdlqrrSkfIFksP2RWlO4x-AAozx5llGgXw/viewform" className="btn btn-primary">Lista de espera!</a>
                </div>
            </div>
        </>
    );
}

export default Hero;