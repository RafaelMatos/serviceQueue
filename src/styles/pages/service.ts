import { styled } from '../../../stitches.config'

export const ServiceContainer = styled('div', {
  display: 'flex',
  gap: '$4',
  marginRight: '$2',
})
export const TodayAppointments = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  // width: '100%',
  gap: '$4',
})
export const TodayAppointment = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  // width: '100%',
  justifyContent: 'start',
  gap: '$4',
})
export const BoxAppointment = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  width: '100%',
  padding: '$4',
  border: '1px solid $gray700',
  gap: '$2',
})
export const InfoAppointment = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '$4',
  gap: '$2',
  width: '100%',
})
export const AppointmentDateHeader = styled('div', {
  display: 'flex',
  flexDirection: 'row',
})
export const BoxStatusAppointment = styled(BoxAppointment, {
  flexDirection: 'column',
  maxWidth: 'fit-content',
})

export const ButtonStatus = styled('button', {
  all: 'unset',
  gap: '$2',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  background: '$gradient-horizontal',
  padding: '$1 $2',
  borderRadius: '$lg',
  transition: '0.4s easy-in',

  '&:hover': {
    background: '$cyan500',
    cursor: 'pointer',
  },
  '>svg': {
    background: '$cyan500',
    borderRadius: '$full',
    padding: '$2',
  },
})
