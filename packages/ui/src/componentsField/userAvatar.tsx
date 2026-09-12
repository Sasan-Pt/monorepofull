import { Avatar, AvatarFallback, AvatarImage } from "../components/avatar";

const UserAvatar = () => {
	return (
		<div className="relative flex justify-center items-center gap-2">
			<Avatar className="rounded-full border-2 border-primary w-10 h-10">
				<AvatarImage src="https://github.com/shadcn.png" />
				<AvatarFallback>CN</AvatarFallback>
			</Avatar>
			<div>position holder</div>
		</div>
	);
};
export default UserAvatar;
