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
        "gradient-radial":
          "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "black-dark": "#00000050",
        "dull-white": "#FFFFFFB3",
        "white-light": "#FFFFFF30",
        "white-medium": "#FFFFFF40",
        "neon-blue": "#2FB8FF",
      },
    },
  },
  plugins: [],
};
export default config;
