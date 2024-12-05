/* eslint-disable prettier/prettier */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {

        'headline-sm': ['32px', {
          lineHeight: '1.1',
          letterSpacing: '-0.02em',
          fontWeight: '400',
        }],
        'headline-md': ['44px', {
          lineHeight: '1.1',
          letterSpacing: '-0.02em',
          fontWeight: '400',
        }],
        'headline-lg': ['65px', {
          lineHeight: '1.1',
          letterSpacing: '-0.02em',
          fontWeight: '400',
        }],
        'title-s': ['20px', {
          lineHeight: '1.3',
          fontWeight: '400',
        }],
        'title-s-md': ['22px', {
          lineHeight: '1.3',
          fontWeight: '400',
        }],
        'title-s-lg': ['25px', {
          lineHeight: '1.3',
          fontWeight: '400',
        }],

        // Body Large variants
        'body-l': ['16px', {
          lineHeight: '1.4',
          fontWeight: '400',
        }],
        'body-l-md': ['20px', {
          lineHeight: '1.4',
          fontWeight: '400',
        }],
        'body-m': ['16px', {
          lineHeight: '1.45',
          fontWeight: '400',
        }],
        'body-m-lg': ['18px', {
          lineHeight: '1.45',
          fontWeight: '400',
        }],
        'title-l': ['26px', {
          lineHeight: '1.1',
          letterSpacing: '-0.01em',
          fontWeight: '400',
        }],
        'title-l-md': ['32px', {
          lineHeight: '1.1',
          letterSpacing: '-0.01em',
          fontWeight: '400',
        }],
      },
      color: {
        black: "#222222",
        gray: {
          300: 'rgb(137 134 131)',
        },
      },
      maxWidth: {
        'xl': '36rem',
      },
      fontFamily: {
        // 'regular': ['var(--font-regular)'],
        // 'regular-italic': ['var(--font-regular-italic)'],
        // 'medium': ['var(--font-medium)'],
        // 'medium-italic': ['var(--font-medium-italic)'],
        gtamerica: ['var(--font-gtamerica)', 'Arial'],
      },
      maxWidth: {
        'screen-3xl': '1728px',
        // Add more custom sizes if needed
        'screen-4xl': '2048px',
      },
      backgroundColor: {
        'gray-100': 'rgb(243, 244, 246)',
        'gray-700': 'rgb(55, 65, 81)',
      },

    },
  },
  variants: {
    extend: {
      backgroundColor: ['theme-tech', 'theme-platform', 'theme-product', "hover", "data-hoverd"],
      textColor: ['theme-tech', 'theme-platform', 'theme-product'],
      borderColor: ['theme-tech', 'theme-platform', 'theme-product'],
    },
  },
  plugins: [],
};
