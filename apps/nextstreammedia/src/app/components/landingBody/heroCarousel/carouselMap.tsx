import { CarouselItem } from "@repo/ui/components/carousel";
import Image from "next/image";
import type { HeroCarouselProps } from "./types";

const MediaImages = (props: HeroCarouselProps) => {
	const { images } = props;
	return (
		<>
			{images.map((image) => {
				return (
					<CarouselItem
						key={image.id}
						className="relative w-full aspect-[1920/1040] [mask-image:linear-gradient(to_right,transparent_0%,black_50%)]"
					>
						<Image
							src={image.images}
							alt="landingBody1"
							fill
							sizes="100vw"
							className="object-cover"
							priority
						/>
					</CarouselItem>
				);
			})}
		</>
	);
};
export default MediaImages;
