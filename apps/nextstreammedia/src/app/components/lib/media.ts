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

	return response.json();
}
