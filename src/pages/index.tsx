import { AccessButtons } from '@/components/AccessButtons'
import { AccessSection } from '@/components/AccessSection'
import { TextInput } from '@/components/Form/InputText'
import { Heading, Text } from '@/components/Typography'
import {
  AccessContainer,
  LogoSection,
  WelcomeSection,
} from '@/styles/pages/home'
import { Gear, User } from '@phosphor-icons/react'
import Head from 'next/head'

export default function Home() {
  return (
    <AccessContainer>
      <Head>
        <title>Acesso | HigIA Service Queue</title>
      </Head>
      <LogoSection />
      <WelcomeSection>
        <Heading>Bem vindo ao HigIA Service Queue</Heading>
        <Text>Entre como paciente ou funcionario da HigIA.</Text>
        <AccessSection type="employees" icon={<Gear size={24} />} />
        <AccessSection type="patients" icon={<User size={24} />} />
        {/* <AccessButtons /> */}
      </WelcomeSection>
    </AccessContainer>
  )
}
