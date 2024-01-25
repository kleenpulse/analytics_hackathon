import { useStateCtx } from "@/context/StateContext";
import { cn, shrinkString } from "@/utils/util";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const UserContainer = () => {
	const { user } = useStateCtx();
	const [openProfile, setOpenProfile] = useState(false);

	return (
		<div className="w-full max-w-[50px] lg:max-w-[215px] h-[52px] flex items-center gap-x-1 justify-center lg:justify-between p-1 lg:px-2 lg:py-[6px] rounded-full border border-soft-border dark:border-success/20 relative">
			<button
				type="button"
				aria-haspopup
				aria-label="Open user menu"
				aria-expanded={openProfile}
				onKeyUp={(e) => {
					if (e.key === "Enter" || e.key === " ") {
						setOpenProfile((prev) => !prev);
						return;
					}
				}}
				onClick={() => setOpenProfile((prev) => !prev)}
				tabIndex={0}
				className="focus-visible:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-success"
			>
				<Image
					src={user.profilePic}
					alt="user"
					height={38}
					width={38}
					className="rounded-full object-contain"
				/>
			</button>
			<div className="hidden lg:flex flex-col  items-end">
				<span className="text-header dark:text-gray-300 font-inter">
					{shrinkString({ str: user.username, len: 20 })}
				</span>
				<span className="text-sm text-[#787486] dark:text-gray-400">
					{shrinkString({ str: user.email, len: 20 })}
				</span>
			</div>
			<button
				type="button"
				aria-haspopup
				aria-label="Open user menu"
				aria-expanded={openProfile}
				onKeyUp={(e) => {
					if (e.key === "Enter" || e.key === " ") {
						setOpenProfile((prev) => !prev);
						return;
					}
				}}
				onClick={() => setOpenProfile((prev) => !prev)}
				tabIndex={0}
				className="focus-visible:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-success hidden lg:inline-block"
			>
				<ChevronDown
					className={cn(
						"text-main-sec dark:text-gray-300 transition-all transform-gpu duration-300",
						openProfile ? "rotate-180" : ""
					)}
				/>
			</button>
			{openProfile && (
				<div
					className="min-h-screen h-screen top-0 left-0 w-full fixed z-[99] opacity-0 bg-black/25 cursor-default"
					role="dialog"
					onClick={() => setOpenProfile(!openProfile)}
				/>
			)}
			<div
				role="dialog"
				className={cn(
					" absolute max-h-max   w-[300px] top-16 right-1 z-[999999] dark:bg-primary/80 bg-white backdrop-blur-xl flex flex-col   items-center   shadow-[0_10px_40px_rgba(0,0,0,0.23)] rounded-xl before:absolute before:content-[''] before:h-[20px] before:w-[20px] before:bg-gradient-to-tl dark:from-transparent dark:via-transparent dark:to-color-dark from-white  to-white before:overflow-hidden before:-top-2 before:rotate-[45deg] before:right-4 before:z-[-1] transform-gpu transition-all ",
					openProfile
						? "opacity-100 h-[290px] duration-500 "
						: "opacity-0 h-0 duration-200 overflow-hidden"
				)}
			>
				<Image
					src={user.profilePic}
					alt="user"
					height={300}
					width={300}
					className="rounded-xl object-contain object-center"
				/>
				<div className="flex flex-col gap-y-1 pb-1 absolute rounded-br-xl rounded-bl-xl -bottom-[5px] left-0 w-full bg-black/10 backdrop-blur-sm">
					<DropdowmName
						className="uppercase"
						text={shrinkString({ str: user.username, len: 21 })}
					/>
					<DropdowmName text={shrinkString({ str: user.email, len: 21 })} />
				</div>
			</div>
		</div>
	);
};

export default UserContainer;

const DropdowmName = ({
	text,
	className,
}: {
	text: string;
	className?: HTMLSpanElement["className"];
}) => {
	return (
		<span
			className={cn(
				"bg-gradient-to-r from-transparent via-white to-transparent dark:from-transparent dark:via-success dark:to-transparent px-2 py-1 w-full text-center dark:hover:bg-color-dark/20 dark:text-gray-100 font-inter font-medium text-header  ",
				className
			)}
		>
			{text}
		</span>
	);
};
