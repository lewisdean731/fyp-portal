import { React /* useState */ } from "react";
import { Line } from 'react-chartjs-2';
import TextMedium from "../../../text/medium/textMedium";

export function LineChart(props) {
  //const [data, setData] = useState();

  const data = {
    labels: props.labels,
    datasets: [
      {
        label: '# of Dependencies',
        data: props.data,
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };
  
  const options = {
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
      ]
    }
  };

  return (
    <div>
      <TextMedium>{props.title}</TextMedium>
      <Line data={data} options={options} />
    </div>
    );
}
