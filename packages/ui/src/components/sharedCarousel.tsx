import type { SharedCarouselProps } from "#/uiTypes/types";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "./carousel";

const SharedCarousel = (props: SharedCarouselProps) => {
	const { children, styleButtonLeft, styleButtonRight, carouselStyle } = props;
	return (
		<Carousel className={carouselStyle}>
			<CarouselContent>{children}</CarouselContent>
			<CarouselPrevious className={styleButtonLeft} />
			<CarouselNext className={styleButtonRight} />
		</Carousel>
	);
};
export default SharedCarousel;
