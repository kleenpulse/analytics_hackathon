import React from "react";
import LastOrdersSection from "./LastOrdersSection";
import TopPlatformSection from "./TopPlatformSection";

const BottomSection = () => {
	return (
		<section className="w-full flex-col flex xl:flex-row xl:justify-between xl:gap-x-5 gap-5">
			<LastOrdersSection />
			<TopPlatformSection />
		</section>
	);
};

export default BottomSection;
