import React, { useState, useEffect } from 'react';
import styles from './DespesasModal.module.css';

const DespesasModal = ({ closeModal }) => {
  const [despesa, setDespesa] = useState({
    nome: '',
    valor: '',
    data: '',
  });

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true); // Define o modal como aberto ao montar o componente
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDespesa((prevDespesa) => ({
      ...prevDespesa,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Despesa adicionada:', despesa);
    closeModal(); // Fecha o modal após o envio
  };

  return (
    <div className={`${styles.modalContent} ${isOpen ? styles.active : ''}`}>
      <h2>Adicionar Despesa</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="nome">Nome da Despesa:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={despesa.nome}
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
            value={despesa.valor}
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
            value={despesa.data}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Adicionar Despesa
        </button>
      </form>
      <button onClick={closeModal} className={styles.closeButton}>
        Fechar
      </button>
    </div>
  );
};

export default DespesasModal;

