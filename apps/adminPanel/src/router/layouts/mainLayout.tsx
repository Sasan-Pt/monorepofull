import { Outlet } from "react-router";
import SideMenu from "@/components/sideMenu/sideMenu";

export default function MainLayout() {
	return (
		<div className="flex col-start-2 flex-col sm:flex-row">
			<SideMenu />

			<main className="flex-1">
				<Outlet />
			</main>
		</div>
	);
}
