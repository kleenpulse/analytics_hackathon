import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import StateCtxProvider from "@/context/StateContext";
import Sidebar from "@/components/Sidebar";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], display: "swap" });

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
		<html lang="en">
			<StateCtxProvider>
				<body className={jakarta.className}>
					<Sidebar />
					{children}
				</body>
			</StateCtxProvider>
		</html>
	);
}
