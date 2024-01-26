import React from "react";

import { TOTAL_CARDS } from "@/libs/constants";
import TrendCard from "../cards/TrendCard";
import SalesTrendChartSection from "./SalesTrendChartSection";

const TrendsSection = () => {
	return (
		<section className="flex-col-reverse gap-y-5 flex xl:flex-row xl:justify-start  w-full lg:gap-x-4 xl:gap-8 xl:h-[374px]  relative">
			<SalesTrendChartSection />
			<div className="max-lg:w-full flex flex-wrap justify-center min-[500px]:justify-between xl:grid xl:grid-cols-2 gap-5 h-full ">
				{TOTAL_CARDS.map((card) => (
					<TrendCard key={card.id} card={card} />
				))}
			</div>
		</section>
	);
};

export default TrendsSection;
