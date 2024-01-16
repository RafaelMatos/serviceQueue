import { styled } from '../../../stitches.config'
import { Heading } from '../Typography'

export const Container = styled('header', {
  display: 'flex',
  flexDirection: 'row',
  padding: '$4 $6',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  boxShadow:
    'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px',
  marginBottom: '$4',
})
export const PageInfo = styled('div', {
  display: 'flex',
  // flexDirection: 'row',
  alignItems: 'center',
  gap: '$4',
})
export const UserInfo = styled('div', {
  display: 'flex',
  // flexDirection: 'row',
  alignItems: 'center',
  gap: '$4',
})

export const PageHeading = styled(Heading, {
  color: '$orange200',
})
