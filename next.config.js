/** @type {import('next').NextConfig} */
const withImages = require("next-images");
module.exports = withImages();

module.exports = {
	reactStrictMode: true,
	distDir: "build",
	webpack(config) {
		return config;
	},

	webpack: (config, { isServer }) => {
		if (!isServer) {
			// don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
			config.resolve.fallback = {
				fs: false,
			};
		}
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
		});
		return config;
	},
	images: {
		domains: ["dev.zetami.com", "zetami.com"],
	},
};
