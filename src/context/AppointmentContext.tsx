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

export interface IUpdateAppointment {
  patient_id?: string
  isPriority?: boolean
  status_appointment?: number
}

export const Status = {
  AWAITING: 0,
  CANCELED: 1,
  CALLED: 2,
  INSERVICE: 3,
  COMPLETED: 4,
}

interface AppointmentContextData {
  // letAppointment: () => IAppointment || null
  // setAppointment: () => void
  handleSetAppointmentList: (appointments: IAppointment[]) => void
  appointmentList: IAppointment[]
  getAppointmentList: () => Promise<[]>
  addToAppointments: (appointment: IAppointment) => void
  updateAppointment: (appointmentId: string, data: IUpdateAppointment) => void
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
  function handleSetAppointmentList(appointments: IAppointment[]) {
    setAppointmentList(appointments)
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
  const updateAppointment = async (
    appointmentId: string,
    data: IUpdateAppointment,
  ) => {
    await api.patch(`/appointments/${appointmentId}/update`, data)
  }

  return (
    <AppointmentContext.Provider
      value={{
        addToAppointments,
        getAppointmentList,
        appointmentList,
        handleSetAppointmentList,
        updateAppointment,
      }}
    >
      {children}
    </AppointmentContext.Provider>
  )
}
