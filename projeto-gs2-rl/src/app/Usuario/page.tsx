"use client"
import React, { useState, useEffect } from 'react';

interface Usuario {
  id_endereco: number;
  id_telefone: number;
  nome: string;
  sobrenome: string;
}

const Usuario: React.FC = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch("http://localhost:8080/ProjetoGS2-JAVA/rest/usuario");
        const usuarioData = await resp.json();
        setUsuarios(usuarioData);
      } catch (error) {
        console.error('Error fetching usuarios:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <section id="lista-de-usuarios">
      {usuarios.map((usuario) => (

        <article key={usuario.nome}>
        <h1>LISTA DE USUARIO CADASTRADO NO BANCO VIA API JAVAWEB</h1>
          <header>Usuario: {usuario.nome}</header>
          <p>Nome: {usuario.nome}</p>
          <p>Sobrenome: {usuario.sobrenome}</p>
          <p>Id Telefone: {usuario.id_telefone}</p>
          <p>Id Endereco: {usuario.id_endereco}</p>
          <br></br>
        </article>
      ))}
    </section>
  );
};

export default Usuario;