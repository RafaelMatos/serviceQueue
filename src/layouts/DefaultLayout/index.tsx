import { ReactNode } from 'react'
import { Container } from './styles'
import { Header } from '@/components/Header'

type DefaultLayoutProps = {
  children: ReactNode
  title: string
}

export const DefaultLayout = ({ children, title }: DefaultLayoutProps) => {
  return (
    <Container>
      <Header title={title} />
      <section>
        <aside>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
          </ul>
        </aside>
        <section>{children}</section>
      </section>
    </Container>
  )
}
