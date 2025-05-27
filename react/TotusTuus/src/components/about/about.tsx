import { faBookOpenReader, faPersonPraying, faRoute } from '@fortawesome/free-solid-svg-icons';
import './about.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import imagem1 from './imagem 51.jpg';


function About() {
    return(
        <>
            <section id="about" className="about">
                <div className="container">
                    <div className="section-title" data-aos-delay="400" data-aos="fade-up">
                        <h2>Quem Somos</h2>
                        <p>Conheça o grupo de oração jovem Totus Tuus Marie e nossas atividades</p>
                    </div>
                    
                    <div className="about-content">
                        <div className="about-text">
                            <h2>Totus Tuus Marie</h2>
                            <p>Somos um grupo de oração jovem católico que busca viver a fé de forma alegre e dinâmica. Nosso nome "Totus Tuus Marie" (Todo Teu, Maria) reflete nossa devoção à Nossa Senhora e nosso desejo de seguir a Jesus através de Maria.</p>
                            <p>Realizamos encontros mensais aos terceiros sábados do mês, momentos de adoração e também organizamos viagens para fortalecer nossa fé e nossa amizade.</p>
                            
                            <div className="about-features">
                                <div className="feature-item" data-aos="fade-up" data-aos-delay="100">
                                    <div className="feature-icon">
                                        <FontAwesomeIcon icon={faPersonPraying} />
                                    </div>
                                    <div className="feature-text">
                                        <h3>Oração</h3>
                                        <p>Momentos de oração e adoração ao Santíssimo Sacramento.</p>
                                    </div>
                                </div>
                                
                                <div className="feature-item" data-aos="fade-up" data-aos-delay="200">
                                    <div className="feature-icon">
                                        <FontAwesomeIcon icon={faBookOpenReader} />
                                    </div>
                                    <div className="feature-text">
                                        <h3>Formação</h3>
                                        <p>Estudos bíblicos e formação na fé católica.</p>
                                    </div>
                                </div>
                                
                                <div className="feature-item" data-aos="fade-up" data-aos-delay="400">
                                    <div className="feature-icon">
                                        <FontAwesomeIcon icon={faRoute} />
                                    </div>
                                    <div className="feature-text">
                                        <h3>Viagens</h3>
                                        <p>Viagens de integração.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="about-image" data-aos="fade-left">
                            <img src={imagem1} alt="Grupo de Jovens Totus Tuus" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;