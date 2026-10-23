// lib/media.ts
import "server-only";

export type HeroSlideData = {
	id: string;
	title: string;
	description: string;
	bannerUrl: string;
	href: string;
};

export async function getFeaturedMedia(): Promise<HeroSlideData[]> {
	const response = await fetch(
		`http://localhost:5122/api/media/carousellanding`,
		{
			next: { revalidate: 3600 },
		},
	);

	if (!response.ok) {
		throw new Error("Failed to fetch featured media");
	}

	return response.json();
}
