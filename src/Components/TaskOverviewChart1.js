import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const HorizontalBarChart = () => {
  const labels = ['Gen', 'Self', 'HOD', 'CEO', 'MOM'];

  const data = {
    labels,
    datasets: [
      {
        data: [70, 65, 90, 40, 70],
        backgroundColor: [
          '#81A3CB',
          '#E4BA88',
          '#CB81A5',
          '#D4D069',
          '#69CED4',
        ],
        borderColor: [
          'rgb(135, 206, 250)',
          'rgb(255, 206, 86)',
          'rgb(255, 105, 180)',
          'rgb(152, 251, 152)',
          'rgb(64, 224, 208)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.parsed.x}%`;
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          display: false, 
        },
        grid: {
          display: false, 
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          color: 'white', 
        },
      },
    },
  };

  const plugins = [
    {
      id: 'percentageLabels',
      afterDatasetsDraw(chart) {
        const { ctx, data, scales } = chart;

        ctx.font = '12px Arial';
        ctx.textAlign = 'left';

        const colorMap = {
          0: '#2BCB4E',
          1: '#2BCB4E',
          2: '#4080FF',
          3: '#FF4040',
          4: '#2BCB4E',
        };

        data.datasets[0].data.forEach((value, index) => {
          const x = scales.x.right;
          const y = scales.y.getPixelForValue(index);

          ctx.fillStyle = colorMap[index] || '#000000';
          ctx.fillText(`${value}%`, x - 25, y + 4); 
        });
      },
    },
  ];

  return (
    <div className="w-100 h-80 bg-gray-800 px-4">
      <Bar data={data} options={options} plugins={plugins} />
    </div>
  );
};

export default HorizontalBarChart;
