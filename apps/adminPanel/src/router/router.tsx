import { createBrowserRouter } from "react-router";
import App from "@/App";
import LibraryHeader from "@/components/videoLibrary/header/libraryHeader";
import MainLayout from "./layouts/mainLayout";

export const router = createBrowserRouter([
	{
		Component: MainLayout,

		children: [
			{
				index: true,
				Component: App,
			},
			{
				path: "media-library",
				Component: LibraryHeader,
			},
		],
	},
]);
