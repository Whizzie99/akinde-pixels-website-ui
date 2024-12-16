/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: ["node_modules"],
    additionalData:
      '@import "~tailwindcss/base"; @import "~tailwindcss/components"; @import "~tailwindcss/utilities";',
  },
  images: {
    remotePatterns: [
      {
        hostname: "images.ctfassets.net",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
