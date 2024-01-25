import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import StateCtxProvider from "@/context/StateContext";
import Sidebar from "@/components/Sidebar";
import { cn } from "@/utils/util";
import Navbar from "@/components/Navbar";

const jakarta = Plus_Jakarta_Sans({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-jakarta",
});
const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
});

export const metadata: Metadata = {
	title: "Analytics Dashboard",
	description: "The No.1 Analytics Dashboard in the world!",
	icons: {
		shortcut: "/favicon.ico",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={cn(jakarta.variable, inter.variable)}>
			<StateCtxProvider>
				<body
					className={cn(
						"w-full max-w-[1440px] mx-auto dark:bg-gray-900 bg-[#fafafa] transition-colors duration-500 relative",
						jakarta.className
					)}
				>
					<Sidebar />
					<header className="w-full min-[900px]:pl-[80px] absolute top-0">
						<Navbar />
					</header>
					<main className="w-full max-w-[1360px] mx-auto min-[900px]:pl-[80px]">
						{children}
					</main>
				</body>
			</StateCtxProvider>
		</html>
	);
}
