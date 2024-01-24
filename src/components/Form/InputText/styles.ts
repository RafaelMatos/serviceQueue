import { styled } from '../../../../stitches.config'

export const TextInputContainer = styled('div', {
  background: 'linear-gradient(90deg, #1c1917 0%,#1c1917 100%)',
  borderRadius: '$sm',
  border: '1px solid $gray900',
  display: 'flex',
  alignItems: 'center',
  transition: '0.5s ease-in-out',
  input: {
    'caret-color': '$cyan300',
    fontSize: '$lg',
    fontWeight: '$bold',
  },

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
    borderColor: '$cyan100',
    background: '$black-gradient-horizontal',
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
