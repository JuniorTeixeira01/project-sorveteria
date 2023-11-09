import React from 'react';
import './style.css';
import './mobili.css';
import Topo from '../../componentes/Topo'
import Rodape from '../../componentes/Rodape'

const Sobre = () => (
    <div>
       <Topo />
       <main>
         <section className='secao-banner-gelateria'>
            <h1>A GELATERIA</h1>
         </section>
         <section className='sobre-nos'>
            <h1>Sobre Nós</h1>
            <h3>Nós simplesmente amamos sorvete!</h3>
            <p>Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada 
                sorvete produzido. Fazemos o melhor sorvete para os nossos clientes 
                e gostamos de receber elogios. Estamos operando desde 2009 com as 
                melhores matéria-primas para a produção final do sorvete. Vendemos 
                tando para varejo como para atacado. <br />
                Nossos clientes podem comprar os nossos sorvetes e degustar
                na nossa loja ou levar para sua residência e aproveitar junto 
                com a família. Também vendemos para estabelecimentos, e criamos 
                eventos como festa de aniversário, formaturas e eventos empresariais.
                 Para contratar os nossos serviços, basta entrar em contato conosco.
                 Iremos proporcionar o melhor atendimento e os melhores produto para 
                 você fazer a sua festa mais saborosa, com o melhor sorvete da 
                 cidade. 
            </p>
         </section>
         <section className='secao-imagens'>
            <img src='assets/sobre-image.jpg' alt= 'Imagem Sobre' />
            <img src=' assets/sorveteria.jpg' alt='Imagem Sorveteria' />
         </section>
       </main>
       <Rodape />
    </div>
);

export default Sobre;