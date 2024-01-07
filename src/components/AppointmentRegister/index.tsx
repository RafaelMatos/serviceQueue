import { useState } from 'react'
import {
  ActionButtons,
  Button,
  FormContainer,
  PatientInfo,
  PatientInfoItem,
} from './styles'
import { z } from 'zod'
import { Heading, Text } from '../Typography'
import { api } from '@/lib/axios'
import { PatientRegistered } from '../PatientRegister'

const appointmentRegisterSchema = z.object({})

// type AppointmentRegisterFormData = z.infer<typeof appointmentRegisterSchema>

type AppointmentRegisterProps = {
  patient: PatientRegistered
  cancelAppointmentRegister: () => void
}

export const AppointmentRegister = ({
  patient,
  cancelAppointmentRegister,
}: AppointmentRegisterProps) => {
  const { name, age, isPcd, id } = patient
  const isPriority = isPcd || age >= 60
  // const {
  //   register,
  //   handleSubmit,
  //   reset,
  //   formState: { errors, isSubmitted },
  // } = useForm<AppointmentRegisterFormData>({
  //   resolver: zodResolver(appointmentRegisterSchema),
  // })
  const [output, setOutput] = useState('')
  const [registerErro, setRegisterErro] = useState<string | null>(null)
  const [registerSuccess, setRegisterSuccess] = useState<string | null>(null)

  const handleRegisterAppointment = async () => {
    try {
      const response = await api.post('/appointments', {
        id,
        isPriority,
        statusAppointment: 0,
      })
      // const appointment = response.data.appointment
      setOutput(JSON.stringify(response, null, 2))
      setRegisterSuccess('Consulta marcada!')
    } catch (err) {
      setRegisterErro('Erro ao cadastrar Consulta')
      console.log(err)
    }
  }

  return (
    <FormContainer>
      <Heading size="sm">Confirmar consulta para paciente</Heading>
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
        <Button onClick={cancelAppointmentRegister}>Cancelar</Button>
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
    </FormContainer>
  )
}
