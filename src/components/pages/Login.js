import React from "react";
import './Login.css';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';

const Login = () => {
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
          
          <form>
            <div className="form-group">
              <div className="input-icon">
                <FaUser className="icon" />
                <input type="text" placeholder="Usuário" />
              </div>
            </div>
            <div className="form-group">
              <div className="input-icon">
                <FaLock className="icon" />
                <input type="password" placeholder="Senha" />
              </div>
            </div>
            <a href="#" className="forgot-password">Esqueceu a senha?</a>
            <button type="submit" className="btn btn-login">ENTRAR</button>
          </form>
        </div>

        {/* Coluna Esquerda (Bem Vindo) */}
        <div className="login-right">
          <h2>Olá, Amigo!</h2>
          <p>Insira seus dados pessoais e comece sua jornada conosco</p>
          <button className="btn btn-signup">CADASTRAR</button>
        </div>
        
      </div>
    </div>
  );
};

export default Login;
