"use client"

import React from 'react';
import Image from "next/image";
import './cadastro.css'
import Header from '../Header/page';
import Footer from '../Footer/page';
import axios from 'axios'; // npm install axios instalar
import { useEffect, useState } from "react";
import { Admin } from '../../../Admin';
import { Link } from 'react-router-dom'; // Importar Link


  const Cadastro: React.FC = () => {
    const [formData, setFormData] = useState<Admin>({
      id: '',
      nome: '',
      sobrenome: '',
      sexo: '',
      cargo: '',
      email: '',
      senha: '',
      senha2: '',
    });
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = event.target;
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };
  
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
  
      try {
        const response = await axios.post('http://localhost:8080/ProjetoGS2-JAVA/rest/admin', formData);
        console.log('Cadastro realizado com sucesso:', response.data);
              // colocar aqui o login na pagina inicial com nome
              if(formData.senha == formData.senha2){

                alert("ADMIN CADASTRADO COM SUCESSO, TE DIRECIONANDO PARA A PAGINA DE LOGIN");
                <Link to="/Login"></Link>
              }

              if(formData.senha != formData.senha2){
                alert("SENHA ERRADA DIGITE CORRETAMENTE AMBAS IGUAIS")
              }
        
      
      } catch (error) {
        console.error('Falha no cadastro:', error);
        alert("ID REPITIDO TROQUE-O")
        alert(error)
        alert(formData.id + "\n" + formData.nome + "\n" + formData.sobrenome + "\n" + formData.sexo + "\n" + formData.cargo + "\n" + formData.senha + "\n" + formData.senha2)
        
        // erro mensagem
      }
    };

  return (
    <>
    <Header></Header>
    <h1>FORMULARIO CADASTRO ADMIN</h1>
    <form onSubmit={handleSubmit}>
      <label>
        ID:
        <input type="text" name="id" value={formData.id} onChange={handleChange} />
      </label>
      <label>
        Nome:
        <input type="text" name="nome" value={formData.nome} onChange={handleChange} />
      </label>
      <br />
      <label>
        Sobrenome:
        <input type="text" name="sobrenome" value={formData.sobrenome} onChange={handleChange}/>
      </label>
      <label>
        Sexo:
        <input type="checkbox" name="sexo" value="M"  onChange={handleChange}/> Masculino
        <input type="checkbox" name="sexo" value="F" onChange={handleChange}/> Feminino
        <input type="checkbox" name="sexo" value="I" onChange={handleChange} /> Indefinido
      </label>
      <br />
      <label>
        Cargo:
        <input type="text" name="cargo" value={formData.cargo} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="text" name="email" value={formData.email} onChange={handleChange}/>
      </label>
      <label>
        Senha:
        <input type="password" name="senha" value={formData.senha} onChange={handleChange}/>
      </label>
      <label>
        Senha novamente:
        <input type="password" name="senha2" value={formData.senha2} onChange={handleChange} />
      </label>
      <br />
      <br />
      <input type="submit" value="Enviar" /><br></br>
    </form>
    <Footer></Footer>
    </>
  );
};

export default Cadastro;