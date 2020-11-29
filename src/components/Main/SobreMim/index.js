import React from 'react';

export default function SobreMim({titulo, texto, imagem}) {
    return(
        <section id='sobreMim'>
            <img src={imagem} alt='Foto de perfil.' />

            <div>
                <h2>{titulo}</h2>
                <p>{texto}</p>
            </div>
        </section>
    )
}