import React from 'react';
import Image from "next/image";
import './header.css';

const Header = () =>{
    return(
        <>
        <div className="content">
        <header>
        
        <nav>
            <ul className="menor">
                <li><a href="/Empresa">1</a></li>
                <li><a href="/Acessibilidade">2</a></li>
                <li><a href="/Integrantes">3</a></li>
                <li><a href="/Login">4</a></li>
                <li><a href="/Cadastro">5</a></li>
            </ul>
        </nav>
    </header>
                </div>
        </>
    )
}
export default Header;