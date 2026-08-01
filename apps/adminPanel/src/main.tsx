import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@repo/ui/theme/themeProvider";
import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router/dom";
import App from "./App.tsx";
import { queryClient } from "./api/queryConfig/queryClientProvider.tsx";

import { router } from "./router/router";

createRoot(document.getElementById("root")!).render(
	<QueryClientProvider client={queryClient}>
		<StrictMode>
			<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
				<div
					className="grid grid-cols-[4%_1fr_4%]   "
					style={{ direction: "rtl" }}
				>
					<RouterProvider router={router} />
				</div>
			</ThemeProvider>
		</StrictMode>
	</QueryClientProvider>,
);
