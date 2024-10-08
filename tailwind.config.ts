import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      desktop: "1440px",
      laptop: "1024px",
      tablet: "744px",
      mobile: "360px",
    },
    extend: {
      
      
      // shadow-custom-shadow
      boxShadow: {
        'custom-shadow': '0 14px 25px rgba(58, 123, 213, 0.4)',
      },

      fontFamily: {
        bricolage: ['"Bricolage Grotesque"', "sans-serif"],
        montserrat: ['"Montserrat"', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      animation: {
        "expand-circle": "expand-circle 1.5s ease-out infinite",
      },
      keyframes: {
        "expand-circle": {
          "0%": { transform: "scale(0.5)", opacity: "1" },
          "100%": { transform: "scale(2.5)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
