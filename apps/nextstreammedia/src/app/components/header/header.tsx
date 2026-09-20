import InputField from "@repo/ui/componentsField/inputField";
import UserAvatar from "@repo/ui/componentsField/userAvatar";
import { Search, Settings } from "@repo/ui/icons/";
import MainLogo from "./components/logo";
import MobileMenu from "./components/mobileMenu";
import TopMenuList from "./components/topMenuList";

const Header = () => {
	return (
		<header className="w-full">
			<section className="w-full flex">
				<div className="flex w-[85%] items-center ">
					<MainLogo />
					<InputField
						className=" sm:w-full w-[80%] pl-10"
						placeholder="Search..."
						icon={<Search className="w-5 h-5 absolute translate-x-2" />}
					/>
					<TopMenuList />
				</div>
				<div className="w-[15%] flex  items-center justify-end gap-1 relative shrink">
					<MobileMenu />

					<Settings className="w-5 shrink-0 " />
					<UserAvatar />
				</div>
			</section>
		</header>
	);
};
export default Header;
