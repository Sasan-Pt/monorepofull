import InputField from "@repo/ui/componentsField/inputField";
import UserAvatar from "@repo/ui/componentsField/userAvatar";
import { Settings } from "@repo/ui/icons/";
import MainLogo from "./components/logo";
import MobileMenu from "./components/mobileMenu";
import TopMenuList from "./components/topMenuList";

const Header = () => {
	return (
		<header className="w-full">
			<section className=" px-2 py-2 bg-gray-800 w-full flex">
				<UserAvatar />
				<Settings className="w-5 shrink-0" />
				<InputField />
				<MainLogo />
				<TopMenuList />
				<MobileMenu />
			</section>
		</header>
	);
};
export default Header;
