import { CarouselItem } from "@repo/ui/components/carousel";
import SharedCarousel from "@repo/ui/components/sharedCarousel";
import Image from "next/image";
import HeroCarousel from "./heroCarousel/heroCarousel";

const LandingBody = () => {
	return (
		<div>
			<HeroCarousel />
		</div>
	);
};
export default LandingBody;
