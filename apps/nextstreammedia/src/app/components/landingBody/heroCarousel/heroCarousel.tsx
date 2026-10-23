import Carouselland from "./carouselLand";
import MediaInfo from "./mediaInfo";

const HeroCarousel = () => {
	return (
		<div className="w-full flex relative mt-4 h-full">
			<div className="md:w-[40%] md:static absolute h-full z-2 bottom-0">
				<MediaInfo />
			</div>
			<div className="md:w-[60%] md:static absolute w-full z-1">
				<Carouselland />
			</div>
		</div>
	);
};
export default HeroCarousel;
