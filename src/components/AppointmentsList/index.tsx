import { useState } from 'react'
import { Heading, Text } from '../Typography'
import {
  Appointment,
  AppointmentInfo,
  AppointmentItem,
  Container,
} from './styles'
import { api } from '@/lib/axios'
// import { useAppointment } from '@/hooks/useAppointment'
import { useQuery } from '@tanstack/react-query'
import { IAppointment } from '@/context/AppointmentContext'
import dayjs from 'dayjs'

export const AppointmentsList = () => {
  // const { getAppointmentList, appointmentList } = useAppointment()
  // const [output, setOutput] = useState('')

  const { data: appointments } = useQuery<IAppointment[]>({
    queryKey: ['appointments'],
    queryFn: async () => {
      const { data } = await api.get('/appointments/list')
      return data?.appointments ?? []
    },
  })

  const todayAppointments = appointments?.filter(
    (appointment) =>
      dayjs(appointment.created_at).format('DD/MM/YYYY') ===
      dayjs().format('DD/MM/YYYY'),
  )

  return (
    <Container>
      {/* {JSON.stringify(dayjs().date())} */}
      <Heading size="md">Consultas</Heading>
      {/* {output && <Text>{output}</Text>} */}
      {todayAppointments?.map((appointment) => {
        return (
          <Appointment key={appointment.id}>
            <AppointmentInfo>
              <AppointmentItem>
                <Text>Data:</Text>
                <Text color="gray-400">
                  {dayjs(appointment.created_at).format('DD/MM/YYYY')}
                </Text>
              </AppointmentItem>
              <AppointmentItem>
                <Text>Horário:</Text>
                <Text color="gray-400">
                  {dayjs(appointment.created_at).format('HH:mm')}
                </Text>
              </AppointmentItem>
              <AppointmentItem>
                <Text>Nome:</Text>
                <Text color="gray-400">{appointment.patient?.name}</Text>
              </AppointmentItem>
              <AppointmentItem>
                <Text>Idade:</Text>
                <Text color="gray-400">{appointment.patient?.age}</Text>
              </AppointmentItem>
              <AppointmentItem>
                <Text>PCD:</Text>
                <Text color="gray-400">
                  {appointment.isPriority ? 'É pcd' : 'Não é pcd'}
                </Text>
              </AppointmentItem>
              <AppointmentItem>
                <Text>Paciente com prioridade:</Text>
                <Text color="gray-400">
                  {appointment.isPriority
                    ? 'Atendimento prioritário'
                    : 'Atendimento normal'}
                </Text>
              </AppointmentItem>
            </AppointmentInfo>
          </Appointment>
        )
      })}
    </Container>
  )
}
