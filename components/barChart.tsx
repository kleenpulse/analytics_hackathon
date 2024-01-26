interface ChartProps {
	apexOptions: any;
	apexSeries: any;
}
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const BarChart = ({ apexOptions, apexSeries }: ChartProps) => {
	const [winWidth, setWinWidth] = useState(window?.innerWidth);
	useEffect(() => {
		const handleResize = () => setWinWidth(window.innerWidth);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	return (
		<Chart
			options={{
				...apexOptions,
				plotOptions: {
					bar: {
						columnWidth: winWidth < 600 ? "10px" : "30px",
						borderRadius: 15,

						borderRadiusApplication: "end",
					},
				},
			}}
			type="bar"
			width="100%"
			height="100%"
			series={apexSeries}
		/>
	);
};

export default BarChart;
