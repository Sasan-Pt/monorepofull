import type { StaticImageData } from "next/image";

export interface HeroCarouselProps {
	images: { images: StaticImageData; id: number }[];
}
