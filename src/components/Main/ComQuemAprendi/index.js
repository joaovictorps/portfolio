import React, {useState} from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

export default function ComQuemAprendi({titulo, profs}) {
    const [index, setIndex] = useState(0);

    function right() {
        if (index === profs.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    }

    function left() {
        let ultimoItem = profs.length - 1;
        if (index === 0) {
            setIndex(ultimoItem);
        } else {
            setIndex(index - 1);
        }
    }

    return (
        <section id='comQuemAprendi'>
            <div>
                <img src={profs[index].foto} />

                <div className='botoes-nome'>
                    <AiOutlineLeft onClick={left}/>
                    <p>{profs[index].nome}</p>
                    <AiOutlineRight onClick={right}/>
                </div>
            </div>

            <div className='titulo-texto'>
                <h2>{titulo}</h2>
                <p>{profs[index].texto}</p>
            </div>
        </section>
    )
}