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
  background:
    '-webkit-linear-gradient(rgba(107, 206, 225, 0.8), rgba(23,101, 116, 0.8)), url("https://live.staticflickr.com/5763/30426489272_758b41e0d3_z.jpg") no-repeat ' /* The least supported option. */,
  backgroundSize: 'cover',
  display: 'flex',
  flexDirection: 'column',
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
  overflowY: 'auto',
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
  color: '$orange300',
  gap: '$2',
  '> span': {
    color: '$cyan300',
  },
})
