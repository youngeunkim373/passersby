/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [],
  safelist: [
    {
      pattern: /bg-./,
    },
  ],
  theme: {
    colors: {
      'main': {
        light: '#e9d5ff',
        DEFAULT: '#9000ff',
        dark: '#5b21b6',
      },
      'white': '#ffffff',
      'black': '#000000',
      'gray': {
        50: '#f8fafc',
        100: '#f1f5f9',
        200: '#e2e8f0',
        300: '#cbd5e1',
        400: '#94a3b8',
        500: '#64748b',
        600: '#475569',
        700: '#334155',
        800: '#1e293b',
        900: '#0f172a',
        950: '#020617',
      },
      'blue': {
        light: '#bfdbfe',
        DEFAULT: '#3b82f6',
        dark: '#1d4ed8',
      },
      'red': {
        light: '#fecdd3',
        DEFAULT: '#f43f5e',
        dark: '#e11d48',
      },
    }, 
    extend: {},
  },
};

export type Colors = 
  'main' | 'main-light' | 'main-dark' | 
  'white' | 'black' | 
  'gray-50'| 'gray-100'| 'gray-200'| 'gray-300'| 'gray-400' | 'gray-500'| 'gray-600'| 'gray-700'| 'gray-800'| 'gray-900'| 'gray-950' | 
  'red' | 'red-light' | 'red-dark' | 
  'blue' | 'blue-light' | 'blue-dark';