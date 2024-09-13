import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textShadow: {
        DEFAULT: "1px 1px 1px #9897982F",
      },
      colors: {
        background: {
          DEFAULT: "#ECEDED",
          variant: "#F6F6F6",
          card: {
            DEFAULT: "#EBEBEB",
            primary: "#EBEBEB",
            secondary: "#E8E8E8",
            lcd: "#B6B9B0",
          },
        },
        text: {
          DEFAULT: "#5A5A5B",
        },
        muted: {
          DEFAULT: "#989798",
          dark: "#777777",
        },
        light: {
          DEFAULT: "#F0F1F1",
          variant: "#E5E5E5",
        },
        metal: {
          DEFAULT: "#989BA6",
          variant: "#6E7688",
        },
        ocean: {
          DEFAULT: "#95BAE5",
          variant: "#638AD1",
        },
        air: {
          DEFAULT: "#DAE1E6",
          variant: "#B1BDCB",
        },
        dark: {
          DEFAULT: "#303343",
          variant: "#272A37",
        },
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
export default config;
