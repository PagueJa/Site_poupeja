import React from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

const Categorias = () => {
  return (
    <>
      <Navbar />
      <div className="container text-center my-5">
        {/* Dropdowns de seleção */}
        <div className="d-flex justify-content-center align-items-center gap-3 mb-4">
          <select className="form-select form-select-lg" style={{ maxWidth: '200px' }}>
            <option>Categorias</option>
            <option>Lazer</option>
            <option>Transporte</option>
            <option>Alimentação</option>
            <option>Educação</option>
            <option>Saúde</option>
          </select>
          <input type="date" className="form-control form-control-lg" defaultValue="2024-10-20" style={{ maxWidth: '200px' }} />
        </div>

        {/* Lista de categorias estilizada */}
        <CategoryItem label="Lazer" />
        <CategoryItem label="Transporte" />
        <CategoryItem label="Alimentação" />
        <CategoryItem label="Educação" />
        <CategoryItem label="Saúde" />
      </div>
      <Footer />
    </>
  );
};

// Componente para cada item de categoria
const CategoryItem = ({ label }) => (
  <div className="btn btn-info w-100 text-white py-3 my-2 fs-5" style={{ maxWidth: '100%', height: '70px' }}>
    {label}
  </div>
);

export default Categorias;

