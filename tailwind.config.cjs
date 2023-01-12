/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bright-blue": "hsl(220, 98%, 61%)",
        "very-light-gray": "hsl(0, 0%, 98%)",
        "very-light-grayish-blue": "hsl(236, 33%, 92%)",
        "light-grayish-blue": "hsl(233, 11%, 84%)",
        "dark-grayish-blue": " hsl(236, 9%, 61%)",
        "very-dark-grayish-blue": "hsl(235, 19%, 35%)",
        "very-dark-blue": "hsl(235, 21%, 11%)",
        "very-dark-destaturated-blue": "hsl(235, 24%, 19%)",
        "light-grayish-blue": "hsl(234, 39%, 85%)",
        "light-grayish-blue-hover": "hsl(236, 33%, 92%)",
        "dark-grayish-blue": "hsl(234, 11%, 52%)",
        "very-dark-grayish-blue": "hsl(233, 14%, 35%)",
        "very-dark-grayish-blue": "hsl(237, 14%, 26%)",
        "gradient-one": "hsl(192, 100%, 67%)",
        "gradient-two": "hsl(280, 87%, 65%)",
      },
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
      },
      backgroundImage: {
        "mobile-light-header-bg": "url('./public/bg-mobile-light.jpg')",
        "mobile-dark-header-bg": "url('./public/bg-mobile-dark.jpg')",
      },
    },
  },
  plugins: [],
};
