import React, { useState, useEffect } from "react";
import './Login.css';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { FaUser, FaLock } from 'react-icons/fa';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const Login = () => {

  useEffect(() => {

    localStorage.removeItem('token');

  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    console.log("alguma coisa")

    try {
      const response = await axios.post('http://localhost:5000/user/login', {
        email,
        password,
      });

      console.log(response)

      const token = response.data.token

      if (token) {
        localStorage.setItem('token', token);

        console.log("Token recebido:", token);

        window.location.href = '/home';

      } else {
        setError("Error obtaining token");
      }

    } catch (err) {
      if (err.response) {
        const errorMessage = err.response.data.error
         || "Unknown error";

        setError(errorMessage);

      } else {
        setError("Unknown error");
      }
    }
  };

  const handleRedirect = () => {
    navigate('/');
  }

  return (
    <div className="login-page">
      <div className="login-container">
        
        {/* Coluna Direita (Login) */}
        <div className="login-left">
          <h2>Entrar na Conta</h2>
          <div className="social-icons">
            <a href="#" className="social-icon"><FaFacebookF /></a>
            <a href="#" className="social-icon"><FaLinkedinIn /></a>
            <a href="#" className="social-icon"><FaTwitter /></a>
          </div>
          <p>ou use seu email para acessar:</p>
          
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <div className="input-icon">
                <FaUser className="icon" />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input-icon">
                <FaLock className="icon" />
                <input
                  type="password"
                  placeholder="Senha"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  
                />
              </div>
            </div>
            {error && <p className="error">{error}</p>}
            <a href="#" className="forgot-password">Esqueceu a senha?</a>
            <button type="submit" className="btn btn-login">ENTRAR</button>
          </form>
        </div>

        {/* Coluna Esquerda (Bem Vindo) */}
        <div className="login-right">
          <h2>Olá, Amigo!</h2>
          <p>Insira seus dados pessoais e comece sua jornada conosco</p>
          <button className="btn btn-signup" onClick={handleRedirect}>CADASTRAR</button>
        </div>
        
      </div>
    </div>
  );
};

export default Login;
