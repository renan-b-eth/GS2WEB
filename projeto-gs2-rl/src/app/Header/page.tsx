import React from 'react';
import './header.css'

const Header = () => {
  return (
    <header className="App-header">
      <nav className="App-nav">
        <div className="App-logo">
          <h1>LOGO AQUI</h1>
        </div>
        <ul className="App-menu">
          <li><a href="/">Inicio</a></li>
          <li><a href="/">Quem Somos</a></li>
          <li><a href="/">O que Fazemos</a></li>
          <li><a href="/">Proposta</a></li>
          <li><a href="/">Contato</a></li>
          <li><a href="/">Cadastro</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;