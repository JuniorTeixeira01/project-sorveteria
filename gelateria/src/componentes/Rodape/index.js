import React from 'react';
import './style.css'
import './mobile.css';

const Rodape = () => (
    <footer>
        <section className='secao-final'>
            <img className='secao-final_imagem' src = 'assets/logo.png' alt='Imagem de Logo' />
            <div className='secao-final_container'>
                <h2>ENDEREÇO</h2>
                <p>Av. Bernadino de campos, 98 </p> 
                <p> São Paulo, SP 12345-678</p>
            </div>
            <div className='secao-final_container'>
            <h2>CONTATO</h2>
                <p>info@meusite.com</p> 
                <p>Tel (11) 3456-7890</p>
            </div>
            <div className='secao-final_container'>
            <h2>HORÁRIOS</h2>
                <p>ABERTO TODOS OS DIAS</p> 
                <p>10:00 - 22:00</p>
            </div>
        </section>
        <section className = "secao-final_rodape">
            <p>Gelateria. Orgulhosamente desenvolvido por Junior Teixeira</p>
        </section>
    </footer>
);

export default Rodape;