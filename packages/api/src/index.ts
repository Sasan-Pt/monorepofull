// packages/api/src/createApi.ts
import axios from "axios";

export function createApi(baseURL: string) {
	return axios.create({
		baseURL,
	});
}
