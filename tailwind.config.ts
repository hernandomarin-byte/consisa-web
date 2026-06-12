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
        consisa: {
          blue: "#003087",
          "blue-light": "#0066CC",
          red: "#E8401C",
          dark: "#1A1A2E",
          gray: "#6B7280",
          "gray-light": "#F3F4F6",
          green: "#00A86B",
          gold: "#F59E0B",
        },
      },
      fontFamily: {
        sans: ["Inter", "Montserrat", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #003087 0%, #001A4D 100%)",
        "consisa-gradient": "linear-gradient(135deg, #003087 0%, #0066CC 100%)",
        "impact-gradient": "linear-gradient(135deg, #003087 0%, #E8401C 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "count-up": "countUp 2s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
