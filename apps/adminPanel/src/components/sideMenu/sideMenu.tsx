import MenuList from "./components/menuList";
import UserAvatar from "./components/UserAvatar";

const SideMenu = () => {
	return (
		<section className="flex flex-col items-center justify-start gap-4  p-4">
			<UserAvatar />
			<MenuList />
		</section>
	);
};
export default SideMenu;
