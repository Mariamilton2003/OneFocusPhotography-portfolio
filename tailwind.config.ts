import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '320px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: {
          "50": "#fff7ed",
          "100": "#feeed6",
          "200": "#fcd9ac",
          "300": "#fabd77",
          "400": "#f79640",
          "500": "#f47b1f",
          "600": "#e55f11",
          "700": "#be4710",
          "800": "#973915",
          "900": "#7a3014",
          "950": "#421608",
        },
        secondary: {
          "50": "#f6f6f6",
          "100": "#e7e7e7",
          "200": "#d1d1d1",
          "300": "#b0b0b0",
          "400": "#888888",
          "500": "#6d6d6d",
          "600": "#5d5d5d",
          "700": "#4f4f4f",
          "800": "#454545",
          "900": "#3b3b3b",
          "950": "#262626",
        },
      },
      fontFamily: {
        header:["var(--font-libre-bodoni)"],
        body:["var(--font-source-sans-pro)"]
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;