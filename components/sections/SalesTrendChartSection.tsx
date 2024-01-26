"use client";

import { APEX_CHART_DATA, APEX_CHART_OPTIONS } from "@/libs/constants";
import dynamic from "next/dynamic";
import TrendDropdown from "../cards/TrendDropdown";
import BarChart from "../barChart";

const SalesTrendChartSection = () => {
	return (
		<div className=" w-full md:flex flex-col  justify-between xl:w-[700px] min-[1400px]:w-[806px] h-full bg-white dark:bg-gray-950 rounded-2xl p-4 min-[900px]:p-[20px] border border-soft-border dark:border-success/20">
			<div className="flex flex-row justify-between">
				<div className=" pt-2">
					<p className="text-[18px] font-semibold text-header dark:text-white">
						Sales Trends
					</p>
				</div>

				<div className="flex items-center text-sm text-green-500">
					<TrendDropdown />
				</div>
			</div>

			<div className="h-[300px] w-full pt-10 pb-0">
				<BarChart
					apexOptions={APEX_CHART_OPTIONS}
					apexSeries={APEX_CHART_DATA}
				/>
			</div>
		</div>
	);
};

export default SalesTrendChartSection;
