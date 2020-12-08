import React from 'react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

export default function Banner() {
    return (
        <div id='banner'>
            <div className='imagem'></div>
            <div className='apresentacao'>

                <div className='boas-vindas'>
                    <h1>Olá,</h1>
                    <h1>Meu nome é João,</h1>
                    <p>Desenvolvedor Front End Jr.</p>

                </div>

                <div className='redes-banner'>
                    <a href='https://www.linkedin.com/in/jo%C3%A3o-victor-50a050156/' target='_blank' rel='noreferrer'><AiFillLinkedin size={28} className='icon' /></a>
                    <a href='https://github.com/joaovictorps' target='_blank' rel='noreferrer'><AiFillGithub size={28} className='icon'/></a>
                </div>

                <div className='nav-banner'>
                    <a href='#sobreMim'>SOBRE MIM</a>
                    <a href='#portfolio' className='btn-portfolio'>PORTFOLIO</a>
                </div>

            </div>


        </div>
    )
}