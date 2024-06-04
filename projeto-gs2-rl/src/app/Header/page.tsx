import React from 'react';
import './header.css'
import Image from "next/image";
import Logo from "../img/Logo.png"

const Header = () => {
  return (
    <header className="App-header">
      <nav className="App-nav">
        <div className="App-logo">
          <Image src={Logo} alt="Logo"/>
        </div>
        <ul className="App-menu">
          <li><a href="/">Inicio</a></li>
          <li><a href="/">Quem Somos</a></li>
          <li><a href="/">O que Fazemos</a></li>
          <li><a href="/">Proposta</a></li>
          <li><a href="/">Contato</a></li>
          <li><a href="/Cadastro">Cadastro</a></li>
          <li><a href="/Login">Login</a></li>
          <li><a href="/ApiAdmin">API JAVA ADMIN</a></li>
          <li><a href="/ApiUsuario">API JAVA USUARIO</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;