"use client"
import Footer from "./Footer/page";
import Header from "./Header/page"
import Image from "next/image";
import './globals.css'
import Imagem1 from "../app/img/oceano1.jpg"
import Imagem2 from "../app/img/oceano2.jpg"
import Imagem3 from "../app/img/oceano3.jpg"
import Imagem4 from "../app/img/oceano4.jpg"
import Imagem5 from "../app/img/oceano5.jpg"
import Imagem6 from "../app/img/oceano6.jpg"
import Renan from "../app/img/fotorenan.png"
import Lucas from "../app/img/fotolucas2.png"
import Imagem7 from "../app/img/oceano7.jpg"
import Imagem8 from "../app/img/oceano8.jpg"
import Admin from "./Admin/page";
import React, { useState, useEffect } from 'react';
import Youtube from "./Youtube/page";


export default function Home() {

  const [userTitle, setUserTitle] = useState(''); 

  useEffect(() => {
    
    const storedTitle = localStorage.getItem('nome'); 
    if (storedTitle) {
      setUserTitle("Bem-vindo, "+storedTitle);
    }
  }, []);



  return (
    <>
    <Header></Header>
    <h1>{userTitle}</h1>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Bai+Jamjuree:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Grotesk:wght@300..700&display=swap');
    </style>
    <main className="App-main">
      <div className="background">
      </div>
        <section className="App-products" id="blue_map">
          <h2>BLUE MAP</h2>
          <div className="textos">
            <p>Bem-vindo ao Mapa Interativo de Áreas Marinhas e Costeiras Protegidas! 
              Este projeto inovador surgiu de uma parceria entre acadêmicos dedicados, a FIAP e a Softtek
              com a missão de tornar mais acessíveis e compreensíveis as informações sobre nossas áreas marinhas protegidas.
            </p>
            <h4>MAPA INTERATIVO</h4>
            <p>Este mapa interativo permite explorar detalhes importantes das áreas marinhas e costeiras protegidas, fornecendo informações 
            detalhadas como nome da unidade de conservação, cadastro nacional, ano de criação, esfera administrativa e muito mais.</p>
          </div>
          <div className="App-product posicao">
            <Youtube></Youtube>
          </div>
        </section>
        <section className="App-mosques">
          <h2>POR QUE USAR O BLUE MAP?</h2>
          <ul>
            <li>Precisão e Atualização: Dados confiáveis e atualizados sobre áreas protegidas.</li>
            <li>Facilidade de Uso: Interface intuitiva para uma experiência de usuário amigável.</li>
            <li>Educação Ambiental: Ferramenta educativa para estudantes, pesquisadores e ambientalistas.</li>
            <li>reservação dos Ecossistemas: Contribuição para a preservação dos nossos mares e costas.</li>
          </ul>
        </section>
    </main>
    <Footer></Footer>
    </>
  );
}
