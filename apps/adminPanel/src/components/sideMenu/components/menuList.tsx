import { Link, NavLink } from "react-router";

const MenuList = () => {
	return (
		<div className="relative">
			<ul className="flex flex-col pt-2">
				<li>
					<NavLink
						to="/"
						className={({ isActive, isPending }) =>
							isPending ? "pending" : isActive ? "text-red-600!" : ""
						}
					>
						home
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/media-library"
						className={({ isActive, isPending }) =>
							isPending ? "pending" : isActive ? "text-red-600!" : ""
						}
					>
						media-library
					</NavLink>
				</li>
			</ul>
		</div>
	);
};
export default MenuList;
