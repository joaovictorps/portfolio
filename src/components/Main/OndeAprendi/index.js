import React from 'react';

export default function OndeAprendi({ titulo, texto }) {
    return (
        <section id='ondeAprendi'>
            <h2>{titulo}</h2>
            <p className='texto'>{texto}</p>

        </section>
    )
}