import { styled } from '../../../stitches.config'
import { Heading } from '../Typography'

export const Container = styled('header', {
  display: 'flex',
  zIndex: 999,
  flexDirection: 'row',
  padding: '$4 $6',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  background: '$gray800',
  boxShadow:
    'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px',
})
export const PageInfo = styled('div', {
  display: 'flex',

  alignItems: 'center',
  gap: '$4',
})
export const UserInfo = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$4',
})

export const PageHeading = styled(Heading, {
  color: '$cyan200',
})
