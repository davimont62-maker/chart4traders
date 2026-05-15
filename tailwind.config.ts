import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#071316",
        graphite: "#101d21",
        mist: "#16272c",
        line: "#263b41",
        steel: "#9cafb5",
        teal: "#00b7c7",
        amber: "#ff8a1f",
        volt: "#8bd450",
        vwap: "#c44dff"
      },
      boxShadow: {
        soft: "0 18px 55px rgba(0, 0, 0, 0.35)"
      }
    }
  },
  plugins: []
};

export default config;
