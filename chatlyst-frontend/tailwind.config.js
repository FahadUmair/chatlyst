/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-background": "#10172a",
        "custom-light-purple": "#9c93c6",
        "custom-dark-purple": "#5C41A0",
        "user-chat": "#328890",
        "computer-chat": "#544180",
      },
      backgroundImage: {
        "blurry-shapes": "url('./assets/blurry-shapes.svg')",
      },
    },
  },
  plugins: [],
};

