import React from 'react';
import {AiOutlinePlus} from 'react-icons/ai';

export default function Card({imagem, descricao, link}) {
    return (
        <div className='card'>
            <img src={imagem} />
            <div className='descricao'>
                <p>{descricao}</p>
                <a href={link} target='_blank'><AiOutlinePlus size={22} /></a>
            </div>
        </div>
    )
}