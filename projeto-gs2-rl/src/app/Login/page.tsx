import React from 'react';
import Image from "next/image";
import './login.css'
import Header from '../Header/page';
import Footer from '../Footer/page';


const Login = () => {
  return (
    <>
    <Header></Header>
    <h1>FORMULARIO LOGIN ADMIN</h1>
    <form>
      <label>
        Email:
        <input type="text" name="email" />
      </label>
      <label>
        Senha:
        <input type="password" name="senha" />
      </label>
      
      <input type="submit" value="Logar" /><br></br>
    </form>
    <Footer></Footer>
    </>
  );
};

export default Login;