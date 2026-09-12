import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@repo/ui/theme/";
import { Figtree } from "next/font/google";

const figtree = Figtree({
	subsets: ["latin"],
	display: "swap",
	weight: ["400", "500", "600", "700", "900"],
	variable: "--font-figtree",
});

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
		<html
			lang="en"
			className={`${figtree.variable} h-full`}
			suppressHydrationWarning
		>
			<body className="grid grid-cols-[4%_1fr_4%]">
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
