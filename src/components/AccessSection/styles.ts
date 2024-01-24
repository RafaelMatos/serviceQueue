import { styled } from '../../../stitches.config'

export const Container = styled('div', {
  width: '100%',
  padding: '$4',
  background: '$cyan500',
  borderRadius: '$xs',
  maxWidth: 372,
  boxShadow:
    'rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px',
})

export const Header = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$4',
})
