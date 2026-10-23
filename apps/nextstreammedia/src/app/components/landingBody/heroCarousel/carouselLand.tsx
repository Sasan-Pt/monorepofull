import SharedCarousel from "@repo/ui/components/sharedCarousel";
import { Suspense } from "react";
import { getFeaturedMedia } from "../../lib/media";
import CarouselMap from "./carouselMap";

const Carouselland = () => {
	async function FeaturedHero() {
		const slides = await getFeaturedMedia();

		console.log("slides", slides);

		return <CarouselMap images={slides} />;
	}
	return (
		<SharedCarousel
			styleButtonLeft=" left-4 top-1/2 -translate-y-1/2"
			styleButtonRight=" right-4 top-1/2 -translate-y-1/2"
		>
			<Suspense fallback={<div>Loading...</div>}>
				<FeaturedHero />
			</Suspense>
		</SharedCarousel>
	);
};

export default Carouselland;
