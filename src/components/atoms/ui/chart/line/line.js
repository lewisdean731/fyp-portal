import { React /* useState */ } from "react";
import { Line } from 'react-chartjs-2';
import TextMedium from "../../../text/medium/textMedium";

export function LineChart(props) {
  //const [data, setData] = useState();

  const data = (canvas) => {
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0, `${props.colour}FF`);   
    gradient.addColorStop(1, `${props.colour}00`);

    return {
      labels: props.labels,
      datasets: [
        {
          label: '# of Dependencies',
          backgroundColor : gradient, // Put the gradient here as a fill color
          borderColor : "#ffffff",
          borderWidth: 2,
          data: props.data,
          fill: 'origin',
          pointRadius: 0,
        }
      ]
    }
  }
  
  const options = {
    legend: {
      display: false
    },
    scales: {
      xAxes: [
        {
          type: 'time',
          time: {
            unit: 'days',
            displayFormats: {
              days: "DD/MM/YY"
            }
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    }
  };

  return (
    <div>
      <TextMedium>{props.title}</TextMedium>
      <Line data={data} options={options} />
    </div>
    );
}
