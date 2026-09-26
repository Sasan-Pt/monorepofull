import { CarouselItem } from "@repo/ui/components/carousel";
import SharedCarousel from "@repo/ui/components/sharedCarousel";
import Image from "next/image";
import images from "../../../../../public/assets/images/0ukyqr03lm6c1.png";

const HeroCarousel = () => {
	const imagesa = [
		{ images, id: 1 },
		{ images, id: 2 },
		{ images, id: 3 },
	];
	return (
		<div className="w-full flex">
			<div className="w-[40%]">asdasdasdds</div>
			<div className="w-[60%]">
				<SharedCarousel
					styleButtonLeft=" left-4 top-1/2 -translate-y-1/2"
					styleButtonRight=" right-4 top-1/2 -translate-y-1/2"
				>
					{imagesa.map((image) => {
						return (
							<CarouselItem
								key={image.id}
								className="relative w-full aspect-[1920/1040]"
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
				</SharedCarousel>
			</div>
		</div>
	);
};
export default HeroCarousel;
