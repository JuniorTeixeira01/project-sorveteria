import React from 'react';
import './style.css';
import './mobile.css';
import Topo from '../../componentes/Topo';
import Rodape from '../../componentes/Rodape';

const Sabores = () => (
    <div>
        <Topo />
        <main>
            <section className='container-banner'>
                <h1>NOSSOS SABORES</h1>
            </section>
            <section className='container-cards'>
                <h2>SABORES DE SORVETE</h2>
                <div className='container-cards_cards'>
                    <div className='cards'>
                      <img src='assets/sabor-oreo.png' alt='Imagem Oreo' />
                      <h3>Sorvete de Oreo</h3>
                      <p>Delicioso sorvete sabor oreo. Uma explosão de sabor.</p>
                    </div>
                    <div className='cards'>
                      <img src='assets/sabor-pistache.png' alt='Imagem Pistache' />
                      <h3>Sorvete Pistache</h3>
                      <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
                    </div>
                    <div className='cards'>
                      <img src='assets/sabor-cookies-avela.png' alt='Imagem Avelã' />
                      <h3>Sorvete Cookies & Avelã</h3>
                      <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
                    </div>
                    <div className='cards'>
                      <img src='assets/sorbet-kiwi.png' alt='Imagem Kiwi' />
                      <h3>Sorvete de Kiwi</h3>
                      <p>Delicioso e refrescante sorvete sbor kiwi rico em vitamina C</p>
                    </div>
                    <div className='cards'>
                      <img src='assets/sorbet-morango.png' alt='Imagem Morango' />
                      <h3>Sorvete de Morango</h3>
                      <p>Sorvete de morango Gormet. Tradicional e saboroso</p>
                    </div>
                    <div className='cards'>
                      <img src='assets/sorbet-limao.png' alt='Imagem Limão' />
                      <h3>Sorvete de Limão siciliano</h3>
                      <p>O incrível sorvete gormet de limão siciliano vai te encantar.</p>
                    </div>
                </div>
            </section>
        </main>
        <Rodape />
    </div>
);

export default Sabores;