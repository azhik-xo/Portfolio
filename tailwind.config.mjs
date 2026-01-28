// tailwind.config.mjs
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        moveUp: {
          "0%, 5%": { transform: "translateY(0)" },
          "15%, 25%": { transform: "translateY(-2.3rem)" },
          "35%, 45%": { transform: "translateY(-4.6rem)" },
          "55%, 65%": { transform: "translateY(-6.9rem)" },
          "75%, 95%": { transform: "translateY(-9.2rem)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        moveUp: "moveUp 4s ease-in-out infinite",
      },
    },
  },
};
