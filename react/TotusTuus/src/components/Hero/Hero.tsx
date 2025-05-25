import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Hero.css';
import { useEffect, useState, useRef } from 'react';
import { faCalendarDays, faCircleExclamation, faCircleXmark, faHandsPraying, faLocationDot, faMugHot, faShirt } from '@fortawesome/free-solid-svg-icons';

function Hero() {
    const [days, setDays] = useState('00');
    const [hours, setHours] = useState('00');
    const [minutes, setMinutes] = useState('00');
    const [seconds, setSeconds] = useState('00');
    const revealSectionRef = useRef<HTMLDivElement>(null);
    const confettiContainerRef = useRef<HTMLDivElement>(null);

    const createConfetti = () => {
        if (!confettiContainerRef.current) return;
        
        const colors = ['#f94144', '#f3722c', '#f8961e', '#f9c74f', '#90be6d', '#43aa8b', '#577590'];
        
        // Limpa confettis anteriores
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

    useEffect(() => {
        const targetDate = new Date('2025-10-18T08:10:00').getTime();

        const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            const daysRemaining = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hoursRemaining = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutesRemaining = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const secondsRemaining = Math.floor((distance % (1000 * 60)) / 1000);

            setDays(daysRemaining.toString().padStart(2, '0'));
            setHours(hoursRemaining.toString().padStart(2, '0'));
            setMinutes(minutesRemaining.toString().padStart(2, '0'));
            setSeconds(secondsRemaining.toString().padStart(2, '0'));
        };

        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <section id="home" className="hero">
                <div className="particles" id="particles"></div>
                <div className="container">
                    <div className="hero-content" data-aos="fade-up">
                        <h1>Totus Tuus TESTEEEEEE</h1>
                        <p>Acompanhe a contagem para a nossa grande aventura no Beto Carrero World!</p>

                        <div className="countdown">
                            <div className="countdown-item">
                                <div className="countdown-number">{days}</div>
                                <div className="countdown-label">Dias</div>
                            </div>
                            <div className="countdown-item">
                                <div className="countdown-number">{hours}</div>
                                <div className="countdown-label">Horas</div>
                            </div>
                            <div className="countdown-item">
                                <div className="countdown-number">{minutes}</div>
                                <div className="countdown-label">Minutos</div>
                            </div>
                            <div className="countdown-item">
                                <div className="countdown-number">{seconds}</div>
                                <div className="countdown-label">Segundos</div>
                            </div>
                        </div>

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
                    <p>Estamos muito felizes em anunciar nossa próxima aventura: uma viagem incrível ao Beto Carrero World em Outubro de 2025!</p>
                
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
                
                    <a href="https://forms.gle/H9rbmpB7RfDqihBB9" className="btn btn-primary">Quero Participar!</a>
                </div>
            </div>
        </>
    );
}

export default Hero;