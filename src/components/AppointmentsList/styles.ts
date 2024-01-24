import { styled } from '../../../stitches.config'

export const Container = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  border: '2px solid $cyan500',
  borderRadius: '$md',
  padding: '$2',
})

export const Appointment = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  border: '1px solid $cyan500',
  borderRadius: '$md',
  padding: '$2',
  marginTop: '$2',
  marginBottom: '$2',
})

export const AppointmentInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
  padding: '$2',
})
export const AppointmentItem = styled('div', {
  display: 'flex',
  gap: '$2',
})
