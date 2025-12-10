/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        body : 'var(--body)',
        primary : 'var(--primary)',
        secondary : 'var(--secondary)',
        textColor : 'var(--text-color)',
        textHover : 'var(--text-hover)',
      }
    },
  },
  plugins: [],
}