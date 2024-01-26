import { useStateCtx } from "@/context/StateContext";
import { cn } from "@/utils/util";
import { DocumentDownload } from "iconsax-react";
import Image from "next/image";
import React from "react";

const MobileLastOrderSection = ({ usersNum }: { usersNum: number }) => {
	const { searchTerm, filterUsers } = useStateCtx();
	return (
		<div className="flex sm:hidden w-full h-[420px] hide-scroll overflow-y-auto flex-col  ">
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
					<div className="font-medium w-[216px] flex items-center    gap-x-2   border-gray-200 text-secondary  dark:text-gray-300  h-full ">
						<span className="w-full max-w-[35px] h-[35px]  min-[700px]:max-w-[40px] min-[700px]:h-[40px] rounded-full overflow-hidden">
							<Image
								src={data.avatar}
								alt="user"
								width={38}
								height={38}
								className="rounded-full object-contain w-full h-full"
							/>
						</span>
						<div className="flex flex-col">
							<span
								className="font-medium text-xs min-[500px]:text-sm min-[700px]:textbase	"
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
							<span className="text-xs w-full font-medium max-w-[116px] flex items-center  border-gray-200 text-[#9ca4ab]  dark:text-gray-400  h-full min-[500px]:hidden">
								{data.date}
							</span>
						</div>
					</div>

					<span className="text-xs w-full font-medium max-w-[116px] flex items-center  border-gray-200 text-[#9ca4ab]  dark:text-gray-100  h-full max-[500px]:hidden">
						{data.date}
					</span>
					<span className="text-xs w-full max-w-[100px] flex items-center max-[500px]:justify-center  border-gray-200 text-main-sec  dark:text-gray-100  h-full">
						{data.amount}
					</span>
					<div className="flex flex-col gap-y-1">
						<span
							className={cn(
								" text-sm min-[700px]:textbase font-medium w-full max-w-[100px]  flex items-center  h-full capitalize",
								{
									"text-success ": data.status === "paid",
									"text-trend-down ": data.status === "refund",
								}
							)}
						>
							{data.status}
						</span>
						<span className=" w-full max-w-[100px] text-main-sec  dark:text-gray-100  flex  gap-x-2 items-center  h-full">
							<DocumentDownload size={16} />
							<span className="text-xs ">View</span>
						</span>
					</div>
				</div>
			))}
		</div>
	);
};

export default MobileLastOrderSection;
