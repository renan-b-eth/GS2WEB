import React from 'react';
import Image from "next/image";
import './ApiAdmin.css'
import Header from '../Header/page';
import Footer from '../Footer/page';
import Admin from '../Admin/page';


const ApiAdmin = () => {
  return (
    <>
    <Header></Header>
    <Admin></Admin>
    <Footer></Footer>
    </>
  );
};

export default ApiAdmin;