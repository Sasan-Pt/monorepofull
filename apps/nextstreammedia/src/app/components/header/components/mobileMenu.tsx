"use client";
import SideModal from "@repo/ui/componentsField/sideModal";
import Link from "next/link";
import { useState } from "react";

const menuList = [
	{ name: "Browse", link: "/" },
	{ name: "Movies", link: "/Movies" },
	{ name: "Series", link: "/Series" },
	{ name: "Tags", link: "/Tags" },
	{ name: "MyList", link: "/MyList" },
];

const MobileMenu = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<SideModal
			open={isOpen}
			onOpenChange={setIsOpen}
			triggerClassName="md:hidden"
		>
			<ul className="flex flex-col gap-4 items-center  h-full  text-xl px-4">
				{menuList.map((item) => (
					<li
						key={item.link}
						className="hover:bg-secondary w-full text-center hover:text-tertiary"
					>
						<Link href={item.link}>{item.name}</Link>
					</li>
				))}
			</ul>
		</SideModal>
	);
};

export default MobileMenu;
