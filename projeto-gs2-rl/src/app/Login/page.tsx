"use client"
import React, { useState, useEffect} from 'react';
import Image from "next/image";
import './login.css'; 
import Header from '../Header/page'; 
import Footer from '../Footer/page'; 
import { Admin } from '../../../Admin'; 
import axios from 'axios';


const Login = () => {
  const [admins, setAdmins] = useState<Admin[]>([]);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [loginSuccessful, setLoginSuccessful] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/ProjetoGS2-JAVA/rest/admin'); // Use a secure API endpoint for production
        setAdmins(response.data);
      } catch (error) {
        console.error('Error fetching admins:', error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setErrorMessage(''); 

    const { email, password } = formData;

    if (!email || !password) {
      setErrorMessage('Por favor entre com seu email ou senha');
      return;
    }

    try {
      const foundAdmin = admins.find((admin) => admin.senha === email);

      if (!foundAdmin) {
        setErrorMessage('Email ou senha invalida !');
        return;
      }

      if (foundAdmin.senha2 !== password) { 
        setErrorMessage('Email ou senha invalida !');
        return;
      }

      setLoginSuccessful(true);
    } catch (error) {
      console.error('Error during login:', error);
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <>
      <Header></Header>
      <h1>FORMULARIO LOGIN ADMIN</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="text" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
          Senha:
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </label>
        <input type="submit" value="Logar" />
        <br />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {loginSuccessful && <p className="success-message">Login Sucessido!</p>}
      </form>
      <Footer></Footer>
    </>
  );
};

export default Login;