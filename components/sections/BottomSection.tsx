import React, { Suspense } from "react";
import LastOrdersSection from "./LastOrdersSection";
import TopPlatformSection from "./TopPlatformSection";
import LoadingSpinner from "../LoadingSpinner";

const BottomSection = () => {
	return (
		<section className="w-full flex-col flex xl:flex-row xl:justify-center gap-y-5 lg:gap-x-4 xl:gap-8">
			<Suspense fallback={<LoadingSpinner />}>
				<LastOrdersSection />
			</Suspense>
			<TopPlatformSection />
		</section>
	);
};

export default BottomSection;
