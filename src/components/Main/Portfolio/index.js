import React from 'react';
import Card from './Card';

import './style.css';

import portfolio from '../../../img/imagens-portfolio/portfolio-bootstrap.png';
import portfolioHtmlCss from '../../../img/imagens-portfolio/portfolio-html-css.png';
import layout from '../../../img/imagens-portfolio/portfolio-layout.png';
import layoutPizzaria from '../../../img/imagens-portfolio/portfolio-layout-pizzaria.png';
import happyWeb from '../../../img/imagens-portfolio/portfolio-happy-web.png';
import proffy from '../../../img/imagens-portfolio/portfolio-proffy.png';
import bts from '../../../img/imagens-portfolio/portfolio-bts.png';

export default function Portfolio({ titulo, texto }) {
    return (
        <section id='portfolio'>
            <header>
                <h2>{titulo}</h2>
                <p>{texto}</p>
            </header>

            <div className='cards'>

                <Card imagem={portfolio} descricao='Minha primeira página de portfolio, desenvolvida com bootstrap.' link='https://joaovictorps.github.io/' />

                <Card imagem={portfolioHtmlCss} descricao='Página de portfolio, apenas com Html e Css.' link='https://joaovictorps.github.io/minha_pagina/' />

                <Card imagem={layout} descricao='Teste de layout, desenvolvido para um processo seletivo.' link='https://joaovictorps.github.io/teste-layout/' />

                <Card imagem={layoutPizzaria} descricao='Layout de uma pizzaria fictícia.' link='https://joaovictorps.github.io/pizzaria/' />

                <Card imagem={proffy} descricao='Projeto desenvolvido na Next Level Week 2.' link='https://github.com/joaovictorps/projeto-nlw' />

                <Card imagem={happyWeb} descricao='Projeto desenvolvido na Next Level Week 3.' link='https://github.com/joaovictorps/happy' />

                <Card imagem={bts} descricao='Líder do grupo, responsável pelo back-end, requisições e fiz sistema de autenticação com JWT e MongoDB' link='https://github.com/diegohpedro/Bug-tracking-system' />

            </div>

            
        </section>
    )
}