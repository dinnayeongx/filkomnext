module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-hero": "url('/public/home-section.svg')",
      },
      colors: {
        primary: "#3354FF",
      },
      fontFamily: {
        spartan: ["League Spartan", "sans-serif"],
        lexend: ["Lexend", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      keyframes: {
        scrollX: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'scroll-x': 'scrollX 20s linear infinite',
      },
    },
  },
  plugins: [],
}