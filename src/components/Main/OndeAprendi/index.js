import React from 'react';

export default function OndeAprendi({ titulo, texto }) {
    return (
        <section id='ondeAprendi'>
            <h2>{titulo}</h2>
            <p className='texto'>{texto}</p>

            <p>Você pode conferir meu perfil no DevMedia <a href="https://www.devmedia.com.br/perfil/joao-victor-pereira-da-silva-1" target='_blank'>clicando aqui.</a></p>
        </section>
    )
}