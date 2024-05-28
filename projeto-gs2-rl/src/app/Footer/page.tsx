import React from 'react';
import './footer.css'

const Footer = () => {
  return (
    <footer className="App-footer">
      <div className="App-footer-logo">
        <h1>Logo</h1>
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
            <img src="https://i.ibb.co/s68C2gV/app-store.png" alt="App Store" />
          </a>
          <a href="#">
            <img src="https://i.ibb.co/hV5x3rG/google-play.png" alt="Google Play" />
          </a>
        </div>
      </div>
      <p className="App-copyright">&copy; 2024 Nome Marca. Todos direitos reservados.</p>
    </footer>
  );
};

export default Footer;