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
        light: {
          primary: "#F0F1F1",
          variant: "#E5E5E5",
        },
        metal: {
          primary: "#989BA6",
          variant: "#6E7688",
        },
        ocean: {
          primary: "#95BAE5",
          variant: "#638AD1",
        },
        air: {
          primary: "#DAE1E6",
          variant: "#B1BDCB",
        },
        dark: {
          primary: "#303343",
          variant: "#272A37",
        },
      },
    },
  },
  plugins: [],
};
export default config;
