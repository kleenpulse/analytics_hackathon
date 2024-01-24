import {
	type Icon,
	Category,
	Briefcase,
	WalletMoney,
	MessageText,
	Personalcard,
	Notification,
	Profile2User,
	ArchiveBook,
	TrendUp,
	Box,
	DiscountShape,
	InfoCircle,
	ArrowCircleRight2,
	Setting2,
	Logout,
} from "iconsax-react";

type SidebarProps = {
	id?: number;
	label: string;
	icon: Icon;
	link: string;
};

export const SIDEBAR_LINKS: SidebarProps[] = [
	{
		id: 1,
		label: "Dashboard",
		icon: Category,
		link: "dashboard",
	},

	{
		id: 3,
		label: "Analytics",
		icon: TrendUp,
		link: "trend-up",
	},
	{
		id: 4,
		label: "Users",
		icon: Profile2User,
		link: "users",
	},
	{
		id: 5,
		label: "Air drop",
		icon: Box,
		link: "box",
	},
	{
		id: 6,
		label: "Expenses",
		icon: DiscountShape,
		link: "discount-shape",
	},
	{
		id: 7,
		label: "Info",
		icon: InfoCircle,
		link: "info",
	},
];

type SidebarFooterProps = {
	id?: number;
	label: string;
	icon: Icon;
	link: "open-sidebar" | "settings" | "logout";
};
export const SIDEBAR_FOO_LINKS: SidebarFooterProps[] = [
	{
		id: 1,
		label: "Open sidebar",
		icon: ArrowCircleRight2,
		link: "open-sidebar",
	},
	{
		id: 2,
		label: "Settings",
		icon: Setting2,
		link: "settings",
	},

	{
		id: 3,
		label: "Logout",
		icon: Logout,
		link: "logout",
	},
];

export const TYPESidebarLinks = SIDEBAR_LINKS.map((link) => link.link);
