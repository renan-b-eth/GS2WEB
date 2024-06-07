"use client"
import React from 'react';
import './footer.css'
import Renan from "../app/img/fotorenan.png"
import Lucas from "../app/img/fotolucas2.png"
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="App-footer">
      
      <p className="">RENAN BEZERRA DOS SANTOS - RM: 553228 - 1TDSPB</p>
      <p className="">LUCAS ALCÂNTARA CARVALHO - RM: 95111 - 1TDSPB</p>
      <p className="App-copyright">&copy; 2024 Blue Map. Todos direitos reservados.</p>
    </footer>
  );
};

export default Footer;