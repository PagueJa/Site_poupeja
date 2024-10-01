import React from 'react';
import styles from './HistoricoModal.module.css';

const HistoricoModal = ({ closeModal }) => {
  return (
    <div className={styles.modalContent}>
      <h2>Histórico</h2>
      <p>Aqui você pode ver o histórico de transações.</p>
      <button onClick={closeModal} className={styles.closeButton}>Fechar</button>
    </div>
  );
};

export default HistoricoModal;
