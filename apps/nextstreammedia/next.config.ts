import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	transpilePackages: ["@repo/ui", "@repo/api"],
	reactCompiler: true,
	images: {
		dangerouslyAllowLocalIP: true,
		remotePatterns: [
			{
				protocol: "http",
				hostname: "localhost",
				port: "5122",
				pathname: "/images/**",
			},
			{
				protocol: "https",
				hostname: "localhost",
				port: "7217",
				pathname: "/images/**",
			},
		],
	},
};

export default nextConfig;
