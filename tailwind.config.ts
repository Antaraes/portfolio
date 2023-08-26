import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        darkText: "#e6e6e6",
        darkBackground: "#030303",
        darkPrimary: "#575757",
        darkSecondary: "#1c1c1c",
        darkAccent: "#838383",
        text: "#030303",
        background: "#e6e6e6",
        primary: "#575757",
        secondary: "#e8e8e8",
        accent: "#363636",
      },
      backgroundColor: {
        darkText: "#e6e6e6",
        darkBackground: "#030303",
        darkPrimary: "#575757",
        darkSecondary: "#1c1c1c",
        darkAccent: "#838383",
        text: "#030303",
        background: "#e6e6e6",
        primary: "#575757",
        secondary: "#e8e8e8",
        accent: "#363636",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
