"use client";

import { Suspense, useState } from "react";

import { cn } from "@/utils/util";
import { useStateCtx } from "@/context/StateContext";
import Image from "next/image";
import { DocumentDownload } from "iconsax-react";
import MobileLastOrderSection from "./MobileLastOrderSection";
import ViewDocsModal from "../modal/ViewDocsModal";
import { useRouter } from "next/navigation";

// export const dynamic = "force-dynamic";
const LastOrdersSection = () => {
	const { searchTerm, setViewDocModal, filterUsers, setSearchTerm } =
		useStateCtx();
	const router = useRouter();

	const initNum = 5;
	const [usersNum, setUsersNum] = useState(initNum);

	return (
		<>
			<ViewDocsModal />
			<section
				className={cn(
					"xl:w-[700px] min-[1400px]:w-[806px] h-[422px] flex-col flex gap-3 justify-center items-center py-6 border border-soft-border dark:border-success/20   bg-white dark:bg-gray-950 px-4 rounded-2xl",
					{
						"!hidden": filterUsers.length > 1,
					}
				)}
			>
				<div className="flex w-full justify-center gap-x-3 text-[#9ca4ab]  dark:text-gray-300">
					<span>User named </span>
					<span className="font-bold text-main-sec dark:text-success">
						&ldquo;{searchTerm}&rdquo;
					</span>
					<span> not found</span>
				</div>
				<button
					type="button"
					onClick={() => setSearchTerm("")}
					className="text-success dark:font-bold"
				>
					Clear search
				</button>
			</section>
			<section
				className={cn(
					"xl:w-[700px] min-[1400px]:w-[806px] h-[422px] flex flex-col gap-y-[14px] justify-center py-6 border border-soft-border dark:border-success/20 text-[#9ca4ab]  dark:text-gray-300  bg-white dark:bg-gray-950 px-4 rounded-2xl ",
					{
						"!hidden": filterUsers.length === 0,
					}
				)}
			>
				<div className="flex items-center justify-between w-full ">
					<span className="text-[18px] font-semibold text-header  dark:text-white">
						Last Orders
					</span>
					<button
						type="button"
						className="text-success  text-sm sm:text-[18px] font-medium  capitalize"
						onClick={() => {
							if (usersNum === initNum) {
								setUsersNum(filterUsers.length);
								return;
							}
							setUsersNum(initNum);
						}}
					>
						{usersNum === initNum ? " See All" : "See Less"}
					</button>
				</div>
				<section
					className={cn(
						"xl:w-[700px] min-[1400px]:w-[806px] h-[422px] flex flex-col gap-y-[14px] justify-center py-6 b text-[#9ca4ab]  dark:text-gray-300  bg-white dark:bg-gray-950 px-4 rounded-2xl overflow-x-scroll",
						{
							"!hidden": filterUsers.length === 0,
						}
					)}
				>
					<div className="flex flex-nowrap items-center justify-between  w-full min-w-[550px]  border-b border-[#edf2f6] dark:border-success/20 text-[#9ca4ab]  dark:text-gray-300  pb-3 ">
						<span className=" font-medium w-[216px]  flex items-center    text-[#9ca4ab]  dark:text-gray-100  h-full ">
							Name
						</span>

						<span className=" font-medium w-[116px] flex items-center    text-[#9ca4ab]  dark:text-gray-100  h-full">
							Date
						</span>
						<span className=" font-medium w-full max-w-[100px] lg:max-w-[127px] flex items-center    text-[#9ca4ab]  dark:text-gray-100  h-full">
							Amount
						</span>
						<span className="text-[#9ca4ab]  dark:text-gray-100  font-medium w-full max-w-[80px] sm:max-w-[100px]   flex items-center   h-full">
							Status
						</span>
						<span className="text-[#9ca4ab]  dark:text-gray-100  font-medium w-full max-w-[80px] sm:max-w-[100px]   flex items-center   h-full">
							Invoice
						</span>
					</div>

					<div className="flex w-full h-[420px] hide-scroll overflow-auto min-w-[550px] flex-col  -mt-[14px]">
						{filterUsers.slice(0, usersNum).map((data, index) => (
							<div
								key={data.id}
								className={cn(
									"flex flex-nowrap  items-center justify-between  w-full   border-b border-[#edf2f6] dark:border-success/20 text-[#9ca4ab]  dark:text-gray-300 py-2 lg:py-3 transition-all duration-300 ",
									{
										"border-none": index === filterUsers.length - 1,
									}
								)}
							>
								<span className="font-medium w-[216px] flex items-center    gap-x-2   border-gray-200 text-secondary  dark:text-gray-300  h-full ">
									<span className="w-full max-w-[35px] h-[35px]  min-[700px]:max-w-[40px] min-[700px]:h-[40px] rounded-full overflow-hidden">
										<Image
											src={data.avatar}
											alt="user"
											width={38}
											height={38}
											className="rounded-full object-contain w-full h-full"
										/>
									</span>
									<span
										className="font-medium text-sm min-[700px]:textbase	"
										title={data.name}
										dangerouslySetInnerHTML={{
											__html: data.name.replace(
												new RegExp(`(${searchTerm})`, "gi"),
												(match, group) =>
													`<span style="color: black; background-color: ${
														group.toLowerCase() === searchTerm.toLowerCase()
															? "yellow"
															: "inherit"
													}">${match}</span>`
											),
										}}
									/>
								</span>

								<span className="text-xs sm:text-sm min-[700px]:textbase font-medium w-[116px] flex items-center  border-gray-200 text-[#9ca4ab]  dark:text-gray-100  h-full">
									{data.date}
								</span>
								<span className="text-sm min-[700px]:textbase font-medium w-full max-w-[100px] lg:max-w-[127px] flex items-center  border-gray-200 text-main-sec  dark:text-gray-100  h-full">
									{data.amount}
								</span>
								<span
									className={cn(
										" text-sm min-[700px]:textbase font-medium w-full max-w-[80px] sm:max-w-[100px]   flex items-center  h-full capitalize",
										{
											"text-success ": data.status === "paid",
											"text-trend-down ": data.status === "refund",
										}
									)}
								>
									{data.status}
								</span>
								<button
									type="button"
									tabIndex={0}
									onClick={() => {
										router.push(`?docId=${data.id}`, { scroll: false });
										setViewDocModal(true);
									}}
									className="text-sm min-[700px]:textbase  font-medium w-full max-w-[80px] sm:max-w-[100px] text-main-sec  dark:text-gray-100  flex  gap-x-2 items-center  h-full"
								>
									<DocumentDownload size={16} />
									<span className="text-sm ">View</span>
								</button>
							</div>
						))}
					</div>
				</section>
				{/* <MobileLastOrderSection usersNum={usersNum} /> */}
			</section>
		</>
	);
};

export default LastOrdersSection;
