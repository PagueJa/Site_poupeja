import React, { useState, useEffect } from "react";
import './Cadastro.css';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {

    localStorage.removeItem('token');

  }, []);

  const handleRedirect = () => {
    navigate('/login');
  }

  const handleRegistration = async (event) => {

    event.preventDefault();

    if (!name || !email || !password) {
      setError("Todos os campos são obrigatórios!");
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/user/registration', {
        name,
        email,
        password,
      });

      if (response) {
        navigate('/login');
      }

    } catch (err) {

      if (err.response) {

        const errorMessage = err.response.data.error
         || "Erro desconhecido";

        setError(errorMessage);

      } else {
        setError("Erro desconhecido");
      }
    }
    
  };

  return (
    <div className="login-page">
      <div className="login-container">
        
        {/* Coluna Esquerda (Bem Vindo de Volta) */}
        <div className="login-left">
          <h2>Bem Vindo de Volta!</h2>
          <p>Para continuar conectado conosco, faça login com suas informações pessoais</p>
          <button className="btn btn-login" onClick={handleRedirect}>ENTRAR</button>
        </div>
        
        {/* Coluna Direita (Criar Conta) */}
        <div className="login-right">
          <h2>Criar Conta</h2>
          <div className="social-icons">
            <a href="#" className="social-icon"><FaFacebookF /></a>
            <a href="#" className="social-icon"><FaLinkedinIn /></a>
            <a href="#" className="social-icon"><FaTwitter /></a>
          </div>
          <p>{error ? <span>{error}</span> : "ou use seu email para se registrar:"}</p>
          
          <form onSubmit={handleRegistration}>
            <div className="form-group">
              <div className="input-icon">
                <FaUser className="icon" />
                <input type="text" placeholder="Nome" onChange={(e) => setName(e.target.value)}/>
              </div>
            </div>
            <div className="form-group">
              <div className="input-icon">
                <FaEnvelope className="icon" />
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
              </div>
            </div>
            <div className="form-group">
              <div className="input-icon">
                <FaLock className="icon" />
                <input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)}/>
              </div>
            </div>
            <button type="submit" className="btn btn-success">CADASTRAR</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;


