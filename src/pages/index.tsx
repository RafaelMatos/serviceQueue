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
        <title>Acesso | Healthy Code - Service Queue</title>
      </Head>
      <LogoSection>
        <Image
          src="/images/HealthyCodeLogo.svg"
          width={100}
          height={100}
          priority
          alt="Healthy Code logo"
        />
        <Image
          src="/images/ServiceQueueLogo.svg"
          width={500}
          height={150}
          priority
          alt="Service Queue logo"
        />

        <Text size="xl">
          Aguardando pelo serviço de saúde de alta qualidade
        </Text>
      </LogoSection>
      <WelcomeSection>
        <Image
          src="/images/HealthyCode.svg"
          width={150}
          height={30}
          priority
          alt="Healthy Code logo"
        />
        <Image
          src="/images/ServiceQueueLogo.svg"
          width={200}
          height={48}
          priority
          alt="Service Queue logo"
        />
        <AccessSection type="patients" icon={<User size={24} />} />
        <WelcomeSaluting>
          <Heading>Bem vindo ao Healthy Code - Service Queue</Heading>
          <Slogan>
            <span>A medicina do futuro</span>
            acontece hoje.
          </Slogan>
        </WelcomeSaluting>
        <AccessSection type="employees" icon={<Gear size={24} />} />

        {/* <AccessButtons /> */}
      </WelcomeSection>
    </AccessContainer>
  )
}
