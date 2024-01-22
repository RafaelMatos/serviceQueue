import { ReactNode } from 'react'
import { Container, PageContent, SectionPage } from './styles'
import { Header } from '@/components/Header'
import { Sidebar } from '@/components/Sidebar'

type DefaultLayoutProps = {
  children: ReactNode
  title: string
}

export const DefaultLayout = ({ children, title }: DefaultLayoutProps) => {
  return (
    <Container>
      <Header title={title} />
      {/* <section> */}
      <SectionPage>
        <Sidebar />
        <PageContent>{children}</PageContent>
      </SectionPage>
      {/* </section> */}
    </Container>
  )
}
