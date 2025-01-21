import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#49C0B8",
        secondary: "#CCC",
      },
      fontFamily: {
        primary: "var(--font-lexend)",
        secondary: "var(--font-inter)",
      },
    },
  },
  plugins: [],
} satisfies Config;
