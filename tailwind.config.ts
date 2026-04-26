import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        krem: "#F7F4EE",
        navy: "#0D2137",
        teal: "#2A8C8C",
        amber: "#E8874A",
        "abu-biru": "#8BA5B8",
        "navy-dark": "#071524",
      },
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        outfit: ["var(--font-outfit)", "sans-serif"],
      },
      animation: {
        "blob-1": "blob1 8s ease-in-out infinite",
        "blob-2": "blob2 10s ease-in-out infinite",
        "blob-3": "blob3 12s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
      },
      keyframes: {
        blob1: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -30px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
        },
        blob2: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(-40px, 20px) scale(1.15)" },
          "66%": { transform: "translate(30px, -15px) scale(0.95)" },
        },
        blob3: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(20px, 40px) scale(0.9)" },
          "66%": { transform: "translate(-30px, -20px) scale(1.1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
