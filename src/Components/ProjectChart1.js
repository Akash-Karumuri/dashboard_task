import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ProjectProgressChart = () => {
  const data = {
    labels: [
      "Project Name 1",
      "Project Name 2",
      "Project Name 3",
      "Project Name 4",
    ],
    datasets: [
      {
        label: "Progress",
        data: [80, 70, 60, 50],
        backgroundColor: "rgba(120, 169, 215, 0.8)",
        borderColor: "rgba(120, 169, 215, 1)",
        borderWidth: 1,
        borderRadius: 4,
        barPercentage: 0.9,
        categoryPercentage: 0.7,
      },
      {
        label: "Target",
        data: [90, 90, 90, 90],
        backgroundColor: "transparent",
        borderWidth: 0,
        datalabels: {
          display: true,
          align: "right",
          anchor: "end",
        },
      },
    ],
  };

  const options = {
    indexAxis: "y",
    scales: {
      x: {
        min: 0,
        max: 100,
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
        border: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          color: "white",
          font: {
            size: 12,
          },
        },
        border: {
          display: false,
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
      datalabels: {
        color: "white",
        formatter: (value) => `${value}%`,
        font: {
          weight: "bold",
        },
      },
    },
  };

  return (
    <div className="w-100 p-3 rounded" style={{ height: "300px" }}>
      <div className="d-flex">
        <p className="text-warning mb-0">Project Name</p>
        <p className="mx-5 text-warning mb-0">Project Progress</p>
      </div>
      <div className="position-relative" style={{ height: "220px" }}>
        <Bar data={data} options={options}/>
        <div className="position-absolute top-0 end-0 h-100 d-flex flex-column justify-content-lg-around">
          {data.datasets[1].data.map((value, index) => (
            <div key={index} className="text-white  flexcenter py-0 my-0 ">
              <p className="my-0 py-0">{value}%</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectProgressChart;
