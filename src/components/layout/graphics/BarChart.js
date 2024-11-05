import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function BarChart() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const data = {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40']
            }]
        };
        const options = { responsive: true, plugins: { legend: { display: true } } };
        setChartData(data);
        setChartOptions(options);
    }, []);

    return <Chart type="bar" data={chartData} options={chartOptions} />;
}
