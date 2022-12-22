import { LineData } from "../../util/chartData.js";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: LineData.map((data) => data.title),
  datasets: [
    {
      label: "Users Gained ",
      data: LineData.map((data) => data.userGain),
      backgroundColor: "transparent",
      borderColor: "#f26c6d",
      pointBorderColor: "transparent",
      pointBorderWidth: 4,
      tension: 0.5,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: false,
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      min: 2,
      max: 10,
      ticks: {
        stepSize: 2,
        callback: (value) => value + "k",
      },
      grid: {
        borderDash: [10],
      },
    },
  },
};
export function LineChart() {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Line Chart</h2>
      <Line data={data} options={options} />
    </div>
  );
}
