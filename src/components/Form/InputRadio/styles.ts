import { styled } from '../../../../stitches.config'

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
})
export const InputRadioContainer = styled('div', {
  backgroundColor: '$gray900',
  border: '2px solid $gray900',
  borderRadius: '$sm',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 12,
  aspectRatio: '1/1',

  variants: {
    size: {
      sm: {
        padding: '$2 $3',
      },
      md: {
        padding: '$3 $4',
      },
    },
  },

  '&:has(input:focus)': {
    borderColor: '$cyan300',
  },
  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  defaultVariants: {
    size: 'md',
  },
})
export const Input = styled('input', {})
