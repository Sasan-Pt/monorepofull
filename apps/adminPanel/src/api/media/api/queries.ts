import { queryOptions } from "@tanstack/react-query";
import { getMedia } from "./api";
import { mediaKeys } from "./keys";

export const mediaQueries = {
	list: () =>
		queryOptions({
			queryKey: mediaKeys.lists(),
			queryFn: () => {
				return getMedia("media/all");
			},
		}),

	detail: (filters: "movie" | "series", id?: number) =>
		queryOptions({
			queryKey: mediaKeys.detail(filters),
			queryFn: () => getMedia(filters),
		}),
};
