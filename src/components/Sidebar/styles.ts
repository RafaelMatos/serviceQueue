import { styled } from '../../../stitches.config'
import { Text } from '../Typography'

export const Container = styled('aside', {
  zIndex: '0',
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  background: '$black-gradient-vertical',
  overflow: 'hidden',
  boxShadow:
    'rgba(0, 0, 0, 0.0) 4px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px',
  transition: 'width 0.4s',
  variants: {
    isOpen: {
      true: {
        width: 260,
      },
      false: {
        width: 60,
      },
    },
  },
  defaultVariants: {
    isOpen: 'false',
  },
})
export const SidebarInner = styled('div', {})
export const SidebarHeader = styled('header', {
  display: 'flex',
  alignItems: 'center',
  height: 72,
  borderBottom: '1px solid $gray700 ',
  paddingLeft: '$4',
  gap: '$4',

  '> button': {
    all: 'unset',
    color: '$gray100',
    cursor: 'pointer',
  },
})
export const DateInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})
export const Nav = styled('nav', {
  display: 'flex',
  flexDirection: 'column',
})
export const NavItems = styled('button', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'start',
  border: '0px',
  color: '$gray100',
  height: 60,
  paddingLeft: '$4',
  background: 'transparent',
  borderRight: '4px solid transparent',
  // padding: '$4 $6',
  gap: '$4',
  transition: '0.4s  ease-in',

  '&:hover': {
    borderRight: '4px solid $orange300',
    background: '$orange100',
    color: '$gray800',
    opacity: '0.8',
    '> p': {
      color: '$gray800',
    },
  },
  variants: {
    isOpen: {
      true: {
        // padding: '$4 $6',
        '> p': {
          display: 'hidden',
        },
      },
      false: {
        // padding: '$3 $5',
        '> p': {
          display: 'none',
        },
      },
    },
  },
  defaultVariants: {
    isOpen: 'false',
  },
})

export const NavItemText = styled(Text, {})
