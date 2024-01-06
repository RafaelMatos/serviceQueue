import { styled } from '../../../stitches.config'

export const ServiceContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1.1fr 1fr 1fr',
  padding: 20,
  height: '100vh',
  maxHeight: '100vh',
  gap: '$4',
  overflowY: 'hidden',
  marginRight: '$2',
})
export const RegistersWrapper = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  overflowY: 'scroll',

  '&::-webkit-scrollbar': {
    width: 6,
  },
  '&::-webkit-scrollbar-track': {
    background: '$gray700',
    borderRadius: '$md',
  },
  '&::-webkit-scrollbar-thumb': {
    background: '$gray600',
    borderRadius: '$md',
  },
})
