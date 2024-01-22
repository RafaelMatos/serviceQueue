import { styled } from '../../../stitches.config'

export const ServiceContainer = styled('div', {
  display: 'flex',
  gap: '$4',
  marginRight: '$2',
})
export const TodayAppointments = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
})
export const TodayAppointment = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'start',
  gap: '$4',
})
export const BoxAppointment = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  padding: '$4',
  border: '1px solid $gray700',
  gap: '$2',
})
export const InfoAppointment = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '$4',
  gap: '$2',
})
export const AppointmentDateHeader = styled('div', {
  display: 'flex',
  flexDirection: 'row',
})
