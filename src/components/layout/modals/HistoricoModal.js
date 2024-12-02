import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <div className="container my-4 p-4 shadow rounded bg-white" style={{ width: '100%', marginBottom: '50px' }}>
      <h1 style={{ textAlign: 'center'}}>Histórico</h1>
      <table className="table table-striped table-bordered text-center" style={{ width: '100%', marginTop: '20px' }}>
        <thead className="table-light">
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
              className={transaction.amount > 0 ? 'table-success' : 'table-danger'}
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