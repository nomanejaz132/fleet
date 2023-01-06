/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   caret:
      //     "url('data: image/svg + xml,% 3csvg xmlns='http://www.w3.org/2000/svg'  fill='none' viewBox='0 0 20 20' % 3e % 3cpath stroke='%231c2532' stroke- linecap='round' stroke - linejoin='round' stroke - width='1.5' d = 'M6 8l4 4 4-4' /% 3e % 3c/ svg % 3e')",
      // },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
