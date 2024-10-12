import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/icons/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        "primary-color": "#B48E40",
        "heading-color": "#0F1212",
        "body-color": "#333334",
        "color-1": "#666667",
        "color-2": "#999999",
        "color-3": "#CCCCCC",
        "color-4": "#F7F7F7",
        "color-5": "#EDECE7",
        "color-6": "#F7F4EC",
        "color-7": "#DAC79F",
        "color-8": "#878989",
        "color-9": "#161919",
        "color-10": "#191D1F",
        "color-11": "#212123",
        "color-12": "#3D3F3F",
        "color-13": "#0E1111",
        "border-color-1": "#E7E7E7",
        "border-color-2": "rgba(0, 0, 1, 0.1)",
        "border-color-3": "#272A2A",
        "border-color-4": "#333535",
        "border-color-5": "#282A2A",
        "box-shadow-1": "0px 20px 100px rgba(0, 0, 0, 0.2)",
        "box-shadow-2": "0px 10px 70px rgba(0, 0, 0, 0.1)",
        "box-shadow-3": "0px 7px 50px rgba(0, 0, 0, 0.07)",
        "box-shadow-4": "0px 10px 50px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
export default config;
