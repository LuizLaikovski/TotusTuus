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
                            <img data-aos="fade-rig ht" src={imagem1} alt="Grupo de Jovens Totus Tuus" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;






// import { faBookOpenReader, faPersonPraying, faRoute } from '@fortawesome/free-solid-svg-icons';
// import './about.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import imagem1 from './imagem 51.jpg';
// import { useEffect } from 'react';
// import 'aos/dist/aos.css'; // Importe o CSS do AOS

// function About() {
//     useEffect(() => {
//         // Carrega o script do AOS
//         const script = document.createElement('script');
//         script.src = "https://unpkg.com/aos@next/dist/aos.js";
//         script.async = true;
        
//         script.onload = () => {
//             // Inicializa o AOS após o script carregar
//             window.Aos.init({
//                 easing: 'ease-in-out',
//                 once: true,
//                 duration: 1000
//             });
//         };
        
//         document.body.appendChild(script);
    
//         return () => {
//             document.body.removeChild(script);
//         };
//     }, []);

//     return(
//         <>
//             <section id="about" className="about">
//                 <div className="container">
//                     <div className="section-title" data-aos="fade-up">
//                         <h2>Quem Somos</h2>
//                         <p>Conheça o grupo de oração jovem Totus Tuus Marie e nossas atividades</p>
//                     </div>
                    
//                     <div className="about-content">
//                         <div className="about-text" data-aos="fade-right">
//                             <h2 data-aos="fade-up" data-aos-delay="100">Totus Tuus Marie</h2>
//                             <p data-aos="fade-up" data-aos-delay="150">Somos um grupo de oração jovem católico que busca viver a fé de forma alegre e dinâmica. Nosso nome "Totus Tuus Marie" (Todo Teu, Maria) reflete nossa devoção à Nossa Senhora e nosso desejo de seguir a Jesus através de Maria.</p>
//                             <p data-aos="fade-up" data-aos-delay="200">Realizamos encontros mensais aos terceiros sábados do mês, momentos de adoração e também organizamos viagens para fortalecer nossa fé e nossa amizade.</p>
                            
//                             <div className="about-features">
//                                 <div className="feature-item" data-aos="fade-up" data-aos-delay="100">
//                                     <div className="feature-icon">
//                                         <FontAwesomeIcon icon={faPersonPraying} />
//                                     </div>
//                                     <div className="feature-text">
//                                         <h3>Oração</h3>
//                                         <p>Momentos de oração e adoração ao Santíssimo Sacramento.</p>
//                                     </div>
//                                 </div>
                                
//                                 <div className="feature-item" data-aos="fade-up" data-aos-delay="200">
//                                     <div className="feature-icon">
//                                         <FontAwesomeIcon icon={faBookOpenReader} />
//                                     </div>
//                                     <div className="feature-text">
//                                         <h3>Formação</h3>
//                                         <p>Estudos bíblicos e formação na fé católica.</p>
//                                     </div>
//                                 </div>
                                
//                                 <div className="feature-item" data-aos="fade-up" data-aos-delay="300">
//                                     <div className="feature-icon">
//                                         <FontAwesomeIcon icon={faRoute} />
//                                     </div>
//                                     <div className="feature-text">
//                                         <h3>Viagens</h3>
//                                         <p>Viagens de integração.</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
                        
//                         <div className="about-image" data-aos="fade-left" data-aos-delay="200">
//                             <img src={imagem1} alt="Grupo de Jovens Totus Tuus" />
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }

// export default About;