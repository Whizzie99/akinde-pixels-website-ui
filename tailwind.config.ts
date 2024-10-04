import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ["var(--font-lato)"],
      },
      backgroundImage: {
        "sub-hero-bg": "url('/images/sub-hero-img.png')",
      },
      colors: {
        colorPrimary: "#F28E2C",
        "white-alpha-1": "rgba(253, 253, 253, 0.4)",

        // background: "var(--background)",
        // foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
