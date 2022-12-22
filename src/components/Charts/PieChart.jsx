import { PieData } from "../../util/chartData.js";

import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
} from "chart.js";

import { PolarArea } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale
);

const data = {
  labels: PieData.map((data) => data.title),
  datasets: [
    {
      label: "Users Gained ",
      data: PieData.map((data) => data.userGain),
      backgroundColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(255, 159, 64, 1)",
        "rgba(255, 205, 86, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  // maintainAspectRatio: false,
  // responsive: false,
  plugins: {
    title: {
      display: true,
      text: "Users Gained between 2016-2020",
    },
  },
};

export function PieChart() {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Pie Chart</h2>
      <PolarArea data={data} options={options} width="100%"/>
    </div>
  );
}
