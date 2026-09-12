import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	transpilePackages: ["@repo/ui", "@repo/api"],
	reactCompiler: true,
};

export default nextConfig;
