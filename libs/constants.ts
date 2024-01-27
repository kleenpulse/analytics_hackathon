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
	BoxTick,
	I3DRotate,
	ShoppingCart,
	Coin1,
} from "iconsax-react";
import React from "react";

type SidebarProps = {
	id?: number;
	label: string;
	icon: Icon;
	link: string;
};
interface ApexDataProps {
	name: string;
	data: number[];
}
export type UserProps = {
	id: number;
	name: string;
	status: string;
	avatar: string;
	date: string;
	amount: string;
};
export type TotalCardsProps = {
	id?: number;
	icon: Icon;
	image: string;
	title: string;
	totalValue: string;
	stockValue: string;
	stockLabel: string;
	isTrendup?: boolean;
	isTrenddown?: boolean;
};
interface ApexOptionsProps {
	xaxis: {
		categories: string[];
	};
	chart: {
		toolbar: {
			show: boolean;
		};
	};
	tooltip: {
		style: {
			fontSize?: string;
			fontFamily?: string;
			backgroundColor?: string;
		};
	};
}
export type TopPlatformProps = {
	id?: number;
	label: string;
	cash_value: string;
	percentage: string;
	percentage_value: string;

	value: string;
};

export const TOP_PLATFORMS: TopPlatformProps[] = [
	{
		id: 1,
		label: "Book Bazar",
		cash_value: "$2,500,000",
		percentage: "55%",
		percentage_value: "+15%",
		value: "book-bazar",
	},
	{
		id: 2,
		label: "Artisan Aisle",
		cash_value: "$1,800,000",
		percentage: "45%",
		percentage_value: "+10%",
		value: "artisan-aisle",
	},
	{
		id: 3,
		label: "Toy Troop",
		cash_value: "$1,200,000",
		percentage: "30%",
		percentage_value: "+8%",
		value: "toy-troop",
	},
	{
		id: 4,
		label: "XStore",
		cash_value: "$1,200,000",
		percentage: "30%",
		percentage_value: "+8%",
		value: "x-store",
	},
	{
		id: 5,
		label: "Book Bazar",
		cash_value: "$2,500,000",
		percentage: "55%",
		percentage_value: "+15%",
		value: "book-bazar",
	},
	{
		id: 6,
		label: "Artisan Aisle",
		cash_value: "$1,800,000",
		percentage: "45%",
		percentage_value: "+10%",
		value: "artisan-aisle",
	},
	{
		id: 7,
		label: "Toy Troop",
		cash_value: "$1,200,000",
		percentage: "30%",
		percentage_value: "+8%",
		value: "toy-troop",
	},
	{
		id: 8,
		label: "XStore",
		cash_value: "$1,200,000",
		percentage: "30%",
		percentage_value: "+8%",
		value: "x-store",
	},
];

export const TOTAL_CARDS: TotalCardsProps[] = [
	{
		id: 1,
		icon: BoxTick,
		image: "/trend-green.svg",
		totalValue: "350",
		stockValue: "23,5%",
		stockLabel: "vs. previous month",
		title: "Total Orders",
		isTrendup: true,
	},
	{
		id: 2,
		icon: I3DRotate,
		image: "/trend-red.svg",
		totalValue: "270",
		stockValue: "23,5%",
		stockLabel: "vs. previous month",
		title: "Total refund",
		isTrendup: false,
	},
	{
		id: 3,
		icon: ShoppingCart,
		image: "/trend-red.svg",
		totalValue: "1567",
		stockValue: "23,5%",
		stockLabel: "vs. previous month",
		title: "Average Sales",
		isTrendup: false,
	},
	{
		id: 4,
		icon: Coin1,
		image: "/trend-green.svg",
		totalValue: "$350.000",
		stockValue: "23,5%",
		stockLabel: "vs. previous month",
		title: "Total Income",
		isTrendup: true,
	},
];

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

export const Button_Link: SidebarProps[] = [
	{
		id: 1,
		label: "Right",
		icon: ArrowCircleRight2,
		link: "Right",
	},
	{
		id: 2,
		label: "settings",
		icon: Setting2,
		link: "settings",
	},
	{
		id: 3,
		label: "Logout",
		icon: Logout,
		link: "",
	},
];

