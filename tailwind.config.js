/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        uxl: "30rem",
        mxl: "25rem",
        lxl: "20rem",
        axl: "15rem",
        gxl: "10rem",
        txl: "5rem",
      },
    },
  },
  plugins: [],
};
