/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index1.html",
    "./src/index2.html",
    "./src/index3.html",
    "./src/index4.html",
    "./src/index5.html",
    "./src/index6.html",
    "./src/index7.html",
    "./src/index8.html",
    "./src/project.html",
    "./index.html"],
  theme: {

    extend: {
      fontFamily: {
        gotham: ["gotham", "sans-serif"],
      },
      colors: {
        primary: "#FF1C03",
        gray_cus: "#FAFAFA",
      },
    },
    screens: {
      xl: { max: "1200px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "900px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "376px" },
      mdpc: { min: "376px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "550px" },
      // => @media (max-width: 639px) { ... }
    },

  },
  plugins: [],
}

