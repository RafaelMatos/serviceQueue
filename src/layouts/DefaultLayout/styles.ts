import { styled } from '../../../stitches.config'

export const Container = styled('main', {
  display: 'flex',
  flexDirection: 'column',

  '> section': {
    display: 'flex',
    flexDirection: 'row',
  },
})
export const SectionPage = styled('section', {
  height: '100vh',
  overflowY: 'auto',
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
