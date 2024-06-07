import React from 'react';
import './header.css'
import Image from "next/image";
import Logo from "../img/Logo.png"

const Header = () => {
  return (
    <header className="App-header">
      <nav className="App-nav">
        <div className="App-logo">
        </div>
        <ul className="App-menu">
          <li><a href="/">INÍCIO</a></li>
          <li><a href="#blue_map">BLUE MAP</a></li>
          <li><a href="#equipe">EQUIPE</a></li>
          <li><a href="/Login">LOGIN</a></li>
          <li><a href="/Cadastro">CADASTRAR</a></li>
          <li><a href="/ApiAdmin">API JAVA ADMIN</a></li>
          <li><a href="/ApiUsuario">API JAVA USUARIO</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;