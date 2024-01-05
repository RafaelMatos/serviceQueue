import { styled } from '../../../stitches.config'

export const ServiceContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1.1fr 1fr 1fr',
  padding: 20,
  height: '100vh',
  maxHeight: '100vh',
  gap: '$4',
  overflowY: 'hidden',
})
