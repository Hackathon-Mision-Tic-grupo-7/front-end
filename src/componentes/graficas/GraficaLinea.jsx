import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const GraficaLinea = ({ datasets, labels, title = "" }) => {
    // labels []: valores eje x
    // datasets [{label: 'Nombre del conjunto', data: [del mismo tamaño que labels], backgroundColor: 'color rgb o hex',}]
    // title: titulo grafica
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: title,
            },
        },
    };

    // const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    // datasets: [
    //     {
    //         label: 'Dataset 1',
    //         data: [1, 2, 4, 3, 5, 7, 6],
    //         borderColor: 'rgb(255, 99, 132)',
    //         backgroundColor: 'rgba(255, 99, 132, 0.5)',
    //     },
    //     {
    //         label: 'Dataset 2',
    //         data: [6, 5, 4, 3, 2, 7, 1],
    //         borderColor: 'rgb(53, 162, 235)',
    //         backgroundColor: 'rgba(53, 162, 235, 0.5)',
    //     },
    // ]

    const data = {
        labels,
        datasets,
        responsive: true,
        maintainAspectRatio: false,
    };
    return <Line options={options} data={data} className="pruebas" />;
}