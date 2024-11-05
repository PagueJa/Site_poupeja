import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function PolarArea() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const data = {
            datasets: [{
                data: [11, 16, 7, 3, 14],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
                label: 'Dataset'
            }],
            labels: ['Red', 'Green', 'Yellow', 'Blue', 'Purple']
        };
        const options = {
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    },
                    position: 'right' // Move a legenda para o lado direito
                }
            },
            scales: {
                r: {
                    grid: {
                        color: surfaceBorder
                    }
                }
            },
            maintainAspectRatio: false // Permite que o gráfico se ajuste ao contêiner
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div style={{ width: '100%', height: '300px' }}> {/* Ajuste o tamanho para ser igual aos outros gráficos */}
            <Chart type="polarArea" data={chartData} options={chartOptions} />
        </div>
    );
}

