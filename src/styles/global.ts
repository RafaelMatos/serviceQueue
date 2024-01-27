import { globalCss } from '../../stitches.config'
import { nunito } from '@/pages/_app'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',

    '&::-webkit-scrollbar': {
      width: 6,
    },
    '&::-webkit-scrollbar-track': {
      background: '$gray700',
      borderRadius: '$md',
    },
    '&::-webkit-scrollbar-thumb': {
      background: '$gray600',
      borderRadius: '$md',
    },
  },

  html: {
    fontFamily: nunito.style.fontFamily,
  },

  body: {
    backgroundColor: '$gray800',
    color: '$gray100',
    overflowY: 'hidden',
    '-webkit-font-smoothing': 'antialiased',
  },
  a: {
    color: 'inherit',
  },
  button: {
    cursor: 'pointer',
  },

  'button, input, textarea': {
    fontFamily: 'inherit',
  },
})
