import { AccessButtons } from '@/components/AccessButtons'
import { AccessSection } from '@/components/AccessSection'
import { TextInput } from '@/components/Form/InputText'
import { Heading, Text } from '@/components/Typography'
import {
  AccessContainer,
  LogoSection,
  Slogan,
  WelcomeSaluting,
  WelcomeSection,
} from '@/styles/pages/home'
import { Gear, User } from '@phosphor-icons/react'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <AccessContainer>
      <Head>
        <title>Acesso | HigIA Service Queue</title>
      </Head>
      <LogoSection />
      <WelcomeSection>
        <Image
          src="/images/healthyCodeLogo.png"
          width={250}
          height={200}
          alt="Healthy Code logo"
        />
        <AccessSection type="patients" icon={<User size={24} />} />
        <WelcomeSaluting>
          <Heading>Bem vindo ao Healthy Code - Service Queue</Heading>
          <Slogan>
            <span>A medicina do futuro</span>
            acontece hoje.
          </Slogan>
          {/* <Text>Entre como paciente ou funcionario da HigIA.</Text> */}
        </WelcomeSaluting>
        <AccessSection type="employees" icon={<Gear size={24} />} />

        {/* <AccessButtons /> */}
      </WelcomeSection>
    </AccessContainer>
  )
}
