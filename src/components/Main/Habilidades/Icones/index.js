import React from 'react';

import typescript from '../../../../img/icones/typescript.svg';
import javascript from '../../../../img/icones/javascript.svg';
import html from '../../../../img/icones/html.svg';
import css from '../../../../img/icones/css.svg';
import react from '../../../../img/icones/react.svg';
import node from '../../../../img/icones/node.svg';
import git from '../../../../img/icones/git.svg';
import bootstrap from '../../../../img/icones/bootstrap.svg';
import postgresql from '../../../../img/icones/postgresql.svg';
import mongodb from '../../../../img/icones/mongodb.svg';

import './style.css';

export default function Icones() {

    return(
        <div id='icones'>
            <img className='redondos' src={javascript} alt='JavaScript' title='JavaScript'/>
            <img className='redondos' src={typescript} alt='TypeScript'title='TypeScript'/>
            <img src={html} alt='HTML' title='HTML'/>
            <img src={css} alt='CSS' title='CSS'/>
            <img src={react} alt='ReactJS' title='ReactJS'/>
            <img src={react} alt='React Native' title='React Native'/>
            <img src={bootstrap} alt='Bootstrap' title='Bootstrap'/>
            <img src={node} alt='NodeJS' title='NodeJS'/>
            <img src={git} alt='Git' title='Git'/>
            <img src={mongodb} alt='MongoDB' title='MongoDB'/>
            <img src={postgresql} alt='PostgreSQL' title='PostgreSQL'/>
        </div>
    )
}