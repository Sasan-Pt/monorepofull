import { api } from "./createApi";

export const getMedia = async (url: string) => {
	return await api.get(url);
};

export const createMedia = (data: any) => api.post("/medias/create", data);
