import { styled } from '../../../stitches.config'
import { Box } from '../ui/Box'

export const TodayAppointment = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  // width: '100%',
  justifyContent: 'start',
  gap: '$4',
})

export const InfoAppointment = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '$4',
  gap: '$2',
  width: '100%',
})

export const BoxStatus = styled(Box, {
  flexDirection: 'column',
  maxWidth: 'fit-content',
})

export const ButtonStatus = styled('button', {
  all: 'unset',
  gap: '$2',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',

  padding: '$1 $2',
  borderRadius: '$lg',
  transition: '0.5s ease-in-out',

  variants: {
    color: {
      cyan: {
        background: '$cyan300',
        '>svg': {
          background: '$cyan500',
        },
        '&:not(:disabled):hover': {
          background: '$cyan500',
        },
      },
      orange: {
        background: '$orange300',
        '>svg': {
          background: '$orange500',
        },
        '&:not(:disabled):hover': {
          background: '$orange500',
        },
      },
      green: {
        background: '$green300',
        '>svg': {
          background: '$green500',
        },
        '&:not(:disabled):hover': {
          background: '$green500',
        },
      },
      red: {
        background: '$red300',
        '>svg': {
          background: '$red500',
        },
        '&:not(:disabled):hover': {
          background: '$red500',
        },
      },
    },
  },

  '&:not(:disabled):hover': {
    cursor: 'pointer',
  },
  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  '>svg': {
    borderRadius: '$full',
    padding: '$2',
  },

  defaultVariants: {
    color: 'cyan',
  },
})
