// lib/media.ts
import "server-only";
import type { CarouselDto } from "@repo/api/models";

export async function getFeaturedMedia(): Promise<CarouselDto[]> {
	const response = await fetch(
		`http://localhost:5122/api/media/carousellanding`,
		{
			next: { revalidate: 3600 },
		},
	);

	if (!response.ok) {
		throw new Error("Failed to fetch featured media");
	}

	const media = (await response.json()) as CarouselDto[];

	// In development, the API returns HTTPS asset URLs with a self-signed cert.
	// Next's image optimizer fetches these server-side and rejects that cert.
	// The API is also available over HTTP on port 5122, so use that origin for
	// local assets and keep Next's optimizer enabled.
	return media.map((item) => {
		if (!item.bannerUrl) return item;

		const bannerUrl = new URL(item.bannerUrl);
		if (bannerUrl.hostname === "localhost" && bannerUrl.port === "7217") {
			bannerUrl.protocol = "http:";
			bannerUrl.port = "5122";
		}

		return { ...item, bannerUrl: bannerUrl.toString() };
	});
}
