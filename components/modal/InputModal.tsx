"use client";

import { useStateCtx } from "@/context/StateContext";
import { cn } from "@/utils/util";
import { Search, X } from "lucide-react";
import React from "react";

const InputModal = () => {
	const { searchTerm, setSearchTerm, openSearchBox, setOpenSearchBox } =
		useStateCtx();

	return (
		<>
			<div
				aria-hidden
				className={cn(
					" fixed min-h-screen w-full bg-black/5 top-0 left-0  transition-all  z-[99] ",
					openSearchBox
						? "opacity-100 duration-500"
						: "opacity-0 pointer-events-none duration-300"
				)}
				onClick={() => {
					setOpenSearchBox(false);
				}}
			/>
			<div
				className={cn(
					"flex min-[600px]:hidden w-full max-w-[349px] h-[48px] fixed  right-0 items-center transform-gpu transition-transform  z-[9999]",
					openSearchBox
						? "translate-y-0  duration-500"
						: "-translate-y-[200px] duration-200 pointer-events-none"
				)}
			>
				<div className=" items-center w-full h-full relative flex rounded-3xl">
					<input
						tabIndex={0}
						onChange={(e) => setSearchTerm(e.target.value)}
						value={searchTerm}
						type="text"
						placeholder="Search user..."
						className=" w-full h-[40px] dark:border-success/20 border-soft-light transition-all duration-300  min-[900px]:h-[56px] outline-none focus-visible:border-successbg-white dark:bg-gray-900  text-black dark:text-gray-200 border text-md font-medium rounded-3xl focus-visible:ring-ssuccess/20 dark:focus-visible:border-success  pl-[42px] "
						aria-label="Search"
					/>

					<Search
						size={18}
						className="absolute left-3 text-light dark:text-success "
						aria-hidden
						tabIndex={-1}
					/>
				</div>

				<button
					type="button"
					tabIndex={0}
					aria-label="Clear search"
					onClick={() => setSearchTerm("")}
					className={cn(
						"absolute right-2 transition-opacity duration-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light rounded-full",
						{
							"opacity-0 duration-300 pointer-events-none": !searchTerm,
						}
					)}
				>
					<X size={18} className="text-light dark:text-success " />
				</button>
			</div>
		</>
	);
};

export default InputModal;
