import React from 'react';
import styles from './Home.module.css';
import DoughnutChart from '../layout/DoughnutChart'; 
import RecentTransactions from '../layout/RecentTransactions.js'; 

const Home = () => {
    const receita = 10000;
    const despesas = 2000; 

    const meusItens = [
        {trasacao: "Sergio", sobre: "R$ 590,00", data: "20/1/2024", categoria: "empréstimo"},
        {trasacao: "IPVA", sobre: "R$ 590,00", data: "21/1/2024", categoria: "gastos mensais"}
    ]

    return (
        <div className={styles.container}>
            <DoughnutChart className={styles.doughnutChart} receita={receita} despesas={despesas} />
            <h1 className={styles.trasacoes_recentes}>Transações Recentes</h1>
            <RecentTransactions itens={meusItens}/>
        </div>
    );
};

export default Home;

