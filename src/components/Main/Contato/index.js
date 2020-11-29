import React from 'react';
import { AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai';
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function Contato({ telefone, email, local, titulo }) {
    return (
        <section id='contato'>
            <p className='frase'>Vamos programar um mundo melhor?</p>
            <h2>{titulo}</h2>

            <div className='row'>

                <AiOutlineWhatsApp size={22} className='icon' color={'#495057'} />
                <label><span>Celular (Whatsapp):</span><p>{telefone}</p></label>
            </div>

            <div className='row'>

                <AiOutlineMail size={22} className='icon' color={'#495057'}/>
                <label>  <span>Email:</span><p>{email}</p></label>
            </div>

            <div className='row'>

                <FaMapMarkerAlt size={22} className='icon' color={'#495057'} />
                <label><span>Local:</span><p>{local}</p></label>
            </div>

        </section>
    )
}