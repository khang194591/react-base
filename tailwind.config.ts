import type { Config } from "tailwindcss";
import variables from "./src/assets/theme/variables";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: variables.colorPrimary,
      },
    },
  },
  plugins: [],
} satisfies Config;
