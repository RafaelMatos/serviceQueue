import { styled } from '../../../../stitches.config'

export const TextInputContainer = styled('div', {
  backgroundColor: '$gray900',

  borderRadius: '$sm',
  border: '2px solid $gray900',
  display: 'flex',
  alignItems: 'center',

  variants: {
    size: {
      sm: {
        padding: '$2 $3',
      },
      md: {
        padding: '$3 $4',
      },
    },
    typeNumber: {
      true: {
        width: 100,
      },
      false: {
        width: '100%',
      },
    },
  },

  '&:has(input:focus)': {
    borderColor: '$orange300',
  },
  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  defaultVariants: {
    size: 'md',
    typeNumber: 'false',
  },
})
export const Prefixe = styled('span', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray400',
  fontWeight: '$regular',
})
export const Input = styled('input', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$white',
  background: 'transparent',
  border: 0,
  width: '100%',

  '&:focus': {
    outline: '0',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&::placeholder': {
    color: '$gray400',
  },
})
