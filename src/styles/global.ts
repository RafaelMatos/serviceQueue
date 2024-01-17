import { globalCss } from '../../stitches.config'
import { nunito } from '@/pages/_app'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  html: {
    fontFamily: nunito.style.fontFamily,
  },

  body: {
    backgroundColor: '$gray800',
    color: '$gray100',
    // overflowY: 'hidden',
    '-webkit-font-smoothing': 'antialiased',
    maxHeight: '100vh',
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
