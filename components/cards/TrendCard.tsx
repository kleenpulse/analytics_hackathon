import { TotalCardsProps } from "@/libs/constants";
import { cn } from "@/utils/util";
import { BoxTick } from "iconsax-react";
import { TrendingDown, TrendingUp } from "lucide-react";
import Image from "next/image";
import React from "react";

const TrendCard = ({ card }: { card: TotalCardsProps }) => {
	return (
		<div className="w-[239px] h-[179px] p-4 border border-soft-border dark:border-success/20 flex flex-col justify-between rounded-[16px] bg-white dark:bg-gray-950  gap-y-[10px]">
			<div className="flex justify-between w-full">
				<span className="border border-soft-light dark:border-success/50  flex justify-center items-center rounded-full h-10 w-full max-w-[40px]">
					<card.icon size={24} variant="Bulk" className="text-success" />
				</span>
				<Image
					src={card.isTrendup ? "/trend-up.svg" : "/trend-down.svg"}
					alt="trend"
					height={32}
					width={104}
					className="dark:brightness-150"
				/>
			</div>

			<div className="flex flex-col justify-between">
				<p className="text-[#898989] dark:text-gray-300 font-medium text-[18px]">
					{card.title}
				</p>
				<p className="text-[#3a3f51] dark:text-gray-100 font-semimedium text-2xl">
					{card.totalValue}
				</p>
			</div>

			<div className="flex w-full items-center justify-between gap-x-2">
				<span
					className={cn(
						" rounded-full h-[24px] lg:w-[70px] px-2 py-1 flex items-center justify-between text-xs gap-x-1 font-medium",
						{
							"bg-success/10 text-success": card.isTrendup,
							"bg-trend-down/10 text-trend-down": !card.isTrendup,
						}
					)}
				>
					{card.isTrendup ? (
						<TrendingUp size={12} />
					) : (
						<TrendingDown size={12} />
					)}
					<span>{card.stockValue}</span>
				</span>
				<span className="text-xs lg:text-sm dark:text-gray-300">
					vs. previous month
				</span>
			</div>
		</div>
	);
};

export default TrendCard;
