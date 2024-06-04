import React from 'react';
import Image from "next/image";
import './ApiUsuario.css'
import Header from '../Header/page';
import Footer from '../Footer/page';
import Admin from '../Admin/page';
import Usuario from '../Usuario/page';


const ApiUsuario = () => {
  return (
    <>
    <Header></Header>
    <Usuario></Usuario>
    <Footer></Footer>
    </>
  );
};

export default ApiUsuario;