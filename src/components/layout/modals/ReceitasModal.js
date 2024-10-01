import React, { useState } from 'react';
import styles from './ReceitasModal.module.css';

const ReceitasModal = ({ closeModal }) => {
  const [receita, setReceita] = useState({
    nome: '',
    valor: '',
    data: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReceita((prevReceita) => ({
      ...prevReceita,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para salvar a receita
    console.log('Receita adicionada:', receita);
    // Fechar o modal após o envio
    closeModal();
  };

  return (
    <div className={styles.modalContent}>
      <h2>Adicionar Receita</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="nome">Nome da Receita:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={receita.nome}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="valor">Valor:</label>
          <input
            type="number"
            id="valor"
            name="valor"
            value={receita.valor}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="data">Data:</label>
          <input
            type="date"
            id="data"
            name="data"
            value={receita.data}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Adicionar Receita
        </button>
      </form>
      <button onClick={closeModal} className={styles.closeButton}>
        Fechar
      </button>
    </div>
  );
};

export default ReceitasModal;