export const APEX_CHART_DATA: ApexDataProps[] = [
	{
		name: "Sales Trend",
		data: [
			15000, 40000, 20000, 20000, 35000, 45000, 35000, 43000, 25000, 20000,
			18000, 28000,
		],
	},
];

export const APEX_CHART_OPTIONS: ApexOptionsProps[] | any = {
	chart: {
		toolbar: {
			show: false,
		},
	},
	tooltip: {
		marker: true,
		followCursor: true,

		x: {
			show: false,
		},
		style: {
			fontSize: "12px",
			fontFamily: undefined,
			backgroundColor: "#000000",
		},
		onDatasetHover: {
			style: {
				fontSize: "12px",
				fontFamily: undefined,
				backgroundColor: "#000000",
			},
		},
		theme: "dark",
	},
	xaxis: {
		categories: [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec",
		],
		show: false,
		labels: {
			show: true,
			style: {
				colors: "#A3AED0",
				fontSize: "14px",
				fontWeight: "500",
			},
		},
		axisBorder: {
			show: false,
		},
		axisTicks: {
			show: false,
		},
	},
	yaxis: {
		show: true,
		color: "black",
		labels: {
			show: true,
			style: {
				colors: "#CBD5E0",
				fontSize: "14px",
			},
		},
	},
	grid: {
		show: true,
		strokeDashArray: 5,
		yaxis: {
			lines: {
				show: true,
			},
		},
		xaxis: {
			lines: {
				show: false,
			},
		},
	},
	fill: {
		type: "gradient",
		gradient: {
			type: "vertical",
			shadeIntensity: 1,
			opacityFrom: 0.1,
			opacityTo: 0.9,
			colorStops: [
				[
					{
						offset: 0,
						color: "#34CAA5",
						opacity: 1,
					},
					{
						offset: 100,
						color: "#FFFFFF",
						opacity: 0.1,
					},
				],
			],
		},
	},
	dataLabels: {
		enabled: false,
	},
};

export const USERS: UserProps[] = [
	{
		id: 1,
		name: "Marcus Bergson",
		status: "paid",
		avatar: "/users/person-1.webp",
		date: "Nov 15, 2023",
		amount: "$80,000",
	},
	{
		id: 2,
		name: "Jaydon Vaccaro",
		status: "refund",
		avatar: "/users/person-2.webp",
		date: "Nov 15, 2023",
		amount: "$150,000",
	},
	{
		id: 3,
		name: "Corey Schleifer",
		status: "paid",
		avatar: "/users/person-3.webp",
		date: "Nov 15, 2023",
		amount: "$87,000",
	},
	{
		id: 4,
		name: "Cooper Press",
		status: "refund",

		avatar: "/users/person-4.webp",
		date: "Nov 15, 2023",
		amount: "$100,000",
	},
	{
		id: 5,
		name: "Phillip Lubin",
		status: "paid",
		avatar: "/users/person-5.png",
		date: "Nov 15, 2023",
		amount: "$70,000",
	},
	{
		id: 6,
		name: "Marcus Bergson",
		status: "paid",
		avatar: "/users/person-1.webp",
		date: "Nov 15, 2023",
		amount: "$80,000",
	},
	{
		id: 7,
		name: "Jaydon Vaccaro",
		status: "refund",
		avatar: "/users/person-2.webp",
		date: "Nov 15, 2023",
		amount: "$150,000",
	},
	{
		id: 8,
		name: "Corey Schleifer",
		status: "paid",
		avatar: "/users/person-3.webp",
		date: "Nov 15, 2023",
		amount: "$87,000",
	},
	{
		id: 9,
		name: "Cooper Press",
		status: "refund",

		avatar: "/users/person-4.webp",
		date: "Nov 15, 2023",
		amount: "$100,000",
	},
	{
		id: 10,
		name: "Phillip Lubin",
		status: "paid",
		avatar: "/users/person-5.png",
		date: "Nov 15, 2023",
		amount: "$70,000",
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
