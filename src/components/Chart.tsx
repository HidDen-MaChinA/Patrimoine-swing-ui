import React, { useRef } from "react";

import CustomLegend from "./Legend";

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);


export default function Chart() : React.ReactElement{
  const chartRef = useRef(null);
  const labels = ["jan", "feb", "march", "app", "may", "jun", "jul"];
  const options = {
    plugins: {
      legend: {
        display: false, // Disable the default legend
      },
    },
    responsive: false,
  };
  const toggleDataset = (datasetIndex:number) => {
    const chartInstance = chartRef.current;
    console.log(chartRef.current)
    const meta = chartInstance.getDatasetMeta(datasetIndex);
   meta.hidden = !meta.hidden; // Toggle visibility
    chartInstance.update(); // Update the chart
  };
  const data = {
    labels: labels,
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  };
    return(
        <div className="gap-2 h-full flex flex-row">
            <div className="w-max-400px overflow-auto">
                <Line
                    width={400}
                    height={400}
                    options={options}
                    ref={chartRef}
                    data={data}
                 />
            </div>
            <div className="flex items-center">
                <div className="border-[1px] p-2 border-gray-800">
                     <CustomLegend datasets={data.datasets} onToggleDataset={toggleDataset}/>
                </div>
            </div>
        </div>
    )
}
