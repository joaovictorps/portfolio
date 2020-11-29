import React from 'react';
import Icones from './Icones';

export default function Habilidades({titulo, habilidades}) {
    return(
        <section id='habilidades'>
            <h2>{titulo}</h2>
            {habilidades.map((habilidade, index) => {
                return <p key={index}>{habilidade}</p>
            })}
            <Icones />
        </section>
    )
}