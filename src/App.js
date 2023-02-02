import "./App.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import BarChart from "./components/BarChart";
import { useEffect, useState } from "react";
import { orderList } from "./const/OrderData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function App() {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "",
        labelColor: ["blue", "red", "green"],
        data: [],
        backgroundColor: [],
      },
    ],
  });

  useEffect(() => {
    setChartData({
      labels: orderList.map((data) => data.date),
      datasets: [
        {
          label: "data rental mobil",
          labelColor: ["blue", "red", "green"],
          data: orderList.map((data) => data.totalOrder),
          backgroundColor: ["blue", "red", "green"],
        },
      ],
    });
  }, []);

  return (
    <div className="App">
      <BarChart chartData={chartData} />
    </div>
  );
}

export default App;
