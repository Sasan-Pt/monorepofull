import SharedCarousel from "@repo/ui/components/sharedCarousel";
import images from "../../../../../public/assets/images/0ukyqr03lm6c1.png";
import CarouselMap from "./carouselMap";
import MediaInfo from "./mediaInfo";

const HeroCarousel = () => {
	const imagesa = [
		{ images, id: 1 },
		{ images, id: 2 },
		{ images, id: 3 },
	];
	return (
		<div className="w-full flex relative mt-4 h-full">
			<div className="md:w-[40%] md:static absolute h-full z-2 bottom-0">
				<MediaInfo />
			</div>
			<div className="md:w-[60%] md:static absolute w-full z-1">
				<SharedCarousel
					styleButtonLeft=" left-4 top-1/2 -translate-y-1/2"
					styleButtonRight=" right-4 top-1/2 -translate-y-1/2"
				>
					<CarouselMap images={imagesa} />
				</SharedCarousel>
			</div>
		</div>
	);
};
export default HeroCarousel;
