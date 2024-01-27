import { cn } from "@/utils/util";
import React from "react";

const DropdownButton = ({
	text,
	className,
	icon,
}: {
	text: string;
	className?: HTMLButtonElement["className"];
	icon?: JSX.Element;
}) => {
	return (
		<button
			type="button"
			tabIndex={0}
			aria-label="open search"
			className={cn(
				" transition-opacity duration-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light rounded-full flex items-center gap-x-3 text-header dark:text-white hover:opacity-70 ",
				className
			)}
		>
			{icon && icon}
			<span className="text-sm">{text}</span>
		</button>
	);
};
export default DropdownButton;
