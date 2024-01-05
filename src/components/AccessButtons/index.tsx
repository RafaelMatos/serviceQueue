import { AccessButton, Container } from './styles'
import { Gear, User  } from '@phosphor-icons/react'
import { useRouter } from 'next/router'

export const AccessButtons = () => {
  const router = useRouter()
  return (
    <Container>
      <AccessButton>
        <User size={30} />
        Entrar com Paciente
      </AccessButton>
      <AccessButton onClick={() => router.push('/service')}>
        <Gear size={30} />
        Entrar com Funcionário
      </AccessButton>
    </Container>
  )
}
