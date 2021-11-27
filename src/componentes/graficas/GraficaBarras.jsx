import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


export const GraficaBarras = ({datasets, labels, title=""}) => {
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
  
  let data = {
    labels,
    datasets,
    responsive: true,
    maintainAspectRatio: false,
  };

  // datasets: [
  //   {
  //     label: 'Dataset 1',
  //     data: [1, 5],
  //     backgroundColor: 'rgba(255, 99, 132)',
  //   },
  //   {
  //     label: 'Dataset 2',
  //     data: [3, 4],
  //     backgroundColor: 'rgba(53, 162, 235)',
  //   }
  // ]

  return <Bar options={options} data={data} />;

}