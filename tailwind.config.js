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
    },
  },
  plugins: [],
};
