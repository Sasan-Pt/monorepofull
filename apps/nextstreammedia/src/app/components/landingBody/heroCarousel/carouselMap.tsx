import type { CarouselDto } from "@repo/api/models";
import { CarouselItem } from "@repo/ui/components/carousel";
import Image from "next/image";

type MediaImagesProps = {
	images: CarouselDto[];
};

const MediaImages = ({ images }: MediaImagesProps) => {
	return (
		<>
			{images.map((image) => {
				if (!image.bannerUrl) return null;

				return (
					<CarouselItem
						key={image.slug}
						className="relative w-full aspect-[1920/1040] [mask-image:linear-gradient(to_right,transparent_0%,black_50%)]"
					>
						<Image
							src={image.bannerUrl}
							alt={image.title}
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
