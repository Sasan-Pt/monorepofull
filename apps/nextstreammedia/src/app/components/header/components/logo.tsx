import Image from "next/image";
import mainLogo from "../../../../../public/assets/images/black_pirate_logo.webp";

const MainLogo = () => {
	return (
		<Image
			src={mainLogo}
			alt="NextStreamMedia Logo"
			width={150}
			height={50}
			loading="eager"
		/>
	);
};
export default MainLogo;
