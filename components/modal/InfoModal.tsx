import { useStateCtx } from "@/context/StateContext";
import { cn, shrinkString } from "@/utils/util";
import { Logout, Setting, User } from "iconsax-react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import DropdownButton from "../miscellaneous/DropdownButton";

const InfoModal = ({ info }: { info?: string }) => {
	const { user, showDate, setShowDate, showNotification, setShowNotification } =
		useStateCtx();
	const isModalOpen = showDate || showNotification;

	return (
		<>
			{isModalOpen && (
				<div
					className="min-h-screen h-screen top-0 left-0 w-full fixed z-[99] opacity-0 bg-black/5 cursor-default min-[900px]:hidden"
					role="dialog"
					onClick={() => setShowDate(!showDate)}
				/>
			)}
			<div
				role="dialog"
				className={cn(
					" absolute max-h-max max-w-max border dark:border-success/80 p-4 border-soft-light  w-[220px] top-16 right-[3.4rem] md:right-[7.4rem] z-[999] dark:bg-black/60  bg-white backdrop-blur-xl min-[900px]:hidden flex  gap-y-2   justify-center items-center  shadow-[0_10px_40px_rgba(0,0,0,0.23)] rounded-xl before:absolute before:content-[''] before:h-[20px] before:w-[20px] before:bg-gradient-to-tl dark:from-transparent dark:via-transparent dark:to-success from-white  to-white before:overflow-hidden before:-top-2 before:rotate-[45deg] before:left-1/2 before:-translate-x-1/2 before:z-[-1] transform-gpu transition-all ",
					showDate
						? "opacity-100 h-[50px] duration-500 "
						: "opacity-0 h-[0px] duration-200 overflow-hidden"
				)}
			>
				<span
					className={cn(
						"text-sm ",
						info?.length
							? "text-header dark:text-gray-200 font-medium font-inter"
							: " text-gray-500 dark:text-gray-400"
					)}
				>
					{info ? info : "Nothing to see here"}
				</span>
			</div>
		</>
	);
};

export default InfoModal;
