"use client";

import Image from "next/image";
import { SIDEBAR_FOO_LINKS, SIDEBAR_LINKS } from "@/libs/constants";
import { useState, useEffect } from "react";
import { cn, shrinkString } from "@/utils/util";
import { LogoutCurve, Setting2 } from "iconsax-react";
import Link from "next/link";
import ThemeButtons from "./ThemeButtons";
import { useStateCtx } from "@/context/StateContext";

const Sidebar = () => {
	const { openSidebar, setOpenSidebar } = useStateCtx();
	const [activeLink, setActiveLink] = useState(SIDEBAR_LINKS[0].link);

	return (
		<section className="bg-[#f7f8fa] dark:bg-gray-900 dark:border-r-gray-700 border-r-[#EBECF2] z-[50] w-[80px]  transition-all duration-300 py-5 flex flex-col gap-y-4 items-center justify-between fixed h-screen left-0 top-0  border-r border-gray-200  sidebar-scroll  group select-none">
			<div className="flex flex-col gap-y-4  w-full items-center relative">
				<Link href="/" className=" w-10  h-10 mb-5">
					<Image src="/logo.svg" alt="Logo" width={40} height={40} />
				</Link>
				{SIDEBAR_LINKS.map((link) => (
					<button
						type="button"
						role="link"
						aria-current={activeLink === link.link ? "page" : undefined}
						key={link.id}
						onKeyUp={(e) => {
							if (e.key === "Enter" || e.key === " ") {
								setActiveLink(link.link);
								return;
							}
						}}
						tabIndex={0}
						aria-label={link.label}
						className={cn(
							"flex items-center justify-center  h-10 w-full text-[#B2ABAB] dark:text-gray-300 font-medium text-base transition-colors duration-300 cursor-pointer relative before:content-[''] before:absolute before:right-0 before:h-[21px] before:w-[3px] before:bg-black  dark:before:bg-gray-200 before:rounded-tl-md before:rounded-bl-md  before:transition-all before:duration-300 group/btn",
							activeLink === link.link
								? " before:opacity-100 bg-primary-light dark:bg-primary-light/75 dark:text-white  text-main-sec rounded outline-none"
								: "before:opacity-0 before:hover:opacity-30 dark:before:hover:opacity-50 hover:bg-black/10 dark:hover:bg-color-dark/10 focus-visible:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light"
						)}
						onClick={() => setActiveLink(link.link)}
					>
						<link.icon
							size={24}
							aria-hidden
							variant={activeLink === link.link ? "Bulk" : "Broken"}
						/>
						<span className="absolute left-16  max-w-max w-[120px] z-10 bg-success/90 text-white rounded-md text-xs px-2 py-1  before:content-[''] backdrop-blur-xl before:absolute before:-left-1 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:-rotate-45 before:bg-gradient-to-tl from-transparent via-success/70 to-success transform-gpu translate-x-8 opacity-0 transition-all duration-500 group-hover/btn:opacity-100 group-hover/btn:translate-x-5 pointer-events-none">
							{shrinkString({
								str: link.label,
								len: 17,
							})}
						</span>
					</button>
				))}
				<ThemeButtons />
			</div>

			<div className="flex flex-col gap-y-4  w-full items-center relative">
				{SIDEBAR_FOO_LINKS.map((link) => (
					<button
						type="button"
						role="link"
						key={link.id}
						onKeyUp={(e) => {
							if (e.key === "Enter" || e.key === " ") {
								setActiveLink(link.link);
								return;
							}
						}}
						tabIndex={0}
						aria-label={link.label}
						className={cn(
							"flex items-center justify-center  h-10 w-full text-[#B2ABAB] dark:text-gray-300 font-medium text-base transition-colors duration-300 cursor-pointer relative before:content-[''] before:absolute before:right-0 before:h-[21px] before:w-[3px] before:bg-black  dark:before:bg-gray-200 before:rounded-tl-md before:rounded-bl-md  before:transition-all before:duration-300 group/btn",
							activeLink === link.link
								? " before:opacity-100 bg-primary-light dark:bg-primary-light/75 dark:text-white  text-main-sec rounded outline-none"
								: "before:opacity-0 before:hover:opacity-30 dark:before:hover:opacity-50 hover:bg-black/10 dark:hover:bg-color-dark/10 focus-visible:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light"
						)}
						onClick={() => {
							if (link.link === "open-sidebar") {
								setOpenSidebar(!openSidebar);
								return;
							}
							setActiveLink(link.link);
						}}
					>
						<link.icon
							className={cn(
								"transition-transform duration-500",
								link.link === "open-sidebar" && !openSidebar
									? "rotate-0"
									: link.link === "open-sidebar" && openSidebar
									? "rotate-[540deg]"
									: ""
							)}
							size={24}
							aria-hidden
							variant={activeLink === link.link ? "Bulk" : "Broken"}
						/>
						<span className="absolute left-16  max-w-max w-[120px] z-10 bg-success/90 text-white rounded-md text-xs px-2 py-1  before:content-[''] backdrop-blur-xl before:absolute before:-left-1 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:-rotate-45 before:bg-gradient-to-tl from-transparent via-success/70 to-success transform-gpu translate-x-8 opacity-0 transition-all duration-500 group-hover/btn:opacity-100 group-hover/btn:translate-x-5 pointer-events-none">
							{openSidebar && link.link === "open-sidebar"
								? "Close sidebar"
								: !openSidebar && link.link === "open-sidebar"
								? "Open sidebar"
								: link.label}
						</span>
					</button>
				))}
			</div>
		</section>
	);
};

export default Sidebar;
