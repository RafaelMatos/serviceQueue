import { api } from '@/lib/axios'
import { ReactNode, createContext, useState } from 'react'

export interface IStatusAppointment {
  type: number
  name: string
  description: string
}

export interface IPatient {
  id: string
  name: string
  age: number
  gender: number
  pcd: boolean
  cpf: number
  created_at: string
}

export interface IAppointment {
  id: string
  patient_id: string
  isPriority: boolean
  status_appointment: number
  created_at: string
  patient?: IPatient
  statusAppointment?: IStatusAppointment
}

interface AppointmentContextData {
  // letAppointment: () => IAppointment || null
  // setAppointment: () => void
  // setAppointmentList: () => void
  appointmentList: IAppointment[]
  getAppointmentList: () => Promise<[]>
  addToAppointments: (appointment: IAppointment) => void
}

interface AppointmentContextProviderProps {
  children: ReactNode
}

export const AppointmentContext = createContext({} as AppointmentContextData)

export function AppointmentContextProvider({
  children,
}: AppointmentContextProviderProps) {
  const [appointmentList, setAppointmentList] = useState<IAppointment[]>([])
  const [appointment, setAppointment] = useState<IAppointment>()

  function addToAppointments(appointment: IAppointment) {
    setAppointmentList((state) => [...state, appointment])
  }

  // const letAppointment = () => {
  //   if (!appointment) {
  //     return null
  //   }
  //   return appointment
  // }
  const getAppointmentList = async () => {
    const { data } = await api.get('/appointments/list')

    return data.appointments ?? []
  }

  return (
    <AppointmentContext.Provider
      value={{
        addToAppointments,
        getAppointmentList,
        appointmentList,
      }}
    >
      {children}
    </AppointmentContext.Provider>
  )
}
