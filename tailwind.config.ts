import type { Config } from "tailwindcss";
import daisyui from "daisyui";

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
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#6B78CB",

          secondary: "#FC79DF",

          accent: "#74FF33",

          neutral: "#FC79DF",

          "base-100": "#ffffff",

          info: "#6B78CB",

          success: "#FC79DF",

          warning: "#ffd932",

          error: "#FFD932",
        },
      },
    ],
  },
};
export default config;
