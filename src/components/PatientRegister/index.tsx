import { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  ActionButtons,
  Button,
  Container,
  FormContainer,
  FormItem,
  Select,
} from './styles'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Heading, Text } from '../Typography'
import { TextInput } from '../Form/InputText'
import { InputRadio } from '../Form/InputRadio'

const patientRegisterSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'O nome deve conter ao min. 3 letras' })
    .regex(/^[a-zA-Z\s]*$/, {
      message: 'O nome deve conter apenas letras',
    })
    .transform((name) => {
      return name
        .trim()
        .split(' ')
        .map((word) => {
          return word[0].toUpperCase().concat(word.substring(1))
        })
        .join(' ')
    }),
  age: z.coerce
    .number()
    .min(0, { message: 'Preencha o campo de idade' })
    .max(110, { message: 'Idade máxima é 110' }),
  gender: z.coerce.number().min(0).max(2),
  pcd: z.coerce.boolean(),
})

type PatientRegisterFormData = z.infer<typeof patientRegisterSchema>

const genderArray = [
  { label: 'Homem', value: 0 },
  { label: 'Mulher', value: 1 },
  { label: 'Prefere não identificar', value: 2 },
]

export const PatientRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PatientRegisterFormData>({
    resolver: zodResolver(patientRegisterSchema),
  })
  const [output, setOutput] = useState('')
  const [pcd, setPcd] = useState(false)

  const onSubmit = (data: PatientRegisterFormData) => {
    setOutput(JSON.stringify(data, null, 2))
  }

  return (
    <Container>
      <Heading size="md">Registro do paciente</Heading>
      <FormContainer>
        <Heading size="sm">Formulário do usuário</Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormItem>
            <label>Nome do paciente</label>
            {/* <Input {...register('name')} required /> */}
            <TextInput {...register('name')} />
            {errors.name && (
              <Text size={'sm'} color={'gray-400'}>
                {errors.name.message}
              </Text>
            )}
          </FormItem>
          <FormItem>
            <label>Idade do paciente</label>
            <TextInput
              required
              number
              type="number"
              min={0}
              max={110}
              {...register('age')}
            />
            {errors.age && (
              <Text size={'sm'} color={'gray-400'}>
                {errors.age.message}
              </Text>
            )}
          </FormItem>
          <FormItem>
            <label>Sexo</label>
            <Select {...register('gender')}>
              {genderArray.map((op) => {
                return (
                  <option key={op.label} value={op.value}>
                    {op.label}
                  </option>
                )
              })}
            </Select>
            {errors.gender && (
              <Text size="sm" color="gray-400">
                {errors.gender.message}
              </Text>
            )}
          </FormItem>
          <FormItem>
            <label>Paciente portador de deficiencia</label>
            <InputRadio
              {...register('pcd')}
              text="Possui pcd"
              checked={pcd}
              onClick={() => setPcd(!pcd)}
            />
            {errors.pcd && (
              <Text size={'sm'} color={'gray-400'}>
                {errors.pcd.message}
              </Text>
            )}
          </FormItem>
          <ActionButtons>
            <Button type="submit">Salvar</Button>
            <Button>Limpar</Button>
          </ActionButtons>
        </form>
      </FormContainer>
      <pre>{output}</pre>
    </Container>
  )
}
