import { Avatar, AvatarFallback, AvatarImage } from "../components/avatar";

const UserAvatar = () => {
	return (
		<div className="relative flex justify-center items-center gap-1">
			<Avatar className="rounded-full border-2 border-primary w-7 h-7">
				<AvatarImage src="https://github.com/shadcn.png" />
				<AvatarFallback>CN</AvatarFallback>
			</Avatar>
			<div className="hidden md:block">position holder</div>
		</div>
	);
};
export default UserAvatar;
