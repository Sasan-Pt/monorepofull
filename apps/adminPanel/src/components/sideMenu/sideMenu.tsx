import SideModal from "@repo/ui/componentsField/sideModal";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import DeskTopMenu from "./components/desktopMenu";
import MenuList from "./components/menuList";
import MobileSideMenu from "./components/mobileSideMenu";

const SideMenu = () => {
	return (
		<>
			<aside className="hidden sm:block w-64 shrink-0">
				<DeskTopMenu />
			</aside>
			<MobileSideMenu />
		</>
	);
};
export default SideMenu;
