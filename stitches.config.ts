import { createStitches } from '@stitches/react'

export const { styled, getCssText, globalCss, theme } = createStitches({
  theme: {
    fonts: {
      default: 'Nunito, sans-serif',
    },

    space: {
      px: '1px',
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      10: '2.5rem',
    },

    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '2rem',
      '4xl': '3rem',
    },

    fontWeights: {
      regular: '400',
      medium: '500',
      bold: '700',
    },

    lineHeights: {
      shorter: '125%',
      short: '140%',
      base: '160%',
      tall: '180%',
    },

    colors: {
      white: '#FFFFFF',
      black: '#000000',

      red100: '#F37373',
      red300: '#EF4444',
      red500: '#EB1515',

      orange100: '#ffa565',
      orange300: '#FF8732',
      orange400: '#ff7819',
      orange500: '#fe6900',

      green100: '#52dcae',
      green300: '#2Ad199',
      green500: '#21a77a',

      cyan100: '#52c6DC',
      cyan200: '#3DBFD8',
      cyan300: '#2AB6D1',
      cyan400: '#26A4BC',
      cyan500: '#2191A7',

      gray50: '#fafaf9',
      gray100: '#f5f5f4',
      gray200: '#e7e5e4',
      gray300: '#d6d3d1',
      gray400: '#a8a29e',
      gray500: '#78716c',
      gray600: '#57534e',
      gray700: '#44403c',
      gray800: '#292524',
      gray900: '#1c1917',

      'gradient-vertical': `linear-gradient(180deg, #2AB6D1 0%, #26A4BC 100%)`,
      'gradient-horizontal': `linear-gradient(90deg, #2AB6D1 0%, #26A4BC 100%)`,
      'orange-gradient-vertical': `linear-gradient(180deg, #FF8732 0%, #ff7819 100%)`,
      'orange-gradient-horizontal': `linear-gradient(90deg, #FF8732 0%, #ff7819 100%)`,
      'green-gradient-vertical': `linear-gradient(180deg, #2AD199 0%, #26bc89 100%)`,
      'green-gradient-horizontal': `linear-gradient(90deg, #2AD199 0%, #26bc89 100%)`,
      'red-gradient-vertical': `linear-gradient(180deg, #EF4444 0%, #ED2D2D 100%)`,
      'red-gradient-horizontal': `linear-gradient(90deg, #EF4444 0%, #ED2D2D 100%)`,
      'black-gradient-horizontal': `linear-gradient(90deg, #292524 0%,#1c1917 100%)`,
      'black-gradient-vertical': `linear-gradient(180deg, #292524 0%,#1c1917 100%)`,
    },

    radii: {
      xs: '2.5px',
      sm: '5px',
      md: '10px',
      lg: '20px',
      full: '99999px',
    },
  },
})
