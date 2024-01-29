import React from "react";

import { TOTAL_CARDS } from "@/libs/constants";
import TrendCard from "../cards/TrendCard";
import SalesTrendChartSection from "./SalesTrendChartSection";

const TrendsSection = () => {
	return (
		<section className="flex-col-reverse  flex xl:flex-row xl:justify-center  w-full gap-y-5 lg:gap-x-4 xl:gap-8 xl:h-[374px]  relative">
			<SalesTrendChartSection />
			<div className="max-lg:w-full max-[450px]:flex max-[450px]:flex-col grid  grid-cols-2 min-[540px]:flex min-[540px]:flex-wrap justify-between xl:grid xl:grid-cols-2 min-[500px]:gap-5 min-[400px]:gap-3 gap-2 h-full xl:w-[488px]">
				{TOTAL_CARDS.map((card) => (
					<TrendCard key={card.id} card={card} />
				))}
			</div>
		</section>
	);
};

export default TrendsSection;
