import { useContext } from 'react'
import { AppointmentContext } from '@/context/AppointmentContext'

export function useAppointment() {
  return useContext(AppointmentContext)
}
