import { useState } from 'react'
import {
  ActionButtons,
  Button,
  FormContainer,
  PatientInfo,
  PatientInfoItem,
} from './styles'
import { Heading, Text } from '../Typography'
import { api } from '@/lib/axios'
import { PatientRegistered } from '../PatientRegister'
import { useAppointment } from '@/hooks/useAppointment'
import { Box } from '../ui/Box'
import * as Dialog from '@radix-ui/react-dialog'

type AppointmentRegisterProps = {
  patient: PatientRegistered
  // cancelAppointmentRegister: () => void
}

export const AppointmentRegister = ({
  patient,
  // cancelAppointmentRegister,
}: AppointmentRegisterProps) => {
  const { name, age, isPcd, id } = patient
  const isPriority = isPcd || age >= 60
  const [output, setOutput] = useState('')
  const [registerErro, setRegisterErro] = useState<string | null>(null)
  const [registerSuccess, setRegisterSuccess] = useState<string | null>(null)
  const { addToAppointments } = useAppointment()
  const handleRegisterAppointment = async () => {
    try {
      const response = await api.post('/appointments', {
        id,
        isPriority,
        statusAppointment: 0,
      })
      const appointment = response.data.appointment
      if (appointment) {
        addToAppointments({
          id: appointment.id,
          isPriority: appointment.isPriority,
          created_at: appointment.created_at,
          patient_id: appointment.patient_id,
          status_appointment: appointment.status_appointment,
        })
      }
      setOutput(JSON.stringify(response, null, 2))
      setRegisterSuccess('Consulta marcada!')
    } catch (err) {
      setRegisterErro('Erro ao cadastrar Consulta')
      console.log(err)
    }
  }

  return (
    <Box flexDirection="column">
      {/* <Heading size="sm">Confirmar consulta para paciente</Heading> */}
      <PatientInfo>
        <PatientInfoItem>
          <Text>Nome:</Text>
          <Text color="gray-400">{name}</Text>
        </PatientInfoItem>
        <PatientInfoItem>
          <Text>Idade:</Text>
          <Text color="gray-400">{age}</Text>
        </PatientInfoItem>
        <PatientInfoItem>
          <Text>PCD:</Text>
          <Text color="gray-400">{isPcd ? 'Paciente PCD' : 'Não PCD'}</Text>
        </PatientInfoItem>
        <PatientInfoItem>
          <Text>Paciente com prioridade:</Text>
          <Text color="gray-400">
            {isPriority ? 'Atendimento prioritário' : 'Atendimento normal'}
          </Text>
        </PatientInfoItem>
      </PatientInfo>
      <ActionButtons>
        <Button onClick={handleRegisterAppointment}>Confirmar</Button>
        <Dialog.Close asChild>
          <Button
          // onClick={cancelAppointmentRegister}
          >
            Cancelar
          </Button>
        </Dialog.Close>

        {registerErro && (
          <Text size="sm" color="error">
            {registerErro}
          </Text>
        )}
        {registerSuccess && (
          <Text size="sm" color="success">
            {registerSuccess}
          </Text>
        )}
      </ActionButtons>
      {/* {output && <Text>{output}</Text>} */}
    </Box>
  )
}
