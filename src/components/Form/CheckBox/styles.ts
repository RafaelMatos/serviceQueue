import * as Checkbox from '@radix-ui/react-checkbox'
import { styled } from '../../../../stitches.config'
import { keyframes } from '@stitches/react'

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
})

export const CheckboxContainer = styled(Checkbox.Root, {
  all: 'unset',
  width: 24,
  aspectRatio: '1/1',
  backgroundColor: '$gray900',
  borderRadius: '$xs',
  lineHeight: 0,
  cursor: 'pointer',
  overflow: 'hidden',
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '2px solid $gray900',

  '&[data-state="checked"]': {
    backgroundColor: '$orange300',
  },

  '&:focus, &[data-state="checked"]': {
    border: '2px solid $orange300',
  },
})

const slideIn = keyframes({
  from: {
    transform: 'translatey(-100%)',
  },
  to: {
    transform: 'translatey(0)',
  },
})
const slideOut = keyframes({
  from: {
    transform: 'translatey(0)',
  },
  to: {
    transform: 'translatey(-100%)',
  },
})

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  color: '$white',
  width: '$4',
  height: '$4',

  '&[data-state="checked"]': {
    animation: `${slideIn} 200ms ease-out`,
  },
  '&[data-state="unchecked"]': {
    animation: `${slideOut} 200ms ease-out`,
  },
})