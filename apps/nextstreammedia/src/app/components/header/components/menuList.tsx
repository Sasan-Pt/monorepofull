"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MenlistProps } from "../headerTypes/HeaderTypes";

const MenuList = (props: MenlistProps) => {
	const { menuItems } = props;
	const pathname = usePathname();

	return (
		<>
			{menuItems.map((item) => {
				const isActive = pathname === item.link;

				return (
					<li
						key={item.name}
						className={clsx("text-white hover:text-gray-400", {
							"text-gray-400": isActive,
						})}
					>
						<Link href={item.link}>{item.name}</Link>
					</li>
				);
			})}
		</>
	);
};
export default MenuList;
