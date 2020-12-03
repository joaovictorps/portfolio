import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

import './style.css';

export default function Navbar() {

    function menu() {
        let menu = document.getElementById('menu');

        if(menu.classList.contains('none')) {
            menu.classList.remove('none');

        } else {
            menu.classList.add('none');
        }
    }

    return (
        <nav id='navbar'>
            <AiOutlineMenu size={32} onClick={menu} className='icon-menu'/>
            <ul id='menu' className='none'>
                <li><a href='#sobreMim'>Sobre Mim</a></li>
                <li><a href='#ondeAprendi'>Jornada</a></li>
                <li><a href='#portfolio'>Portfolio</a></li>
                <li><a href='#contato'>Contato</a></li>
            </ul>
        </nav>
    )
}