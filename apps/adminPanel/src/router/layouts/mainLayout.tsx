// layouts/MainLayout.tsx

import { Outlet } from "react-router";
import SideMenu from "@/components/sideMenu/sideMenu";

export default function MainLayout() {
	return (
		<div className="flex col-start-2">
			<div className="  w-[15%]">
				<SideMenu />
			</div>

			<main className=" w-3/4">
				<Outlet />
			</main>
		</div>
	);
}
