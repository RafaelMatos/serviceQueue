import { AccessButtons } from '@/components/AccessButtons'
import { Heading, Text } from '@/components/Typography'
import {
  AccessContainer,
  LogoSection,
  WelcomeSection,
} from '@/styles/pages/home'
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
        <AccessButtons />
      </WelcomeSection>
    </AccessContainer>
  )
}
