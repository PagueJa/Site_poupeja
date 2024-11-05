import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function LineChart() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: 'Sales',
                data: [65, 59, 80, 81, 56, 55],
                borderColor: '#36A2EB',
                fill: false
            }]
        };
        const options = { responsive: true, plugins: { legend: { display: true } } };
        setChartData(data);
        setChartOptions(options);
    }, []);

    return <Chart type="line" data={chartData} options={chartOptions} />;
}
