/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Legend, Title, Tooltip } from 'chart.js';

ChartJS.register(ArcElement, Legend, Title, Tooltip);

interface DonutChartProps {
	value: number;
	backgroundColor: Array<string>;
	cutout?: string;
	radius?: number;
}
const DoughnutChart = ({
	value,
	backgroundColor,
	cutout,
	radius,
}: DonutChartProps) => {
	const data = {
		labels: [],
		datasets: [
			{
				data: [value, 100 - value],
				backgroundColor: backgroundColor,
				borderWidth: 0,
				cutout: cutout ? cutout : '55%',
				borderRadius: radius ? radius : 2,
			},
		],
	};

	const options: any = {
		maintainAspectRatio: false,
	};

	const textCenter = {
		id: 'textCenter',
		beforeDatasetsDraw(chart: any, _args: any, _pluginOptions: any) {
			const { ctx, data } = chart;
			ctx.save;
			ctx.font = 'bold 22px san-serif';
			ctx.fillStyle = 'black';
			ctx.textAlign = 'center';
			ctx.textBaseline = 'middle';
			ctx.fillText(
				`${data.datasets[0].data[0]}%`,
				chart.getDatasetMeta(0).data[0].x,
				chart.getDatasetMeta(0).data[0].y,
			);
		},
	};

	return <Doughnut data={data} options={options} plugins={[textCenter]} />;
};

export default DoughnutChart;