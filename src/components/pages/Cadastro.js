import React from "react";
import './Cadastro.css';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa'; // Ícones de usuário, email e senha

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        
        {/* Coluna Esquerda (Bem Vindo de Volta) */}
        <div className="login-left">
          <h2>Bem Vindo de Volta!</h2>
          <p>Para continuar conectado conosco, faça login com suas informações pessoais</p>
          <button className="btn btn-success">ENTRAR</button>
        </div>
        
        {/* Coluna Direita (Criar Conta) */}
        <div className="login-right">
          <h2>Criar Conta</h2>
          <div className="social-icons">
            <a href="#" className="social-icon"><FaFacebookF /></a>
            <a href="#" className="social-icon"><FaLinkedinIn /></a>
            <a href="#" className="social-icon"><FaTwitter /></a>
          </div>
          <p>ou use seu email para se registrar:</p>
          
          <form>
            <div className="form-group">
              <div className="input-icon">
                <FaUser className="icon" />
                <input type="text" placeholder="Nome" />
              </div>
            </div>
            <div className="form-group">
              <div className="input-icon">
                <FaEnvelope className="icon" />
                <input type="email" placeholder="Email" />
              </div>
            </div>
            <div className="form-group">
              <div className="input-icon">
                <FaLock className="icon" />
                <input type="password" placeholder="Senha" />
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


