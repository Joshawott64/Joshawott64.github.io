/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkest: "#201E43",
        dark: "#134B70",
        light: "#508C9B",
        lightest: "#EEEEEE",
        warning: "#FB773C",
      },
      keyframes: {
        fadeFromLeft: {
          "0%": {
            opacity: 0,
            transform: "translateX(-15%)",
          },
          "100%": {
            opacity: 100,
            transfrom: "translateX(0%)",
          },
        },
        fadeFromBottom: {
          "0%": {
            opacity: 0,
            transform: "translateY(15%)",
          },
          "100%": {
            opacity: 100,
            transform: "translateY(0%)",
          },
        },
      },
      animation: {
        fadeFromBottom: "fadeFromBottom 1s ease-in-out",
        fadeFromLeft: "fadeFromLeft 0.75s ease-in-out",
      },
    },
  },
  plugins: [],
};
