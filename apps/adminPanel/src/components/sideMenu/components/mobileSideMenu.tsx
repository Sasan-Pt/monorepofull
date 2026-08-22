import SideModal from "@repo/ui/componentsField/sideModal";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import MenuList from "./menuList";

const MobileSideMenu = () => {
	const [open, setOpen] = useState(false);
	const { pathname } = useLocation();

	// biome-ignore lint/correctness/useExhaustiveDependencies: pathname intentionally triggers closing the mobile menu on navigation
	useEffect(() => {
		setOpen(false);
	}, [pathname]);

	return (
		<aside className="block sm:hidden shrink-0">
			<SideModal open={open} onOpenChange={setOpen}>
				<MenuList />
			</SideModal>
		</aside>
	);
};

export default MobileSideMenu;
