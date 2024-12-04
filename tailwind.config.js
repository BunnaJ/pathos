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
          primary: '#059669', 
          secondary: '#334155', 
          active: '#f1f5f9',
          active2: '#e2e8f0',
          active3: '#e4e4e7',
          outlines: '#94a3b8',
          extra: "#4b5563"
        },
        width: {
          'custom': '700px',
        },
        spacing: {
         '90': '22.5rem',  // 90 * 4px = 360px
        '91': '22.75rem', // 91 * 4px = 364px
        '92': '23rem',
        '93': '23.25rem'
        },
      },
  },
  plugins: [],
};
