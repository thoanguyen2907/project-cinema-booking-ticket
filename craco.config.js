module.exports = {
  content: ["./src/**/*.{html,js}"],
    style: {
      postcss: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
        ],
      },
    },
    purge: false
  }