"use client";

import { FolderCheck, Send, X } from "lucide-react";

import { useEffect, useState } from "react";

import Image from "next/image";
import { Minus } from "iconsax-react";
import { useStateCtx } from "@/context/StateContext";
import { cn } from "@/utils/util";
import { USERS, UserProps } from "@/libs/constants";
import { useRouter, useSearchParams } from "next/navigation";
import LoadingSpinner from "../LoadingSpinner";
// export const dynamic = "force-dynamic";

const ViewDocsModal = () => {
	const { viewDocModal, setViewDocModal } = useStateCtx();

	const [isMaximize, setIsMaximize] = useState(true);

	const searchParams = useSearchParams();
	const docId = searchParams.get("docId");

	const user = USERS.find((user) => user.id === Number(docId)) as UserProps;
	if (!user) return <LoadingSpinner />;

	return (
		<>
			<div
				aria-hidden
				className={cn(
					" fixed min-h-screen w-full bg-black/40 top-0 left-0  transition-all  z-[99] backdrop-blur-sm",
					viewDocModal
						? "opacity-100 duration-500"
						: "opacity-0 pointer-events-none duration-300"
				)}
				onClick={() => {
					setViewDocModal(false);
				}}
			/>

			<div
				role="dialog"
				aria-labelledby="new-message"
				className={cn(
					"pt-2 min-[376px]:pt-4 sm:py-6   flex flex-col w-[98%] min-[400px]:w-[90%]  h-[470px] min-[350px]:h-[500px]  sm:w-[417px] items-start dark:bg-gray-900 bg-[#fafafa] backdrop-blur-lg fixed top-1/2 left-1/2  -translate-y-1/2 -translate-x-1/2 z-[999]  transition-all opacity-0 select-none px-2 sm:px-4 md:px-6 lg:px-8",
					viewDocModal
						? "scale-100 duration-700 opacity-100 rounded-xl md:rounded-2xl"
						: "scale-0 duration-300 pointer-events-none",
					isMaximize
						? "sm:h-[560px] sm:w-[617px] md:w-[650px] duration-500"
						: "sm:h-[460px] md:w-[450px]"
				)}
			>
				<div
					className={cn(
						"flex items-center justify-between w-full border-b border-header dark:border-success/20",
						isMaximize ? "sm:pb-4 pb-2" : "pb-2"
					)}
				>
					<div className="flex items-center gap-x-2">
						<Image
							src={user?.avatar}
							alt={user?.name ?? "user"}
							width={40}
							height={40}
							className="rounded-full"
						/>
						<p className="text-header dark:text-success font-semibold sm:text-lg">
							{user?.name}
						</p>
					</div>

					<div className="flex items-center gap-x-2">
						{/* EXPAND */}
						<button
							type="button"
							title="save"
							className="relative group/expand  hidden sm:inline-block "
							onClick={() => setIsMaximize(!isMaximize)}
						>
							<span className="absolute z-10 bg-blue-700/80 dark:bg-success text-white rounded-md text-xs px-2 py-1 -top-7 -right-[1.1rem] before:content-[''] before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2 before:w-2 before:h-2 before:rotate-45 before:bg-gradient-to-tl from-blue-700 to-blue-700/20 dark:from-success dark:to-success/20 opacity-0 group-hover/expand:opacity-100 transition-all duration-500 group-hover/expand:duration-200 pointer-events-none">
								{isMaximize ? "normal" : "expand"}
							</span>
							{isMaximize ? (
								<span className="w-6 h-6 rounded-md border-2 border-header dark:border-success flex ml-[2px]" />
							) : (
								<span className="w-6 h-6 text-header dark:text-success flex ml-[2px]">
									<Minus size={24} />
								</span>
							)}
						</button>

						{/* CLOSE || CLEAR */}
						<button
							type="button"
							tabIndex={0}
							aria-label="Close"
							onClick={() => {
								window?.setTimeout(() => {
									setViewDocModal(false);
								}, 200);
							}}
							className="text-header dark:text-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light rounded-full group/close relative "
						>
							<span className="absolute z-10 bg-red-700 text-white rounded-md text-xs px-2 py-1 -top-7 -right-[0.6rem] before:content-[''] before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2 before:w-2 before:h-2 before:rotate-45 before:bg-red-700 opacity-0 group-hover/close:opacity-100 transition-all duration-700 group-hover/close:duration-200 pointer-events-none ">
								Close
							</span>
							<X size={24} />
						</button>
					</div>
				</div>

				<div
					className={cn(
						"flex w-full flex-col max-sm:pt-4",
						isMaximize ? "sm:py-4 lg:py-6 gap-y-4" : "pt-4 gap-y-2"
					)}
				>
					<div
						className={cn(
							"flex w-full flex-col bg-white dark:bg-gray-950",
							isMaximize ? "sm:py-4 lg:py-6 gap-y-4 pl-4" : "pt-4 gap-y-2 p-3"
						)}
					>
						<p
							className={cn(
								"text-header dark:text-gray-300 ",
								isMaximize ? "sm:text-xl" : "text-sm sm:text-base lg:text-lg"
							)}
						>
							Transaction Date:{" "}
							<span className="font-semibold text-main-sec dark:text-gray-100">
								{user?.date}
							</span>
						</p>
						<p
							className={cn(
								"text-header dark:text-gray-300 ",
								isMaximize ? "sm:text-xl" : "text-sm sm:text-base lg:text-lg"
							)}
						>
							Cummulative Amount:{" "}
							<span className="font-semibold text-main-sec dark:text-gray-100">
								{user?.amount}
							</span>
						</p>
						<p
							className={cn(
								"text-header dark:text-gray-300 ",
								isMaximize ? "sm:text-xl" : "text-sm sm:text-base lg:text-lg"
							)}
						>
							Order Status:{" "}
							<span
								className={cn(" font-semibold capitalize text-lg", {
									"text-success ": user.status === "paid",
									"text-trend-down ": user.status === "refund",
								})}
							>
								{user.status}
							</span>
						</p>
					</div>
					<div
						className={cn(
							"flex w-full flex-col bg-white dark:bg-gray-950",
							isMaximize ? "py-4 lg:py-6 gap-y-4 pl-4" : "p-4 gap-y-2 "
						)}
					>
						<p
							className={cn(
								"text-main-sec font-medium font-inter dark:text-gray-200 uppercase",
								isMaximize ? "text-xl md:text-2xl " : "text-lg"
							)}
						>
							Some Other info
						</p>
						<p
							className={cn(
								"text-header dark:text-gray-400  ",
								isMaximize ? "sm:text-lg text-gray-500" : "text-sm sm:text-base"
							)}
						>
							I never knew I needed a toaster with a flux capacitor until now!
							My mornings have become a journey through time and taste. The
							bagels come out perfectly toasted, and the pop-up feature is so
							2024! The nostalgic tick-tock sounds take me back to the roaring
							80s every breakfast. Don not miss out on this time-bending
							culinary experience! Highly recommended!
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default ViewDocsModal;
