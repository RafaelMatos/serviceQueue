import { styled } from '../../../stitches.config'

export const AccessContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1.1fr 1fr',
  padding: 20,
  minHeight: '100vh',
})

export const LogoSection = styled('section', {
  width: '100%',
  height: '100%',
  background: 'url(/images/Background2.png) no-repeat center',
  backgroundSize: 'cover',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 10,
})

export const WelcomeSection = styled('section', {
  width: '100%',
  height: '100%',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  paddingLeft: 20,
  '> img': {
    marginBottom: '$4',
  },
})
export const WelcomeSaluting = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '$6',
  marginBottom: '$6',
})
export const Slogan = styled('h1', {
  display: 'flex',
  position: 'relative',
  fontSize: '$3xl',
  color: '$black',
  gap: '$2',
  '> span': {
    color: '$cyan300',
  },
})
