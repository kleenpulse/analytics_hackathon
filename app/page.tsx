import BottomSection from "@/components/sections/BottomSection";

import TrendsSection from "@/components/sections/TrendsSection";
import TrendCard from "@/components/cards/TrendCard";
import { TOTAL_CARDS } from "@/libs/constants";
import Image from "next/image";
import InputModal from "@/components/modal/InputModal";

export default function Home() {
	return (
		<>
			<InputModal />
			<section className="w-full py-4 mb-20 relative min-h-screen flex flex-col px-2 sm:px-5  gap-y-5">
				<TrendsSection />
				<BottomSection />
			</section>
		</>
	);
}
