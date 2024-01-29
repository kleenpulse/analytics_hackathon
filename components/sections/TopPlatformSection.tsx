"use client";

import { TOP_PLATFORMS } from "@/libs/constants";
import { cn } from "@/utils/util";
import React, { useState } from "react";
import TopPlatformCard from "../cards/TopPlatformCard";

const TopPlatformSection = () => {
	const initNum = 5;
	const [usersNum, setUsersNum] = useState(initNum);

	return (
		<section
			className={cn(
				"w-full xl:w-[488px] flex flex-col gap-y-[14px] justify-center py-6 border border-soft-border dark:border-success/20 text-[#9ca4ab]  dark:text-gray-300  bg-white dark:bg-gray-950 px-4 rounded-2xl"
			)}
		>
			<div className="flex items-center justify-between w-full sm:px-4">
				<span className="text-[18px] font-semibold text-header  dark:text-white">
					Top Platform
				</span>
				<button
					type="button"
					className="text-success  text-sm sm:text-[18px] font-medium  capitalize hover:opacity-60"
					onClick={() => {
						if (usersNum === initNum) {
							setUsersNum(TOP_PLATFORMS.length);
							return;
						}
						setUsersNum(initNum);
					}}
				>
					{usersNum === initNum ? " See All" : "See Less"}
				</button>
			</div>

			<div className="flex w-full h-[420px] hide-scroll overflow-y-auto flex-col sm:px-4   mt-4 gap-y-4">
				{TOP_PLATFORMS.slice(0, usersNum).map((data) => (
					<TopPlatformCard key={data.id} data={data} />
				))}
			</div>
		</section>
	);
};

export default TopPlatformSection;
