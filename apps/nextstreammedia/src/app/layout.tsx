import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@repo/ui/theme/";

export const metadata: Metadata = {
	title: "NextStream Media",
	description: "Next.js app for the NextStream Media workspace",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="h-full">
			<body className="flex min-h-full flex-col">
				{" "}
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
