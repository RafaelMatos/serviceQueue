import { styled } from '../../../stitches.config'

export const Container = styled('section', {
  display: 'flex',
  gap: '$4',
})

export const AccessButton = styled('button', {
  width: '100%',
  aspectRatio: '1/1',
  background: '$cyan300',
  color: '$gray100',
  border: 'none',
  fontWeight: '$bold',
  fontSize: '$lg',
  borderRadius: 8,
  padding: '0 $6',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$5',
  transition: '0.2s ease-in-out',
  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
  '&:not(:disabled):hover': {
    background: '$cyan200',
    svg: {
      scale: '1.1',
    },
  },
})
