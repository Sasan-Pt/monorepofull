import { api } from "./createApi";

export const getMedia = (genreType: string | number, params?: string) =>
	api.get(`/{${genreType}`, { params });

export const createMedia = (data: any) => api.post("/medias/create", data);
