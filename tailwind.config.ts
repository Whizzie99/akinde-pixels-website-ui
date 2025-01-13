/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

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
        sofia: ["var(--font-sofia)"],
        niconne: ["var(--font-niconne)"],
      },
      backgroundImage: {
        "sub-hero-bg": "url('/images/new_assets/hero.jpg')",
      },
      colors: {
        colorPrimary: "#F28E2C",
        "white-alpha-1": "rgba(253, 253, 253, 0.4)",

        // background: "var(--background)",
        // foreground: "var(--foreground)",
      },
      boxShadow: {
        custom: `
          rgba(242, 142, 44, 0.4) 5px 5px, 
          rgba(242, 142, 44, 0.3) 10px 10px, 
          rgba(242, 142, 44, 0.2) 15px 15px, 
          rgba(242, 142, 44, 0.1) 20px 20px, 
          rgba(242, 142, 44, 0.05) 25px 25px
        `,
      },
    },
  },
  plugins: [nextui()],
};
export default config;
