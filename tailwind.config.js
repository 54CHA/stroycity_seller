/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "375px",
        mn: "820px",
        "3xl": "1600px",
        "4xl": "2000px",
        "5xl": "2500px",
      },
    },
  },
  plugins: [],
};
