import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // primary: "#5C2438",
        // secondary: "#FFB393",
        secondary: "#1A0136",
        primary: "#FFFFFF",
        primaryActive: "#4D1529",
        black: "#000000"
      },
    },
  },
  plugins: [],
};
export default config;
