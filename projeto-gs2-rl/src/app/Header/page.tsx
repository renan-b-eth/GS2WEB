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
          <li>Inicio</li>
          <li>Quem Somos</li>
          <li>O que Fazemos</li>
          <li>Proposta</li>
          <li>Contato</li>
          <li>Cadastro</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;