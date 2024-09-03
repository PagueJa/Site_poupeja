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
];

const RecentTransaction = () => {
  return (
    <div className='td' style={{ margin: '20px' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead >
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

