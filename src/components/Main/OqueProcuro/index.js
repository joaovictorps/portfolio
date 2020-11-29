import React from 'react';

export default function OqueProcuro({titulo, texto}) {
    return(
        <section id='oqueProcuro'>
            <h2>{titulo}</h2>
            <p>{texto}</p>
        </section>
    )
}