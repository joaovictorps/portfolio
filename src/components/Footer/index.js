import React from 'react';
import {FaLinkedinIn, FaGithub} from 'react-icons/fa';

import gitHub from '../../img/icones/github-contato.svg';
import linkedin from '../../img/icones/linkedin-contato.svg';

import './style.css';

export default function Footer() {
    return (
        <footer id='footer'>

            <div>
                <p>João Victor ® 2020</p>
            </div>

            <nav className='nav-footer'>
                <a href='#header'>Início</a>
                <a href='#sobreMim'>Sobre</a>
                <a href='#ondeAprendi'>Jornada</a>
                <a href='#'>Portifolio</a>
                <a href='#contato'>Contato</a>
            </nav>

            <div className='redes'>
                <FaLinkedinIn color='#ffffff' className='icon' />
                <FaGithub color='#ffffff' className='icon' />
            </div>

        </footer>
    )
}