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
        pale: '#faf5ff',
        light: '#d8b4fe',
        DEFAULT: '#9000ff',
        dark: '#7e22ce',
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
        pale: '#eff6ff',
        light: '#93c5fd',
        DEFAULT: '#3b82f6',
        dark: '#2563eb',
      },
      'red': {
        pale: '#fff1f2',
        light: '#fda4af',
        DEFAULT: '#f43f5e',
        dark: '#e11d48',
      },
    }, 
    extend: {},
  },
};

export type Colors = 
  'main' | 'main-pale' | 'main-light' | 'main-dark' | 
  'white' | 'black' | 
  'gray-50'| 'gray-100'| 'gray-200'| 'gray-300'| 'gray-400' | 'gray-500'| 'gray-600'| 'gray-700'| 'gray-800'| 'gray-900'| 'gray-950' | 
  'red' | 'red-pale' | 'red-light' | 'red-dark' | 
  'blue' | 'blue-pale' | 'blue-light' | 'blue-dark';