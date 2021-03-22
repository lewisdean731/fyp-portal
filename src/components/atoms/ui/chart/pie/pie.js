import { React, useState } from "react";
import Pie from "react-chartjs-2";

const fakeData = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Alerts",
      backgroundColor: ["#B21F00", "#C9DE00", "#2FDE00", "#00A6B4", "#6800B4"],
      hoverBackgroundColor: [
        "#501800",
        "#4B5000",
        "#175000",
        "#003350",
        "#35014F",
      ],
      data: [2, 6, 4, 5, 5],
    },
  ],
};

export function PieChart(props) {
  const [data, setData] = useState();
  return (
    <Pie
      data={fakeData}
      width={100}
      height={50}
      options={{
        title: {
          display: true,
          text: "Some Metric Here",
          fontSize: 20,
          maintainAspectRatio: false,
        },
        legend: {
          display: true,
          position: "right",
        },
      }}
    />
  );
}
