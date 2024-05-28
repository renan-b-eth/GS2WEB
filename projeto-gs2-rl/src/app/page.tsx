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
import Imagem7 from "../app/img/oceano7.jpg"
import Imagem8 from "../app/img/oceano8.jpg"

export default function Home() {
  return (
    <>
    <Header></Header>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Grotesk:wght@300..700&display=swap');
    </style>
    <main className="App-main">
      <section className="App-hero">
        <h2 className="color-fonte">Navegue pela Vida Marinha: Descubra <span className="cor-azul">Áreas Marinhas</span> Protegidas em um Mapa Interativo</h2>
        <p className="fonte">O projeto consiste no desenvolvimento de um mapa interativo de áreas marinhas protegidas. A iniciativa visa criar uma ferramenta online que forneça informações sobre as áreas ao redor do mundo dedicadas à conservação marinha. O mapa destacará informações essenciais sobre cada área, como nome, localização e tipo de proteção. O objetivo principal é aumentar a conscientização sobre a importância da conservação marinha e incentivar a preservação dos ecossistemas oceânicos.</p>
        <button>BOTAO</button>
      </section>
      <section className="App-products">
        <h2>Quem Somos</h2>
        <p>Texto</p>
        <div className="App-products-grid">
          <div className="App-product">
            <Image src={Imagem1} alt="Google" className="tamanho" />
            <h3>Titulo</h3>
            <p>texto</p>
            <button>SABER MAIS</button>
          </div>
          <div className="App-product">
            <Image src={Imagem2} alt="Google" className="tamanho" />
            <h3>Titulo</h3>
            <p>texto</p>
            <button>SABER MAIS</button>
          </div>
          <div className="App-product">
            <Image src={Imagem3} alt="Google" className="tamanho" />
            <h3>Titulo</h3>
            <p>Texto</p>
            <button>SABER MAIS</button>
          </div>
        </div>
      </section>
      <section className="App-mosques">
        <h2>O que fazemos</h2>
        <Image src={Imagem4} alt="Google" className="" />
        <button>BOTAO</button>
      </section>
      <section className="App-mosques">
        <h2>Proposta</h2>
        <Image src={Imagem4} alt="Google" className="" />
        <button>BOTAO</button>
      </section>
      <section className="App-business">
        <h2>Contato</h2>
        <p>Formulario aqui</p>
        <p>Formulario aqui</p>
        <p>Formulario aqui</p>
      </section>
      <section className="App-gallery">
      <Image src={Imagem8} alt="Google" className="" />
      </section>
    </main>
    <Footer></Footer>
    </>
  );
}