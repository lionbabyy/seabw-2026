import type { Config } from "tailwindcss";

export default {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        seabw: {
          cobalt: "#1313D2",
          midnight: "#17154D",
          ice: "#A5E2F2",
          aqua: "#00C6CB",
          azure: "#2E80FF",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

