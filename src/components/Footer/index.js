import React from 'react';
import {FaLinkedinIn, FaGithub} from 'react-icons/fa';

import './style.css';

export default function Footer() {
    return (
        <footer id='footer'>

            <div>
                <p>João Victor 2020</p>
            </div>

            <nav className='nav-footer'>
                <a href='#header'>Início</a>
                <a href='#sobreMim'>Sobre</a>
                <a href='#ondeAprendi'>Jornada</a>
                <a href='#portfolio'>Portifolio</a>
                <a href='#contato'>Contato</a>
            </nav>

            <div className='redes'>
                <a 
                    href='https://www.linkedin.com/in/jo%C3%A3o-victor-50a050156/' 
                    target='_blank'
                    rel='noreferrer' 
                    alt='LinkedIn' 
                    title='João Victor - LinkedIn'><FaLinkedinIn color='#ffffff' className='icon' /></a>
                
                <a 
                    href='https://github.com/joaovictorps' 
                    target='_blank'
                    rel='noreferrer' 
                    alt='GitHub' 
                    title='João Victor - GitHub'><FaGithub color='#ffffff' className='icon' /></a>
                
            </div>

        </footer>
    )
}