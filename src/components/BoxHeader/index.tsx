import { title } from 'process'
import { Container } from './styles'

interface BoxHeaderProps {
  title: string
}

const BoxHeader = ({ title }: BoxHeaderProps) => {
  return <Container>{title}</Container>
}

export default BoxHeader
