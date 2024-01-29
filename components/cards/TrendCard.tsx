import { TotalCardsProps } from "@/libs/constants";
import { cn } from "@/utils/util";
import { BoxTick } from "iconsax-react";
import { TrendingDown, TrendingUp } from "lucide-react";
import Image from "next/image";
import React from "react";

const TrendCard = ({ card }: { card: TotalCardsProps }) => {
	return (
		<div className="min-[500px]:w-full xl:w-[239px]  xl:h-[179px] p-2 min-[500px]:p-4 max-[450px]:p-4 max-[450px]:w-full border border-soft-border dark:border-success/20 flex flex-col justify-between rounded-[16px] bg-white dark:bg-gray-950  gap-y-[10px]">
			<div className="flex justify-between w-full">
				<span className="border border-soft-light dark:border-success/50  flex justify-center items-center rounded-full min-[500px]:h-10 w-full min-[500px]:max-w-[40px] max-w-[30px] h-[30px]">
					<card.icon
						variant="Bulk"
						className="text-success min-[500px]:w-[24px] w-[18px]"
					/>
				</span>
				<Image
					src={card.isTrendup ? "/trend-up.svg" : "/trend-down.svg"}
					alt="trend"
					height={32}
					width={104}
					className="dark:brightness-150 min-[500px]:w-[104px] min-[450px]:w-[90px] w-[80px] max-[450px]:w-[100px]"
				/>
			</div>

			<div className="flex flex-col justify-between">
				<p className="text-[#898989] dark:text-gray-300 font-medium min-[500px]:text-[18px] min-[420px]:text-sm text-xs max-[450px]:text-[14px]">
					{card.title}
				</p>
				<p className="text-[#3a3f51] dark:text-gray-100 font-semimedium min-[500px]:text-2xl text-xl max-[450px]:text-2xl">
					{card.totalValue}
				</p>
			</div>

			<div className="flex w-full items-center justify-between gap-x-2">
				<span
					className={cn(
						" rounded-full h-[24px] lg:w-[70px] max-[450px]:w-[60px] px-1 min-[420px]:px-2 max-[450px]:px-2 py-1 flex items-center justify-between gap-x-[2px] min-[400px]:gap-x-1 font-medium text-[10px] min-[420px]:text-xs",
						{
							"bg-success/10 text-success": card.isTrendup,
							"bg-trend-down/10 text-trend-down": !card.isTrendup,
						}
					)}
				>
					{card.isTrendup ? (
						<TrendingUp className="min-[500px]:w-[12px] min-[420px]:w-[10px] w-[8px]" />
					) : (
						<TrendingDown className="min-[500px]:w-[12px] min-[420px]:w-[10px] w-[8px]" />
					)}
					<span>{card.stockValue}</span>
				</span>
				<span className="text-[10px] max-[450px]:text-sm min-[420px]:text-xs lg:text-sm dark:text-gray-300">
					vs. previous month
				</span>
			</div>
		</div>
	);
};

export default TrendCard;
