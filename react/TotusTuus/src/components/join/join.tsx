import React, { useState, useEffect, useRef } from 'react';
import { faCalendarDays, faClock, faHeart, faLocationDot, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './join.css';
import imagem2 from './IMG_7238.jpg';

const Join: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    // Abrir modal
    const openModal = (e: React.MouseEvent<HTMLButtonElement>) => {
        createRipple(e);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

  // Fechar modal
    const closeModal = () => {
        setIsModalOpen(false);
        setTimeout(() => {
            document.body.style.overflow = 'auto';
        }, 300);
    };

  // Efeito ripple
    const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
        const btn = event.currentTarget;
        const circle = document.createElement('span');
        const diameter = Math.max(btn.clientWidth, btn.clientHeight);
        const radius = diameter / 2;

        circle.style.width = `${diameter}px`;
        circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - btn.getBoundingClientRect().left - radius}px`;
        circle.style.top = `${event.clientY - btn.getBoundingClientRect().top - radius}px`;
        circle.classList.add('ripple');

        const ripple = btn.getElementsByClassName('ripple')[0];
        if (ripple) {
            ripple.remove();
        }

        btn.appendChild(circle);
    };

  // Fechar ao clicar fora ou pressionar ESC
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node) && isModalOpen) {
            closeModal();
            }
        };

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && isModalOpen) {
                closeModal();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isModalOpen]);

    return (
        <>
            <section id="join" className="about">
            <div className="container">
                <div className="section-title" data-aos="fade-up">
                    <h2>Entre para o Grupo</h2>
                    <p>Faça parte da nossa família e viva momentos inesquecíveis de fé e amizade</p>
                </div>

                <div className="about-content">
                    <div className="about-text" data-aos="fade-right">
                        <h2>Junte-se a Nós</h2>
                        <p>O Totus Tuus Marie está sempre de portas abertas para receber novos membros. Se você deseja viver sua fé de forma alegre e dinâmica, em comunidade com outros jovens, venha fazer parte do nosso grupo!</p>
                        <p>Nossos encontros acontecem todos os terceiros sabádos às 16h30. Além disso, temos momentos de adoração e, claro, nossas viagens especiais!</p>
                        
                        <div className="about-features">
                            <a href="https://maps.app.goo.gl/9WknXmTqAhxU29pMA">
                            <div className="feature-item" data-aos="fade-up" data-aos-delay="100">
                                <div className="feature-icon">
                                    <FontAwesomeIcon icon={faLocationDot} />
                                </div>
                                <div className="feature-text">
                                    <h3>Local</h3>
                                    <p>Paróquia São José Operário</p>
                                </div>
                            </div>
                            </a>
                            
                            <div className="feature-item" data-aos="fade-up" data-aos-delay="200">
                                <div className="feature-icon">
                                    <FontAwesomeIcon icon={faClock} />
                                </div>
                                <div className="feature-text">
                                    <h3>Horário</h3>
                                    <p>Terceiros Sabádos, às 16:30</p>
                                </div>
                            </div>
                            
                            <div className="feature-item" data-aos="fade-up" data-aos-delay="400">
                                <div className="feature-icon">
                                    <FontAwesomeIcon icon={faHeart} />
                                </div>
                                <div className="feature-text">
                                    <h3>Espírito</h3>
                                    <p>Disposição para viver a fé com alegria</p>
                                </div>
                            </div>
                            
                            <button ref={buttonRef} id="saibaMaisBtn" className="btn btn-primary" onClick={openModal}><FontAwesomeIcon icon={faCalendarDays} /> Veja sobre o Próximo encontro...</button>
                        </div>
                        
                        <a href="https://chat.whatsapp.com/FQNHOTFcpTh9pGIxXaoQco" className="btn btn-primary" style={{marginTop: '30px'}}>Entre em Contato</a>
                    </div>
                        
                        <div className="about-image" data-aos="fade-left">
                        <img src={imagem2} alt="Grupo Totus Tuus Marie" />
                        </div>
                </div>
            </div>
        </section>

        {/* MODAL DE NOVOS ENCONTROS */}
        <div id="eventoModal" ref={modalRef}className={`modal ${isModalOpen ? 'active' : ''}`}>
                <div className="modal-content">
                    <button className="close-btn" onClick={closeModal}>
                    <FontAwesomeIcon icon={faX} />
                    </button>

                    <div className="modal-header"></div>

                    <div className="modal-body">
                        <div className="event-image floating">
                            <img src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" alt="Evento" />
                        </div>
                        
                        <div className="event-details">
                            <div className="detail-card animate-delay-1">
                                <div className="detail-icon">
                                    <FontAwesomeIcon icon={faCalendarDays} />
                                </div>
                                <h3 className="detail-title">Data</h3>
                                <p className="detail-value">21 de Junho de 2025</p>
                            </div>

                            <div className="detail-card animate-delay-2">
                                <div className="detail-icon">
                                    <FontAwesomeIcon icon={faLocationDot} />
                                </div>
                                <h3 className="detail-title">Local</h3>
                                <p className="detail-value">Paróquia São José Operário</p>
                            </div>
                        </div>
                        
                        <div className="event-description">
                            <p>Junte-se a nós para nosso próximo encontro do grupo Totus Tuus Marie. Teremos:</p>
                            <ul>
                                <li>Momento de oração e adoração</li>
                                <li>Partilha de experiências</li>
                                <li>Formação espiritual</li>
                                <li>Dinâmicas e integração</li>
                            </ul>
                            <p>Venha fazer parte deste momento especial de fé e comunhão!</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Join;