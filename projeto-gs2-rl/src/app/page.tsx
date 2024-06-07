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
        <p></p>
          <div className="App-product posicao">
            <Image src={Imagem3} alt="Google" className="tamanho" />
            <h3>Titulo</h3>
            <p>Texto</p>
            <button>SABER MAIS</button>
          </div>
      </section>
      <section className="App-mosques">
        <h2>O que fazemos</h2>
        <Image src={Imagem4} alt="Google" className="" />
        <button>BOTAO</button>
      </section>
      <section className="App-business" id="equipe">
        <h2>EQUIPE</h2>
        <div className="content-card">
                    <div className="card-integrantes"><Image src={Renan} alt="Landscape picture" width={250} height={250} className='card efeito2'/></div>
                    <div className="descricao"><p>Renan Bezerra dos Santos</p><p>RM - 553228</p></div>
                    <div className="card-integrantes"><Image src={Lucas} alt="Landscape picture" width={250} height={250} className='card efeito2'/></div>
                    <div className="descricao"><p>Lucas Alcântara Carvalho</p><p>RM - 95111</p></div>
        </div>
      </section>
    </main>
    <Footer></Footer>
    </>
  );
}
