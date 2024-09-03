import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

const DoughnutChart = ({ receita, despesas }) => {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        // Acessa o estilo do documento dentro do useEffect
        const documentStyle = getComputedStyle(document.documentElement);

        const data = {
            labels: ['Receita total', 'Gastos acumulados'],
            datasets: [
                {
                    data: [receita, despesas],
                    backgroundColor: [
                        documentStyle.getPropertyValue('--blue-500'),
                        documentStyle.getPropertyValue('--red-500')
                    ],
                    hoverBackgroundColor: [
                        documentStyle.getPropertyValue('--blue-400'),
                        documentStyle.getPropertyValue('--red-400')
                    ]
                }
            ]
        };

        const options = {
            cutout: '60%',
            plugins: {
                legend: {
                    display: false // Desabilitar a legenda padrão
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, [receita, despesas]);

    return (
        <div style={{ display: 'flex', alignItems: 'center', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', padding: '20px', borderRadius: '8px', backgroundColor: 'white' }}>
            <div style={{ width: '200px', height: '200px' }}>
                <Chart type="doughnut" data={chartData} options={chartOptions} />
            </div>
            <div style={{ marginLeft: '20px' }}>
                <h3 style={{ fontFamily: 'Arial, sans-serif', marginBottom: '20px', fontSize: '30px' }}>Gráfico de gastos</h3>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                        <div style={{ width: '15px', height: '15px', backgroundColor: 'var(--blue-500)', marginRight: '10px' }}></div>
                        <span style={{ fontFamily: 'Arial, sans-serif', color: '#000' }}>Receita total</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ width: '15px', height: '15px', backgroundColor: 'var(--red-500)', marginRight: '10px' }}></div>
                        <span style={{ fontFamily: 'Arial, sans-serif', color: '#000' }}>Gastos acumulados</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DoughnutChart;

