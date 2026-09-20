import MenuList from "./menuList";

const TopMenuList = () => {
	const menuList = [
		{ name: "Browse", link: "/" },
		{ name: "Movies", link: "/Movies" },
		{ name: "Series", link: "/Series" },
		{ name: "Tags", link: "/Tags" },
		{ name: "MyList", link: "/MyList" },
	];

	return (
		<ul className="items-center gap-4 md:flex hidden px-1">
			<MenuList menuItems={menuList} />
		</ul>
	);
};
export default TopMenuList;
