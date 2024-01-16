import { styled } from '../../../stitches.config'

export const Container = styled('main', {
  display: 'flex',
  flexDirection: 'column',

  '> section': {
    display: 'flex',
    flexDirection: 'row',
  },
})
