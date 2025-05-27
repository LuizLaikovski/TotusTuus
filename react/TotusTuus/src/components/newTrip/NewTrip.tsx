import type React from 'react';
import './newTrip.css';


const NewTrip:React.FC = () => {
    return(
        <>
            <section id='newTrip' className='home'>
                <div className='infoTrip'>
                    <h1 className='title'>#OTOTUSNOBETO</h1>

                    <p>2º Edição do Totus no Beto</p><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> 


                    <p>Data do Evento</p>

                    <h1 className='titleDate'>18 <span className='title'>•</span> 10</h1>
                </div>

                <div className="imgTrip">
                    <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qlXR9P2bMqYaQeHtYIt0hYIOOa4r8M.png" alt="" />
                </div>
            </section>
        </>
    );
};

export default NewTrip;