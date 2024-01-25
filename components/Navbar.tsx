"use client";

import { Calendar, HambergerMenu, Notification } from "iconsax-react";
import SearchBox from "./SearchBox";

import UserContainer from "./UserContainer";
import { handleMouseEnter } from "@/utils/text-effect";
import { useStateCtx } from "@/context/StateContext";

const Navbar = () => {
	const { openSidebar, setOpenSidebar } = useStateCtx();

	return (
		<nav className=" w-full flex items-center justify-between px-2 md:px-4 py-2 md:py-[18px] md:h-[88px] border-b-soft-border border-b dark:border-success/40 ">
			<button
				type="button"
				aria-haspopup
				aria-label="Open sidebar menu"
				aria-expanded={openSidebar}
				onKeyUp={(e) => {
					if (e.key === "Enter" || e.key === " ") {
						setOpenSidebar(true);
						return;
					}
				}}
				onClick={() => setOpenSidebar(true)}
				tabIndex={0}
				className="focus-visible:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-success min-[900px]:hidden mr-4 h-10 w-10 relative z-50 "
			>
				<HambergerMenu className="" />
			</button>
			<div className="flex w-full max-w-[30%]">
				<h2
					onMouseEnter={handleMouseEnter}
					className="text-[20px] font-semibold text-header dark:text-gray-100 "
					data-value="Dashboard"
				>
					Dashboard
				</h2>
			</div>
			<div className="flex items-center  w-full justify-end gap-x-3 md:gap-x-5">
				<SearchBox />
				<div className="flex md:w-[193px] justify-center items-center gap-x-4">
					<Calendar
						size={20}
						tabIndex={-1}
						className=" text-black dark:text-success "
						aria-hidden
					/>
					<span className="text-header dark:text-success font-medium text-sm font-inter w-[131px] hidden md:inline-block">
						November 15, 2023
					</span>
				</div>
				<span className="border border-soft-light dark:border-success/20  flex justify-center items-center rounded-full h-10 w-full max-w-[40px]">
					<Notification className="text-black dark:text-success w-5 h-5" />
				</span>
				<UserContainer />
			</div>
		</nav>
	);
};

export default Navbar;
