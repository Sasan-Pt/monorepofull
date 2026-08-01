import { queryOptions } from "@tanstack/react-query";
import { getMedia } from "./api";
import { mediaKeys } from "./keys";

export const movieQueries = {
	list: (filters: "movie" | "series") =>
		queryOptions({
			queryKey: mediaKeys.list(filters),
			queryFn: () => getMedia(filters),
		}),

	detail: (filters: "movie" | "series", id?: number) =>
		queryOptions({
			queryKey: mediaKeys.detail(filters),
			queryFn: () => getMedia(filters),
		}),
};
