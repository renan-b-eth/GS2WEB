"use client"
import React from 'react';
import './footer.css'
import Renan from "../img/fotorenan.png";
import Lucas from "../img/fotolucas2.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="App-footer" id="equipe">
      <div className="content-card">
                    <div className="card-integrantes"><Image src={Renan} alt="Landscape picture" width={250} height={250} className='tamanho2 efeito2'/></div>
                    <div className="descricao"><p>Renan Bezerra dos Santos</p><p>RM - 553228 - 1TDSPB</p></div>
                    <div className="card-integrantes"><Image src={Lucas} alt="Landscape picture" width={250} height={250} className='tamanho2 efeito2'/></div>
                    <div className="descricao"><p>Lucas Alcântara Carvalho</p><p>RM - 95111 - 1TDSPB</p></div>
        </div>

      <p className="App-copyright">&copy; 2024 Blue Map. Todos direitos reservados.</p>
    </footer>
  );
};

export default Footer;