import { createStitches } from '@stitches/react';

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

      red100:'#F75A68',
      red200:'#F64251',

      orange100: '#FFB783',
      orange200: '#FF9F5A',
      orange300: '#FF8732',
      orange400: '#FF6F09',
      orange500: '#df5d00',

      gray50:  '#fafaf9',
      gray100: '#f5f5f4',
      gray200: '#e7e5e4',
      gray300: '#d6d3d1',
      gray400: '#a8a29e',
      gray500: '#78716c',
      gray600: '#57534e',
      gray700: '#44403c',
      gray800: '#292524',
      gray900: '#1c1917',

			'gradient-vertical': `linear-gradient(180deg, #df5d00 0%, #ff9f5a 100%)`,
      'gradient-horizontal': `linear-gradient(90deg, #df5d00 0%, #ff9f5a 100%)`,
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