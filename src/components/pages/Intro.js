import React from 'react';
import {Link} from 'react-router-dom';
import './Intro.css';
import logo from '../../img/logo.png'; 
import img_intro from '../../img/img_intro.png'; 

const Tela_Home = () => {
  return (
    <div className="container1">
        <h1>oi</h1>
      <header className="header">
        <div className="logo-container">
          <img src={logo} alt="PoupeJá Logo" className="logo" />
          <span className="site-name">PoupeJá</span>
        </div>
        <Link to="/login">
          <button className="login-button">Fazer Login</button>
        </Link>
      </header>
      <main className="main-content">
        <div className="text-content">
          <h1>Acompanhe suas despesas</h1>
          <h6>Acompanhe seus gastos e visualize sua saúde financeira.</h6>
        </div>
        <div className="image-content">
          <img src={img_intro} alt="Financial Tracking" className="main-image" />
        </div>
      </main>
    </div>
  );
};

export default Tela_Home;