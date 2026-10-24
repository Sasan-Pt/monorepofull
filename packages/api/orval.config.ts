import { defineConfig } from "orval";

export default defineConfig({
	api: {
		input: "http://localhost:5122/openapi/v1.json",
		output: {
			target: "./src/generated/media.ts",
			schemas: "./src/generated/models",
			client: "axios",
			mode: "tags-split",
		},
	},
});
