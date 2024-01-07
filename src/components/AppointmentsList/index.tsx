import { useEffect, useState } from 'react'
import { Heading, Text } from '../Typography'
import {
  Appointment,
  AppointmentInfo,
  AppointmentItem,
  Container,
} from './styles'
import { api } from '@/lib/axios'
import { useAppointment } from '@/hooks/useAppointment'

export const AppointmentsList = () => {
  const { getAppointmentList, appointmentList } = useAppointment()
  const [output, setOutput] = useState('')
  useEffect(() => {
    try {
      console.log('Passou nesse log')
      // const appointments = getAppointmentList()
      const appointments = getAppointmentList()
      console.log(appointments)
      setOutput(JSON.stringify(appointments, null, 2))
    } catch (err) {
      console.log(err)
    }
  }, [appointmentList])

  return (
    <Container>
      <Heading size="md">Consultas</Heading>
      {output && <Text>{output}</Text>}
      {Array.from({ length: 5 }).map((_, i) => {
        return (
          <Appointment key={i}>
            <AppointmentInfo>
              <AppointmentItem>
                <Text>Nome:</Text>
                <Text color="gray-400">Nome</Text>
              </AppointmentItem>
              <AppointmentItem>
                <Text>Idade:</Text>
                <Text color="gray-400">22</Text>
              </AppointmentItem>
              <AppointmentItem>
                <Text>PCD:</Text>
                <Text color="gray-400">pcd</Text>
              </AppointmentItem>
              <AppointmentItem>
                <Text>Paciente com prioridade:</Text>
                <Text color="gray-400">Prioritário</Text>
              </AppointmentItem>
            </AppointmentInfo>
          </Appointment>
        )
      })}
    </Container>
  )
}
