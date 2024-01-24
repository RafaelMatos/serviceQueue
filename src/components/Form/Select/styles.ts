import { styled } from '../../../../stitches.config'

export const SelectContainer = styled('div', {
  background: '$gray800',
  border: '1px solid $cyan100',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  borderRadius: '$sm',
  gap: '$5',
  paddingRight: '$5',
  color: '$gray500',
  transition: '0.2s ease-in-out',

  '&:focus-within': {
    border: '1px solid $cyan200',
  },

  select: {
    height: 48,
    flex: 1,
    paddingLeft: '$5',
    background: 'none',
    border: 'none',
    color: '$gray100',
    fontSize: '0.875rem',

    '&::placeholder': {
      color: '$gray400',
    },

    '&:focus': {
      outline: 'none',
    },
  },
})
