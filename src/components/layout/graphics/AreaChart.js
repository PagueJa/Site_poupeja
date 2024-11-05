import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function AreaChart() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const data = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [
                {
                    label: 'Receitas',
                    data: [1200, 1900, 1700, 2200, 2400, 2500],
                    backgroundColor: 'rgba(54, 162, 235, 0.5)',
                    borderColor: '#36A2EB',
                    fill: true
                },
                {
                    label: 'Despesas',
                    data: [1000, 1300, 1500, 1800, 2000, 2100],
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    borderColor: '#FF6384',
                    fill: true
                }
            ]
        };
        const options = {
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

    return <Chart type="line" data={chartData} options={chartOptions} />;
}
