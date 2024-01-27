import React, { Suspense } from "react";
import LastOrdersSection from "./LastOrdersSection";
import TopPlatformSection from "./TopPlatformSection";
import LoadingSpinner from "../LoadingSpinner";

const BottomSection = () => {
	return (
		<section className="w-full flex-col flex xl:flex-row xl:justify-between xl:gap-x-5 gap-5">
			<Suspense fallback={<LoadingSpinner />}>
				<LastOrdersSection />
			</Suspense>
			<TopPlatformSection />
		</section>
	);
};

export default BottomSection;
