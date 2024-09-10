import React from 'react';
import styles from './RecentTransactions.module.css';

const transactions = [
  {
    id: 1,
    title: 'Imposto de renda',
    amount: 590.90,
    date: '20/10/2002',
    category: 'Imposto',
  },
  {
    id: 2,
    title: 'Uber',
    amount: -20.00,
    date: '18/10/2002',
    category: 'Transporte',
  },
  {
    id: 3,
    title: 'Pizza',
    amount: -50.00,
    date: '18/10/2024',
    category: 'Lazer',
  },
  {
    id: 4,
    title: 'Salário',
    amount: 1200.00,
    date: '18/10/2024',
    category: 'Trabalho',
  },
];

const RecentTransaction = () => {
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Transação</th>
            <th>Sobre</th>
            <th>Data</th>
            <th>Categoria</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr
              className={styles.row}
              key={transaction.id}
              style={{
                backgroundColor: transaction.amount > 0 ? '#d4edda' : '#f8d7da',
              }}
            >
              <td>{transaction.title}</td>
              <td>{`R$ ${transaction.amount.toFixed(2)}`}</td>
              <td>{transaction.date}</td>
              <td>{transaction.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentTransaction;

