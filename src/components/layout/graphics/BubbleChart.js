import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function BubbleChart() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const data = {
            datasets: [
                {
                    label: 'Gastos',
                    data: [
                        { x: 10, y: 20, r: 15 },
                        { x: 15, y: 10, r: 10 },
                        { x: 20, y: 30, r: 20 },
                        { x: 25, y: 15, r: 25 },
                        { x: 30, y: 25, r: 30 }
                    ],
                    backgroundColor: '#36A2EB'
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

    return <Chart type="bubble" data={chartData} options={chartOptions} />;
}
