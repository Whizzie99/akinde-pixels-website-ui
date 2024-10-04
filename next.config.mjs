/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: ["node_modules"],
    additionalData:
      '@import "~tailwindcss/base"; @import "~tailwindcss/components"; @import "~tailwindcss/utilities";',
  },
};

export default nextConfig;
