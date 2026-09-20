import Image from "next/image";
import mainLogo from "../../../../../public/assets/images/2.webp";

const MainLogo = () => {
	return (
		<div className="relative w-full max-w-30 mr-1">
			<Image
				src={mainLogo}
				alt="NextStreamMedia Logo"
				width={435}
				height={145}
				loading="eager"
				className="h-auto w-full "
			/>
		</div>
	);
};
export default MainLogo;
