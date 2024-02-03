"use client";

import { USERS, UserProps } from "@/libs/constants";
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
	setOpenTrendmenu: Dispatch<SetStateAction<boolean>>;
	openTrendmenu: boolean;
	swipeIndicator: boolean;
	setSwipeIndicator: React.Dispatch<React.SetStateAction<boolean>>;
	filterUsers: UserProps[];
	viewDocModal: boolean;
	setViewDocModal: React.Dispatch<React.SetStateAction<boolean>>;
	openSearchBox: boolean;
	setOpenSearchBox: React.Dispatch<React.SetStateAction<boolean>>;
	showDate: boolean;
	setShowDate: React.Dispatch<React.SetStateAction<boolean>>;
	showNotification: boolean;
	setShowNotification: React.Dispatch<React.SetStateAction<boolean>>;
	todayDate: string;
}

const StateContext = createContext<StateContextProps | undefined>(undefined);

const StateCtxProvider = ({ children }: { children: React.ReactNode }) => {
	const [theme, setTheme] = useState<ThemeProps>("" as ThemeProps);
	const [openSidebar, setOpenSidebar] = useState(false);
	const [openTrendmenu, setOpenTrendmenu] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");
	// Miscellaneous
	const [handleSwipe, setHandleSwipe] = useState<number | null>(null);
	const [swipeIndicator, setSwipeIndicator] = useState(false);
	const [viewDocModal, setViewDocModal] = useState(false);
	const [openSearchBox, setOpenSearchBox] = useState(false);
	const [showDate, setShowDate] = useState(false);
	const [showNotification, setShowNotification] = useState(false);

	// Track Modal state
	const isAnyModalOpen =
		viewDocModal ||
		showDate ||
		openSearchBox ||
		openTrendmenu ||
		showNotification;

	// Today's date
	const todayDate = new Date().toLocaleDateString("en", {
		month: "long",
		day: "numeric",
		year: "numeric",
	});

	const isMobileDevice = () => {
		return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
			navigator?.userAgent
		);
	};
	const user = useMemo(() => {
		return {
			username: "Justin Bergson",
			email: "Justin@gmail.com",
			profilePic: "/avatar.webp",
		};
	}, []);

	const filterUsers = USERS.filter((msg) => {
		if (!(searchTerm.length > 1)) {
			return msg;
		}
		return msg.name.toLowerCase().includes(searchTerm.toLowerCase());
	});

	useEffect(() => {
		if (!isMobileDevice()) return;
		const isSwiped = localStorage.getItem("swiped");
		if (isSwiped) {
			setSwipeIndicator(false);
			return;
		}
		if (openSidebar) {
			setSwipeIndicator(true);
		} else {
			setSwipeIndicator(false);
		}
	}, [openSidebar]);

	useEffect(() => {
		if (!isMobileDevice() || !("ontouchstart" in window)) return;
		const handleSwipeStart = (e: TouchEvent) => {
			setHandleSwipe(e.changedTouches[0].screenX);
		};
		const handleSwipeEnd = (e: TouchEvent) => {
			if (handleSwipe !== null) {
				const swipeDis = e.changedTouches[0].screenX - handleSwipe;
				const swipeThreshold = 70;

				if (swipeDis < -swipeThreshold) {
					localStorage.setItem("swiped", "true");
					console.log("first");
					setOpenSidebar(false);
				}

				setHandleSwipe(null);
			}
		};

		window.addEventListener("touchstart", handleSwipeStart);
		window.addEventListener("touchend", handleSwipeEnd);
		return () => {
			window.removeEventListener("touchstart", handleSwipeStart);
			window.removeEventListener("touchend", handleSwipeEnd);
		};
	}, [handleSwipe]);

	useEffect(() => {
		if (isAnyModalOpen) {
			document.body.style.overflow = "hidden";
			document.documentElement.style.overflow = "hidden";
		} else {
			document.documentElement.style.overflow = "auto";
		}
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				setOpenSearchBox(false);
				setOpenSidebar(false);
				setOpenTrendmenu(false);
			}
		};

		document.addEventListener("keyup", handleKeyDown);

		return () => {
			document.removeEventListener("keyup", handleKeyDown);
		};
	}, [isAnyModalOpen]);

	useLayoutEffect(() => {
		if ("theme" in localStorage) {
			setTheme(localStorage.getItem("theme") as ThemeProps);
			return;
		}
		setTheme("light");
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

	const value = useMemo(
		() => ({
			theme,
			setTheme,
			openSidebar,
			setOpenSidebar,
			searchTerm,
			setSearchTerm,
			user,
			openTrendmenu,
			setOpenTrendmenu,
			swipeIndicator,
			setSwipeIndicator,
			filterUsers,
			viewDocModal,
			setViewDocModal,
			openSearchBox,
			setOpenSearchBox,
			showDate,
			setShowDate,
			showNotification,
			setShowNotification,
			todayDate,
		}),
		[
			theme,
			openSidebar,
			searchTerm,
			openTrendmenu,
			user,
			filterUsers,
			swipeIndicator,
			viewDocModal,
			openSearchBox,
			showDate,
			showNotification,
			todayDate,
		]
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
