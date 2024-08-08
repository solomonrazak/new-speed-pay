import React, { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, ChartOptions, ChartData, CategoryScale, LinearScale, PointElement, LineElement, Tooltip } from 'chart.js';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip);

const labels = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const data: ChartData<'line'> = {
  labels: labels,
  datasets: [
    {
      label: "Weekly Sales",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "#ff8503",
      borderWidth: 1,
      data: [4, 10, 7, 15, 8, 12, 10],
      fill: true,
      tension: 0.5, // Adjust tension for curved lines
    },
  ],
};

const options: ChartOptions<'line'> = {
  responsive: true,
  plugins: {
    legend: {
      display: false, // Hide legend
    },
    title: {
      display: false, // Hide title
    },
    tooltip: {
      enabled: true,
      callbacks: {
        label: function (context) {
          // Only show tooltip for "Tuesday"
          if (context.label === 'Tuesday') {
            return `${context.label}: ${context.raw}`;
          }
          return ''; // Return an empty string to hide the tooltip for other days
        },
        labelColor: function (context) {
          if (context.label === 'Tuesday') {
            return {
              borderColor: 'rgb(75, 192, 192)',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
            };
          }
          // Return default color if not "Tuesday"
          return {
            borderColor: 'transparent',
            backgroundColor: 'transparent',
          };
        },
      },
    },
  },
  scales: {
    x: {
      display: true, // Show x-axis
      title: {
        display: false,
        text: 'Days of the Week',
      },
      ticks: {
        color: 'black', // Color of the x-axis labels
      },
      grid: {
        display: false,
      },
    },
    y: {
      display: false, // Hide y-axis
    },
  },
  elements: {
    point: {
      radius: 0, // Hide points
    },
  },

  layout: {
    padding: {
      left: 5,
      right: 5,
      top: 10,
      bottom: 5,
    },
    
  },
};

const LineCurve: React.FC = () => {
  const chartRef = useRef<any>(null);

  useEffect(() => {
    const chart = chartRef.current;
    if (chart) {
      const gradient = chart.ctx.createLinearGradient(0, 0, 0, chart.height);
      gradient.addColorStop(0, 'rgba(75, 192, 192, 0.2)');
      gradient.addColorStop(1, 'rgba(75, 192, 192, 0)');
      chart.data.datasets[0].backgroundColor = gradient;
      chart.update();
    }
  }, []);

  return <Line ref={chartRef} data={data} options={options} />;
};

export default LineCurve;
