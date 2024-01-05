import { styled } from '../../../stitches.config'

export const Container = styled('section', {
  display: 'flex',
  // flexDirection: 'column',
  gap: '$4',
})

export const AccessButton = styled('button', {
  width: '100%',
  aspectRatio: '1/1',
  background: '$orange300',
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
  '&:hover': {
    background: '$orange200',
    svg: {
      scale: '1.1',
    },
  },
})