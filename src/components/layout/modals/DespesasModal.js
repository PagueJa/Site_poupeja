import React from 'react';
import styles from './DespesasModal.module.css';

const DespesasModal = ({ closeModal }) => {
  return (
    <div className={styles.modalContent}>
      <h2>Despesas</h2>
      <p>Aqui você pode ver suas despesas.</p>
      <button onClick={closeModal} className={styles.closeButton}>Fechar</button>
    </div>
  );
};

export default DespesasModal;
