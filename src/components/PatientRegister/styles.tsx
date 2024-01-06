import { styled } from '../../../stitches.config'

export const Container = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  border: '2px solid $orange500',
  borderRadius: '$md',
  padding: '$2',
  // overflowY: 'scroll',

  // '&::-webkit-scrollbar': {
  //   width: 6,
  // },
  // '&::-webkit-scrollbar-track': {
  //   background: '$gray700',
  // },
  // '&::-webkit-scrollbar-thumb': {
  //   background: '$orange500',
  // },
})

export const FormContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  border: '1px solid $orange500',
  borderRadius: '$md',
  padding: '$2',
  marginTop: '$2',
  marginBottom: '$2',
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '$2',
  },
})

export const FormItem = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',
  marginTop: '$3',
})
export const ActionButtons = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
})

export const Button = styled('button', {
  all: 'unset',
  width: 'fit-content',
  padding: '$2',
  borderRadius: '$sm',
  background: '$orange300',
  transition: '0.2s ease-in-out',
  '&:hover': {
    background: '$orange200',
  },
})

export const Input = styled('input', {
  height: 48,
  flex: 1,
  padding: '$2',
  background: 'none',
  color: '$gray100',
  fontSize: '0.875rem',
  border: '1px solid $orange100',
  borderRadius: '$sm',

  '&::placeholder': {
    color: '$gray400',
  },

  '&:focus': {
    outline: 'none',
  },
})

export const Select = styled('select', {
  height: 48,
  flex: 1,
  padding: '$2',
  background: 'none',
  color: '$gray100',
  fontSize: '0.875rem',
  border: '1px solid $orange100',
  borderRadius: '$sm',

  '&::placeholder': {
    color: '$gray400',
  },

  '&:focus': {
    outline: 'none',
    border: '1px solid $orange200',
  },

  '> option': {
    color: '$orange100',
    background: '$gray800',
  },
})
