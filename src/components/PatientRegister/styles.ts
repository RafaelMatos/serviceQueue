import { styled } from '../../../stitches.config'
import { Box } from '../ui/Box'

export const Container = styled(Box, {
  width: '100%',
  maxWidth: '50%',
  minWidth: '450px',
  minHeight: '450px',
  overflow: 'auto',
})

export const Form = styled('form', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '$4',
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
  background: '$cyan300',
  transition: '0.2s ease-in-out',
  '&:hover': {
    background: '$cyan200',
  },
})

export const Input = styled('input', {
  height: 48,
  flex: 1,
  padding: '$2',
  background: 'none',
  color: '$gray100',
  fontSize: '0.875rem',
  border: '1px solid $cyan100',
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
  border: '1px solid $cyan100',
  borderRadius: '$sm',

  '&::placeholder': {
    color: '$gray400',
  },

  '&:focus': {
    outline: 'none',
    border: '1px solid $cyan200',
  },

  '> option': {
    color: '$cyan100',
    background: '$gray800',
  },
})
