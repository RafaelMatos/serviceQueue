import { styled } from '../../../stitches.config'

export const Container = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
})
export const SectionPage = styled('section', {
  height: '100vh',
  display: 'flex',
  width: '100%',
  flexDirection: 'row',
})
export const PageContent = styled('div', {
  paddingTop: '$5',
  marginLeft: '$5',

  marginBottom: 100,
  overflowY: 'auto',
  overflowX: 'hidden',
  width: '100%',
  // '&::-webkit-scrollbar': {
  //   display: 'none',
  // },
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
