import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import perfilImg from '../../img/perfil.png'; 
import Footer from '../layout/Footer';

const EditarPerfil = () => {
  const navigate = useNavigate(); // Hook para navegação

  return (
    <div className="container-fluid bg-light vh-100 position-relative">
      {/* Header */}
      <div
        className="d-flex justify-content-between align-items-center py-5 px-5 border-bottom"
        style={{ backgroundColor: '#222831' }}
      >
        <h1 className="text-white" style={{ fontFamily: 'Roboto, sans-serif', fontSize: '2em' }}>Meu Perfil</h1>
        <div className="d-flex align-items-center text-end">
          <div style={{ marginRight: '15px' }}>
            <strong className="d-block" style={{ fontSize: '16px', color: '#FFFFFF' }}>
              Julião Silva
            </strong>
            <small style={{ fontSize: '14px', color: '#FFFFFF' }}>
              juliaosilvaa@123.com
            </small>
          </div>
          <div
            className="rounded-circle d-flex justify-content-center align-items-center"
            style={{
              width: '50px',
              height: '50px',
              backgroundColor: '#e9ecef',
              overflow: 'hidden',
            }}
          >
            <img
              src={perfilImg}
              alt="Avatar"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
        </div>
      </div>

      {/* Card */}
      <div className="d-flex justify-content-center align-items-center h-75">
        <div className="card shadow-sm p-4" style={{ width: '600px', borderRadius: '15px' }}>
          
          <ul className="nav nav-tabs mb-4">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Perfil
              </a>
            </li>
          </ul>

          {/* Avatar */}
          <div className="text-center mb-4">
            <div
              className="position-relative d-inline-block"
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                backgroundColor: '#e9ecef',
                overflow: 'hidden',
              }}
            >
              <img
                src={perfilImg}
                alt="Avatar"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
              <button
                className="btn btn-success rounded-circle position-absolute"
                style={{
                  bottom: '5px',
                  right: '5px',
                  width: '25px',
                  height: '25px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '0',
                }}
              >
                <i className="fas fa-pencil-alt text-white" style={{ fontSize: '12px' }}></i>
              </button>
            </div>
          </div>

          {/* Form */}
          <form>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="name" className="form-label">
                  Nome
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  defaultValue="Julião Silva"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  defaultValue="juliaosilvaa@123.com"
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Senha
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                defaultValue="********"
              />
            </div>
            <div className="text-end">
              <button type="submit" className="btn btn-success px-4">
                Salvar
              </button>
            </div>
          </form>
        </div>
      </div>

      
      <button
        className="btn btn-link text-secondary position-absolute"
        style={{
          bottom: '100px',
          right: '20px',
          fontSize: '25px',
          textDecoration: 'none',
        }}
        onClick={() => navigate('/home')} 
      >
        Voltar para tela principal <i className="fas fa-arrow-right ms-2"></i>
      </button>
      <Footer/>
    </div>
  );
};

export default EditarPerfil;
