import { useMutation } from "@tanstack/react-query";
import { createMedia } from "./api";

export const useCreateMovie = () => {
	return useMutation({
		mutationFn: (data) => createMedia(data),
		onError: (error) => {
			console.error("Error creating movie:", error);
		},
	});
};
