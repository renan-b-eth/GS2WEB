import Footer from "./Footer/page";
import Header from "./Header/page"
import './globals.css'

export default function Home() {
  return (
    <>
    <Header></Header>
    <main className="App-main">
      <section className="App-hero">
        <h2>Titulo</h2>
        <p>Texto</p>
        <button>Compre agora</button>
      </section>
      <section className="App-products">
        <h2>Titulo</h2>
        <p>Texto</p>
        <div className="App-products-grid">
          <div className="App-product">
            <img src="https://i.ibb.co/H2R7Q16/product1.png" alt="Product 1" />
            <h3>Titulo</h3>
            <p>texto</p>
            <button>comprar</button>
          </div>
          <div className="App-product">
            <img src="https://i.ibb.co/FzS5z1S/product2.png" alt="Product 2" />
            <h3>Titulo</h3>
            <p>texto</p>
            <button>Shop</button>
          </div>
          <div className="App-product">
            <img src="https://i.ibb.co/5r4g4tQ/product3.png" alt="Product 3" />
            <h3>Titulo</h3>
            <p>Texto</p>
            <button>Shop</button>
          </div>
        </div>
      </section>
      <section className="App-mosques">
        <h2>Titulo</h2>
        <img src="https://i.ibb.co/R46p9yN/mosques.png" alt="Mosques" />
        <button>BOTAO</button>
      </section>
      <section className="App-business">
        <h2>Titulo</h2>
        <p>Texto</p>
        <p>Texo</p>
        <p>Texto</p>
      </section>
      <section className="App-gallery">
        <img src="https://i.ibb.co/gW94Z7R/gallery.png" alt="Gallery" />
      </section>
    </main>
    <Footer></Footer>
    </>
  );
}