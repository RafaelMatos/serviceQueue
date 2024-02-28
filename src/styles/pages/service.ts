// import Box from '@/components/ui/Box'
import { Box } from '@/components/ui/Box'
import { styled } from '../../../stitches.config'

export const ServiceContainer = styled('div', {
  display: 'flex',
  gap: '$4',
  marginRight: '$2',
  justifyContent: 'space-between',
})
export const TodayAppointments = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  width: '100%',
  gap: '$4',
})

export const BoxAppointment = styled(Box, {
  flexDirection: 'row',
})

export const BoxCallPainelHeader = styled('div', {
  borderBottom: '1px solid $gray700',
  padding: '$4',
  width: '100%',
  marginBottom: '$4',
})
export const BoxCallPainelItem = styled(Box, {
  flexDirection: 'row',
  justifyContent: 'space-between',
  span: {
    color: '$gray400',
  },
})

export const AppointmentDateHeader = styled('div', {
  display: 'flex',
  flexDirection: 'row',
})

export const BoxAppointmentPainel = styled(Box, {
  maxHeight: 'fit-content',
})
