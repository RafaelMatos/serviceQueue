import { styled } from '../../../../stitches.config'

export const ButtonContainer = styled('button', {
  width: '100%',
  background: '$gradient-horizontal',
  marginTop: '$3',
  color: '$gray100',
  border: 'none',
  fontWeight: '$bold',
  fontSize: '$lg',
  borderRadius: '$sm',
  padding: '$2 $6',
  display: 'flex',
  gap: '$3',
  alignItems: 'center',
  justifyContent: 'center',
  transition: '0.5s ease-in-out',
  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
  '&:not(:disabled):hover': {
    scale: '1.01',
    // svg: {
    //   scale: '1.5',
    // },
  },
})
