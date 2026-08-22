export const mediaKeys = {
	all: ["media"] as const,

	lists: () => [...mediaKeys.all, "all"] as const,

	list: (type: "movie" | "series", filters?: string) =>
		[...mediaKeys.lists(), type, filters] as const,

	details: () => [...mediaKeys.all, "detail"] as const,

	detail: (type: "movie" | "series", id?: number) =>
		[...mediaKeys.details(), type, id] as const,
};
