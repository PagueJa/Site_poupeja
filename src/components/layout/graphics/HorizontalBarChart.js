import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function HorizontalBarChart() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const data = {
            labels: ['Alimentação', 'Transporte', 'Lazer', 'Educação', 'Saúde'],
            datasets: [{
                label: 'Gastos',
                data: [300, 500, 100, 400, 200],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF']
            }]
        };
        const options = {
            indexAxis: 'y', // Configuração para barras horizontais
            responsive: true,
            plugins: {
                legend: {
                    position: 'top'
                }
            }
        };
        setChartData(data);
        setChartOptions(options);
    }, []);

    return <Chart type="bar" data={chartData} options={chartOptions} />;
}
