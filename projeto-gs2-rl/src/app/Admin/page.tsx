"use client"
import React, { useState, useEffect } from 'react';

interface Admin {
  id: number;
  nome: string;
  sobrenome: string;
  cargo: string;
  email: string;
  sexo: string;
}

const Admin: React.FC = () => {
  const [admins, setAdmins] = useState<Admin[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch("http://localhost:8080/ProjetoGS2-JAVA/rest/admin");
        const adminData = await resp.json();
        setAdmins(adminData);
      } catch (error) {
        console.error('Error fetching admins:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <section id="lista-de-admins">
      {admins.map((admin) => (

        <article key={admin.id}>
        <h1>LISTA DE ADMINS CADASTRADO NO BANCO VIA API JAVAWEB</h1>
          <header>Admin: {admin.nome}</header>
          <p>ID: {admin.nome}</p>
          <p>Nome: {admin.sobrenome}</p>
          <p>Sobrenome: {admin.sexo}</p>
          <p>Sexo: {admin.cargo}</p>
          <p>Cargo: {admin.email}</p>
          <br></br>
        </article>
      ))}
    </section>
  );
};

export default Admin;