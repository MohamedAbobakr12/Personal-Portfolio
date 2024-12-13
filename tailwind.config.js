/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          100: "#023047",
          200: "#219EBC",
          300: "#8ECAE6",
        },
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(250, 250, 250, 0.5)',
        '4xl': '0 25px 50px -12px rgb(0 0 0 / 0.8)'
      },
      fontFamily: {
          poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
