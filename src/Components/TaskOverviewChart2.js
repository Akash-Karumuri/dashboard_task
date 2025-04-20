import React, { useEffect, useRef } from 'react';
import { 
  Chart, 
  CategoryScale, 
  LinearScale, 
  BarController, 
  BarElement, 
  Title, 
  Tooltip, 
  Legend 
} from 'chart.js';

const TaskStatusChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    Chart.register(
      CategoryScale,
      LinearScale,
      BarController,
      BarElement,
      Title,
      Tooltip,
      Legend
    );

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');

    const data = {
      labels: ['General', 'Self', 'HOD', 'CEO', 'MOM'],
      datasets: [
        {
          label: 'Tot Tasks (135)',
          data: [45, 45, 45, 45, 45],
          backgroundColor: 'rgba(135, 206, 250, 0.8)',
          borderColor: 'rgba(135, 206, 250, 1)',
          borderWidth: 1
        },
        {
          label: 'Completed (96)',
          data: [32, 32, 32, 32, 32],
          backgroundColor: 'rgba(152, 251, 152, 0.8)',
          borderColor: 'rgba(152, 251, 152, 1)',
          borderWidth: 1
        },
        {
          label: 'Pending (18)',
          data: [6, 6, 6, 6, 6],
          backgroundColor: 'rgba(255, 105, 180, 0.8)',
          borderColor: 'rgba(255, 105, 180, 1)',
          borderWidth: 1
        },
        {
          label: 'On Hold (6)',
          data: [2, 2, 2, 2, 2],
          backgroundColor: 'rgba(255, 165, 0, 0.8)',
          borderColor: 'rgba(255, 165, 0, 1)',
          borderWidth: 1
        }
      ]
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          max: 50,
          ticks: {
            stepSize: 10,
            color: 'white'
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.1)'
          }
        },
        x: {
          ticks: {
            color: 'white'
          },
          grid: {
            display: false
          }
        }
      },
      plugins: {
        legend: {
          position: 'top',
          align: 'start',
          labels: {
            usePointStyle: true,
            pointStyle: 'circle',
            padding: 10,
            color: 'white',
            boxWidth:5,
            font: {
              size: 10 
            }
          }
        },
        tooltip: {
          backgroundColor: 'rgba(0, 0, 0, 0.7)'
        }
      }
    };

    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="w-100 h-80 bg-gray-800 px-4">
      <canvas ref={chartRef} />
    </div>
  );
};

export default TaskStatusChart;
