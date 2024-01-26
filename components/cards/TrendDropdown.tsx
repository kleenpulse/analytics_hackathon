import { useStateCtx } from "@/context/StateContext";
import { cn } from "@/utils/util";
import { Setting, Shop, User } from "iconsax-react";
import { CheckCheck, ChevronDown, Lightbulb } from "lucide-react";
import React, { useState } from "react";
type SortsProps = {
	id: number;
	label: string;
};
const SORTS: SortsProps[] = [
	{ id: 0, label: "Daily" },
	{ id: 1, label: "Weekly" },
	{ id: 2, label: "Monthly" },
	{ id: 3, label: "Yearly" },
	{ id: 4, label: "All" },
];

const TrendDropdown = () => {
	const { openTrendmenu, setOpenTrendmenu } = useStateCtx();
	const [currentSort, setCurrentSort] = useState("Weekly");

	return (
		<div className="relative flex items-center gap-x-4">
			<span className="text-secondary dark:text-gray-300 text-sm font-medium">
				Sort by:
			</span>
			<button
				type="button"
				aria-haspopup
				aria-label="Open user menu"
				aria-expanded={openTrendmenu}
				onKeyUp={(e) => {
					if (e.key === "Enter" || e.key === " ") {
						setOpenTrendmenu((prev) => !prev);
						return;
					}
				}}
				onClick={() => setOpenTrendmenu((prev) => !prev)}
				tabIndex={0}
				className="focus-visible:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-success flex gap-x-2 items-center justify-between w-[96px] h-[32px] px-3 py-1 rounded-full border border-soft-border dark:border-success/20 text-sm text-header dark:text-white transition-all duration-300"
			>
				<span className="w-[42px]">{currentSort}</span>
				<ChevronDown
					size={20}
					className={cn(
						"text-main-sec dark:text-gray-300 transition-all transform-gpu duration-300",
						openTrendmenu ? "rotate-180" : ""
					)}
				/>
			</button>
			{openTrendmenu && (
				<div
					className="min-h-screen h-screen top-0 left-0 w-full fixed z-[99] opacity-0 bg-black/25 cursor-default"
					role="dialog"
					onClick={() => setOpenTrendmenu(!openTrendmenu)}
				/>
			)}
			<div
				role="dialog"
				className={cn(
					" absolute max-h-max max-w-max  w-[200px] top-10 -right-4 z-[999999] dark:bg-gray-950/70 border border-soft-border dark:border-success/80 bg-white backdrop-blur-xl flex flex-col   items-center  dark:shadow-[0_10px_40px_rgba(0,0,0,0.53)] shadow-[0_10px_40px_rgba(0,0,0,0.23)] rounded-xl before:absolute before:content-[''] before:h-[20px] before:w-[20px] before:bg-gradient-to-tl dark:from-transparent dark:via-transparent dark:to-color-dark from-white  to-white before:overflow-hidden before:-top-2 before:rotate-[45deg] before:right-4 before:z-[-1] transform-gpu transition-all ",
					openTrendmenu
						? "opacity-100 h-[180px] duration-500 "
						: "opacity-0 h-0 duration-200 overflow-hidden"
				)}
			>
				<div className="z-50 w-max rounded-xl  py-3 px-4 text-sm ">
					{SORTS.map((sort) => (
						<button
							key={sort.id}
							type="button"
							aria-haspopup
							aria-expanded={openTrendmenu}
							aria-label="Sort trends"
							onKeyUp={(e) => {
								if (e.key === "Enter" || e.key === " ") {
									setCurrentSort(sort.label);
									return;
								}
							}}
							onClick={() => setCurrentSort(sort.label)}
							tabIndex={0}
							className={cn(
								"hover:text-black dark:hover:text-success flex cursor-pointer items-center py-1 px-2 gap-2 hover:font-medium focus-visible:bg-black/5 focus-visible:px-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-success duration-300 transition-colors",
								currentSort === sort.label
									? "text-success font-semibold"
									: "text-gray-600 dark:text-gray-400 "
							)}
						>
							{currentSort === sort.label && (
								<CheckCheck className="text-success" />
							)}
							{!(currentSort === sort.label) && (
								<CheckCheck className="opacity-0" />
							)}

							{sort.label}
						</button>
					))}
				</div>
			</div>
		</div>
	);
};

export default TrendDropdown;
