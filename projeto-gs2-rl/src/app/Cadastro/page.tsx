import React from 'react';
import Image from "next/image";
import './cadastro.css'
import Header from '../Header/page';
import Footer from '../Footer/page';


const Cadastro = () => {
  return (
    <>
    <Header></Header>
    <h1>FORMULARIO CADASTRO ADMIN</h1>
    <form>
      <label>
        Nome:
        <input type="text" name="nome" />
      </label>
      <br />
      <label>
        Sobrenome:
        <input type="text" name="sobrenome" />
      </label>
      <label>
        Email:
        <input type="text" name="email" />
      </label>
      <label>
        Senha:
        <input type="password" name="senha" />
      </label>
      <label>
        Senha novamente:
        <input type="password" name="senha2" />
      </label>
      <br />
      <label>
        Sexo:
        <input type="checkbox" name="sexo" value="M" /> Masculino
        <input type="checkbox" name="sexo" value="F" /> Feminino
        <input type="checkbox" name="sexo" value="I" /> Indefinido
      </label>
      <br />
      <label>
        Cargo:
        <input type="text" name="cargo" value="Admin" readOnly />
      </label>
      <br />
      <input type="submit" value="Enviar" /><br></br>
    </form>
    <Footer></Footer>
    </>
  );
};

export default Cadastro;