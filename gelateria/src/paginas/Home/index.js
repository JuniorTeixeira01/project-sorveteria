import React from 'react';
import Topo from '../../componentes/Topo';
import Rodape from '../../componentes/Rodape';
import './style.css';
import './mobile.css';


const Home = () => (
    <div>
        <Topo />
        <main>
            <section className='secao-banner'>
                
                <div className='secao-banner_container'>
                    <h1>SORVETE ARTESANAL</h1>
                </div>
            </section>

            <section className='secao-sabores'>
            <img className='secao-sabores_imagem' src='assets/banner-sabores.jpg' alt='Imagem sabores'/>
                <div className='secao-sabores_container'>
                    <h2>NOSSOS SABORES</h2>
                    <span>Novos e deliciosos!</span>
                    <p>Sorvete bom é aquele feito com os melhores ingredientes! 
                        Aqui na Gelateria todos os nossos produtos são naturais,
                        à base de frutas e sem nenhum conservante! Também temos 
                        opção sem lactose e sem açúcar. Venha conhecer e perceber
                        que tem como o sorverte ser delicioso e saudável ao 
                        mesmo tempo!
                    </p>
                </div>
            </section>
            <section className='secao-eventos'>
                <div className='secao-eventos_container'>
                    <h2>NOSSOS EVENTOS</h2>
                    <span>Delicias com sorvete!</span>
                    <p>Mais do que uma sorveteria, uma extensão da sua casa!
                        Estamos aqui prontinhos para te atender e oferecer os melhores
                        eventos com os melhores sorvertes da sua vida! Venha nos 
                        conhecer e passar um tempo aqui com a gente.
                    </p>
                </div>
                <img className='secao-eventos_imagem' src='assets/eventos-image.jpg' alt='Imagem eventos' />
            </section>
            <section className='secao-sobre'>
                <img className='secao-sobre_imagem' src='assets/sobre-image.jpg' alt='Imagem seção sobre' />
                <div className='secao-sobre_container'>
                    <h2>SOBRE NÓS</h2>
                    <span>Alegria em cada casquinha!</span>
                    <p>Venha tomar o melhor sorvete da região aqui com a gente!
                        Nós estamos há anos no mercado produzindo o que tem de 
                        melhor para o nosso cliente e você não pode ficar fora dessa.
                        Venha nos fazer uma visita e aproveitar o melhor atendimento
                        e o melhor sorvete da cidade.
                    </p>
                </div>
            </section>
        </main>
        <Rodape />

    </div>
);

export default Home;