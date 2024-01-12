import { z } from 'zod'
import { TextInput } from '../Form/InputText'
import { Heading, Text } from '../Typography'
import { Container, Header } from './styles'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '../Form/Button'
import { Gear, User } from '@phosphor-icons/react'
import { ReactNode, useState } from 'react'
import { useRouter } from 'next/router'
import { api } from '@/lib/axios'

type AccessSectionProps = {
  type: 'patients' | 'employees'
  icon: ReactNode
}

const accessFormSchema = z.object({
  cpf: z
    .string({ required_error: 'Necessário fornecer um CPF' })
    .length(11, { message: 'CPF possui 11 digitos' })
    .regex(/^[0-9]*$/, {
      message: 'CPF deve conter apenas numeros',
    }),
})

type AccessFormData = z.infer<typeof accessFormSchema>

export const AccessSection = ({ type, icon }: AccessSectionProps) => {
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AccessFormData>({
    resolver: zodResolver(accessFormSchema),
  })

  const handleAccessForm = async (data: AccessFormData) => {
    const { cpf } = data
    try {
      const response = await api.get(`/${type}/${cpf}`)

      console.log(response)
      const user = response.data.user

      if (response.status === 400) {
        setErrorMsg(response.data.error)
      }

      if (response && user.id) {
        router.push('/service')
      }
    } catch (err) {
      setErrorMsg(
        `${type === 'employees' ? 'Funcionário' : 'Paciente'} não encontrado`,
      )
      console.log(err)
    }
  }
  return (
    <Container>
      <Header>
        <Heading>
          Entrar como {type === 'employees' ? 'funcionário' : 'paciente'}{' '}
        </Heading>
        {icon}
      </Header>

      <form onSubmit={handleSubmit(handleAccessForm)}>
        <Text>CPF :</Text>
        <TextInput
          {...register('cpf')}
          data-accept="\d"
          maxLength={11}
          size={11}
          required
          onChange={() => setErrorMsg(null)}
          disabled={type === 'patients'}
        />
        {errors.cpf && (
          <Text size={'sm'} color={'gray-200'}>
            {errors.cpf.message}
          </Text>
        )}
        {errorMsg && (
          <Text size={'sm'} color={'gray-200'}>
            {errorMsg}
          </Text>
        )}
        <Button text="Entrar" disabled={type === 'patients'} />
      </form>
    </Container>
  )
}
