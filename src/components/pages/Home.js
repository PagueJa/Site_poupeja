import React from "react";
import styles from "./Home.module.css";
import DoughnutChart from "../layout/graphics/DoughnutChart.js";
import RecentTransactions from "../layout/RecentTransactions.js";
import Navbar from "../layout/Navbar";
import Footer from '../layout/Footer';

const Home = () => {
  const receita = 10000;
  const despesas = 2000;

  return (
    <>
      <Navbar />  
      <div className={styles.container}>
        <DoughnutChart
          className={styles.doughnutChart}
          receita={receita}
          despesas={despesas}
        />
        <h1 className={styles.trasacoes_recentes}>Transações Recentes</h1>
        <RecentTransactions />
      </div>
      <Footer/>
    </>
  );
};

export default Home;
