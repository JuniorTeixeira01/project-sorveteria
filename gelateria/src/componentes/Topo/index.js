import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import './mobile.css';

const Topo = () => (
    <header>
        <section className='container-topo'>
            <img className='imagem-topo' src='assets/logo.png' alt='Imagem de Logo' />
            <nav className='container-links'>
                <Link className='link-topo' to='/'>Home</Link>
                <Link className='link-topo' to='/Sabores'>Sabores</Link>
                <Link className='link-topo' to='/Sobre'>Sobre</Link>
            </nav>
        </section>

    </header>
);

export default Topo;