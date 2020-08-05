import React from 'react';

import whatsappicon from '../../assets/images/icons/whatsapp.svg';

import './style.css';

function TeacherItem(){
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/49698910?s=460&u=746e48763b00e14f4007f9084930d83bc411b7f9&v=4" alt="Joao Victor"/>
                <div>
                    <strong>Nome do professor</strong>
                    <span>
                            Químico
                    </span>
                </div>
            </header>
            
            <p>
                Entusiasta das melhores tecnologías de química avançada.
                <br/><br/>
                Apaixonado por explodir coisas em laboratórios e por mudar a vida das pessoas através de experiencias. Mais de 200 000 pessoas já passaram por uma das minhas explosões.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappicon} alt="whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
};

export default TeacherItem;