import useInView from "@/hooks/useInView";
import { TopPlatformProps } from "@/libs/constants";
import { cn } from "@/utils/util";
import React, { useRef } from "react";

const TopPlatformCard = ({ data }: { data: TopPlatformProps }) => {
	const platformRef = useRef<HTMLDivElement | null>(null);
	const isPlatformInView = useInView({
		ref: platformRef,
		once: false,
		isFrames: true,
	});

	return (
		<div className="w-full flex-col flex gap-y-4">
			<p className="text-[#22242c] dark:text-gray-200 sm:text-[18px] font-medium sm:font-semibold font-jakarta">
				{data.label}
			</p>
			<span
				ref={platformRef}
				className={cn(
					"relative w-full h-3 bg-[#f5f5f5] dark:bg-gray-900  rounded-md "
				)}
			>
				<span
					style={{
						width: isPlatformInView ? data.percentage : "0%",
					}}
					className={cn(
						"absolute h-full  bg-black rounded-md transition-all duration-1000 ",
						{
							"bg-[#6160DC] dark:bg-gradient-to-r from-[#fbfbff] to-[#981cf8]":
								data.value === "book-bazar",
							"bg-[#54C5EB] dark:bg-gradient-to-r from-[#fbfbff] to-[#0dedfd] ":
								data.value === "artisan-aisle",
							"bg-[#FFB74A] dark:bg-gradient-to-r from-[#fbfbff] to-[#ffc004] ":
								data.value === "toy-troop",
							"bg-[#FF4A55]  dark:bg-gradient-to-r from-[#fbfbff] to-[#ff0177]":
								data.value === "x-store",
						}
					)}
				/>
			</span>
			<div className="flex w-full items-center justify-between">
				<span>{data.cash_value}</span>
				<span>{data.percentage_value}</span>
			</div>
		</div>
	);
};

export default TopPlatformCard;
