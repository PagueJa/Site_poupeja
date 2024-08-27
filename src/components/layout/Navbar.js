import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../../img/logo.png";
import receitasIcon from "../../img/receita.png";
import despesasIcon from "../../img/despesasimg.png";
import historicoIcon from "../../img/historicoimg.png";

const Navbar = () => {
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
            <Link to="/">Home</Link>
          </li>
          <li className={styles.item}>
            <Link to="/graficos">Gráficos</Link>
          </li>
          <li className={styles.item}>
            <Link to="/categorias">Categorias</Link>
          </li>
          <li className={styles.item}>
            <Link to="/historico">Histórico</Link>
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

      <section>
        <div className={styles.actionButton}>
          <Link to="/receitas" className={styles.actionLink}>
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
          </Link>
        </div>
        <div className={styles.actionButton}>
          <Link to="/receitas" className={styles.actionLink}>
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
          </Link>
        </div>
        <div className={styles.actionButton}>
          <Link to="/receitas" className={styles.actionLink}>
            <div className={styles.textContainer}>
              <span className={styles.blueText}>Histórico</span>
            </div>
            <div className={styles.imageContainer}>
              <img
                src={historicoIcon}
                alt="Historico"
                className={styles.actionImage}
              />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
