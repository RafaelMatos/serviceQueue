import { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  ActionButtons,
  Button,
  Container,
  FormContainer,
  FormItem,
  PatientInfo,
  PatientInfoItem,
  Select,
} from './styles'
import { string, z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Heading, Text } from '../Typography'
import { api } from '@/lib/axios'
import { PatientRegistered } from '../PatientRegister'

const appointmentRegisterSchema = z.object({})

type AppointmentRegisterFormData = z.infer<typeof appointmentRegisterSchema>

const genderArray = [
  { label: 'Homem', value: 0 },
  { label: 'Mulher', value: 1 },
  { label: 'Prefere não identificar', value: 2 },
]

type AppointmentRegisterProps = {
  patient: PatientRegistered
  cancelAppontimentRegister: () => void
}

export const AppointmentRegister = ({
  patient,
  cancelAppontimentRegister,
}: AppointmentRegisterProps) => {
  const { name, age, isPcd, id } = patient
  const isPriority = isPcd || age >= 60
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitted },
  } = useForm<AppointmentRegisterFormData>({
    resolver: zodResolver(appointmentRegisterSchema),
  })
  const [output, setOutput] = useState('')
  const [registerErro, setRegisterErro] = useState<string | null>(null)
  const [registerSuccess, setRegisterSuccess] = useState<string | null>(null)

  const onSubmit = async (data: AppointmentRegisterFormData) => {
    // const {} = data

    try {
      const response = await api.post('/appointment', {})
      const appointment = response.data.appointment

      setRegisterSuccess('Consulta marcada!')
    } catch (err) {
      setRegisterErro('Erro ao cadastrar Consulta')
      console.log(err)
    }

    setOutput(JSON.stringify(data, null, 2))
    reset()
  }

  return (
    // <Container>
    //   <Heading size="md">Registro da consulta</Heading>
    <FormContainer>
      <Heading size="sm">Agendar consulta para paciente</Heading>
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
        <Button type="submit">Agendar</Button>
        <Button onClick={cancelAppontimentRegister}>Cancelar</Button>
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
    </FormContainer>
    // </Container>
  )
}
