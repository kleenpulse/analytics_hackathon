"use client";

import {
	createContext,
	useContext,
	useState,
	Dispatch,
	SetStateAction,
	useEffect,
	useMemo,
	useLayoutEffect,
} from "react";

export type ThemeProps = "light" | "dark";
export type User = {
	username: string;
	email: string;
	profilePic: string;
};
interface StateContextProps {
	theme: ThemeProps;
	setTheme: Dispatch<SetStateAction<ThemeProps>>;
	openSidebar: boolean;
	setOpenSidebar: Dispatch<SetStateAction<boolean>>;
	searchTerm: string;
	setSearchTerm: Dispatch<SetStateAction<string>>;
	user: User;
}

const StateContext = createContext<StateContextProps | undefined>(undefined);

const StateCtxProvider = ({ children }: { children: React.ReactNode }) => {
	const [theme, setTheme] = useState<ThemeProps>("" as ThemeProps);
	const [openSidebar, setOpenSidebar] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");
	const user = useMemo(() => {
		return {
			username: "Justin Bergson",
			email: "Justin@gmail.com",
			profilePic: "/avatar.webp",
		};
	}, []);

	useEffect(() => {
		const t = "%c  Made with \ud83d\udc9a  - Vxrcel ",
			n = [
				"font-size: 12px",
				"color: #fffce1",
				"font-family: monospace",
				"background: #0e100f",
				"display: inline-block",
				"padding: 1rem 3rem",
				"border: 1px solid #0ff",
				"border-radius: 4px;",
			].join(";");
		console.log(t, n);

		if (theme === "light") {
			document.documentElement.classList.remove("dark");
			document.documentElement.classList.add("light");
			localStorage.setItem("theme", "light");
		}
		if (theme === "dark") {
			document.documentElement.classList.add("dark");
			document.documentElement.classList.remove("light");
			localStorage.setItem("theme", "dark");
		}
	}, [theme]);

	useLayoutEffect(() => {
		if ("theme" in localStorage) {
			setTheme(localStorage.getItem("theme") as ThemeProps);
		}
	}, []);

	const value = useMemo(
		() => ({
			theme,
			setTheme,
			openSidebar,
			setOpenSidebar,
			searchTerm,
			setSearchTerm,
			user,
		}),
		[theme, openSidebar, searchTerm, user]
	);

	return (
		<StateContext.Provider value={value}>{children}</StateContext.Provider>
	);
};

export default StateCtxProvider;

// Custom hook to access the ThemeProps context
export function useStateCtx() {
	const context = useContext(StateContext);

	if (!context) {
		throw new Error("useStateContext must be used within an CtxProvider");
	}

	return context;
}
