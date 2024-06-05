module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./assets/scss/tailwind/**/*.scss"
  ],
  theme: {
    extend: {
      fontFamily: {
        'pretendard': ['Pretendard', 'Segoe UI', 'Open Sans', 'Helvetica Neue'],
        'mono': ['Consolas', 'Menlo', 'Courier', 'monospace']
      },
    }
  },
  plugins: [],
}