import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import ReceitasModal from "./../layout/modals/ReceitasModal";
import DespesasModal from "./../layout/modals/DespesasModal";
import HistoricoModal from "./../layout/modals/HistoricoModal";
import styles from "./Navbar.module.css";
import logo from "../../img/logo.png";
import receitasIcon from "../../img/receita.png";
import despesasIcon from "../../img/despesasimg.png";
import historicoIcon from "../../img/historicoimg.png";

Modal.setAppElement("#root");

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null);

  const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalType(null);
  };

  // Função que retorna os estilos inline específicos para cada modal
  const getModalStyles = () => {
    const baseStyles = {
      content: {
        backgroundColor: "rgba(0, 0, 0, 0)", // Fundo invisível
        border: "none", // Remove a borda para um visual mais limpo
        padding: 0, // Remove qualquer padding que o modal tenha
      },
    };
  
    switch (modalType) {
      case "receitas":
        return {
          ...baseStyles,
          content: {
            ...baseStyles.content,
            width: "70%",
            maxWidth: "500px",
            height: "auto",
            maxHeight: "50vh",
            margin: "auto",
          },
        };
      case "despesas":
        return {
          ...baseStyles,
          content: {
            ...baseStyles.content,
            width: "75%",
            maxWidth: "600px",
            height: "auto",
            maxHeight: "50vh",
            margin: "auto",
          },
        };
      case "historico":
        return {
          ...baseStyles,
          content: {
            ...baseStyles.content,
            width: "80%",
            maxWidth: "700px",
            height: "auto",
            maxHeight: "90vh",
            margin: "auto",
          },
        };
      default:
        return baseStyles;
    }
  };
  

  return (
    <div className={styles.dashboard}>
      <nav className={styles.navbar}>
        <div className={styles.logoContainer}>
          <Link to="/">
            <img src={logo} alt="PoupeJá" className={styles.logo} />
            <span className={styles.logo_letra}>PoupeJá</span>
          </Link>
        </div>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/home">Home</Link>
          </li>
          <li className={styles.item}>
            <Link to="/graficos">Gráficos</Link>
          </li>
          <li className={styles.item}>
            <Link to="/categorias">Categorias</Link>
          </li>
        </ul>
        <div className={styles.accountButton}>
          <Link to="/conta" className={styles.accountLink}>
            Minha conta
          </Link>
        </div>
      </nav>

      <section className={styles.greeting}>
        <h2>
          Bem-vindo, Victor!{" "}
          <span role="img" aria-label="wave">
            👋
          </span>
        </h2>
      </section>

      <section className={styles.sections}>
        <div className={styles.actionButton}>
          <div
            onClick={() => openModal("receitas")}
            className={styles.actionLink}
            style={{ textDecoration: "none" }}
          >
            <div className={styles.textContainer}>
              <span className={styles.greenText}>Receitas</span>
            </div>
            <div className={styles.imageContainer}>
              <img
                src={receitasIcon}
                alt="Receitas"
                className={styles.actionImage}
              />
            </div>
          </div>
        </div>
        <div className={styles.actionButton}>
          <div
            onClick={() => openModal("despesas")}
            className={styles.actionLink}
            style={{ textDecoration: "none" }}
          >
            <div className={styles.textContainer}>
              <span className={styles.redText}>Despesas</span>
            </div>
            <div className={styles.imageContainer}>
              <img
                src={despesasIcon}
                alt="Despesas"
                className={styles.actionImage}
              />
            </div>
          </div>
        </div>
        <div className={styles.actionButton}>
          <div
            onClick={() => openModal("historico")}
            className={styles.actionLink}
            style={{ textDecoration: "none" }}
          >
            <div className={styles.textContainer}>
              <span className={styles.blueText}>Histórico</span>
            </div>
            <div className={styles.imageContainer}>
              <img
                src={historicoIcon}
                alt="Histórico"
                className={styles.actionImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Modal para exibir o conteúdo com base no tipo */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Modal de Ações"
        style={getModalStyles()} // Aplicar estilos inline dinamicamente
        overlayClassName={styles.modalOverlay}
      >
        {modalType === "receitas" && <ReceitasModal closeModal={closeModal} />}
        {modalType === "despesas" && <DespesasModal closeModal={closeModal} />}
        {modalType === "historico" && <HistoricoModal closeModal={closeModal} />}
      </Modal>
    </div>
  );
};

export default Navbar;

