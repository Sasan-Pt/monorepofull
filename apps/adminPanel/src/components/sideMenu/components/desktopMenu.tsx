import MenuList from "./menuList";
import UserAvatar from "./UserAvatar";

const DeskTopMenu = () => {
	return (
		<section className="flex flex-col items-center justify-start gap-4  p-4">
			<UserAvatar />
			<MenuList />
		</section>
	);
};

export default DeskTopMenu;
