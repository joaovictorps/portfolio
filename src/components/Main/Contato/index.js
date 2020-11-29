import React from 'react';

export default function Contato({ telefone, email, local, titulo }) {
    return (
        <section id='contato'>
            <h2>{titulo}</h2>

            <label>Celular (Apenas Whatsapp):</label>
            <p>{telefone}</p>

            <label>Email:</label>
            <p>{email}</p>

            <label>Local:</label>
            <p>{local}</p>
        </section>
    )
}