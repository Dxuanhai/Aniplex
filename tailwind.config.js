/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{ts,jsx,tsx,mdx}',
    './components/**/*.{ts,jsx,tsx,mdx}',
    './app/**/*.{ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        'facebook': '#1877f2',
        'twitter' : '#1DA1F2',
        'youtube' : '#FF0000',
        'instagram' : '#833AB4',
      },
      colors: {
        'main' : '#444'
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
