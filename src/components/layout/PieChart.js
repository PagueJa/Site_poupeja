import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Registre os elementos necessários
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ receita, despesas }) => {
  const data = {
    labels: ['Receita', 'Despesas'],
    datasets: [
      {
        data: [receita, despesas],
        backgroundColor: ['#36A2EB', '#FF6384'],
        hoverBackgroundColor: ['#36A2EB', '#FF6384'],
      },
    ],
  };

  return <Pie data={data} />;
};

export default PieChart;
