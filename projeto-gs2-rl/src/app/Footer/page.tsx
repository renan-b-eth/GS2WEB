import React from 'react';
import Image from "next/image";
import './footer.css'
import Google from "../img/play.png"
import Apple from "../img/apple.png"
import Logo from "../img/Logo.png"

const Footer = () => {
  return (
    <footer className="App-footer">
      <div className="App-footer-logo">
        <Image src={Logo} alt="Logo" className="tamanho" />
        <p>Texto para colocar</p>
        <h3>Siga-nos</h3>
        <ul className="App-social-media">
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">YouTube</a></li>
        </ul>
      </div>
      <div className="App-footer-links">
        <h3>Links Rapidos</h3>
        <ul>
          <li><a href="#">Privacidade de politica</a></li>
          <li><a href="#">Termos ou reports</a></li>
          <li><a href="#">Qualidade da água</a></li>
          <li><a href="#">Produtos</a></li>
          <li><a href="#">Mapas</a></li>
        </ul>
      </div>
      <div className="App-footer-contact">
        <h3>Contato</h3>
        <p>FIAP - Paulista, Av. Paulista, 1106 - 7º andar - Bela Vista, São Paulo - SP, 01311-000</p>
        <p>+551195484857</p>
        <p>water@water.com</p>
        <p>Baixe nosso App</p>
        <div className="App-app-store">
          <a href="#">
            <Image src={Apple} alt="Apple" className="tamanho" />
          </a>
          <a href="#">
            <Image src={Google} alt="Google" className="tamanho" />
          </a>
        </div>
      </div>
      <p className="App-copyright">&copy; 2024 Nome Marca. Todos direitos reservados.</p>
      <p className="">RENAN BEZERRA DOS SANTOS - RM: 553228 - 1TDSPB</p>
      <p className="">LUCAS ALCANTARA CARVALHO - RM: XXXX - 1TDSPB</p>
    </footer>
  );
};

export default Footer;