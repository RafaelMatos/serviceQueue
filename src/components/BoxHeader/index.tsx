import { Container } from './styles'
import { Text } from '../Typography'

interface BoxHeaderProps {
  title: string
}

const BoxHeader = ({ title }: BoxHeaderProps) => {
  return (
    <Container>
      <Text size="xl" color="success">
        {title}
      </Text>
    </Container>
  )
}

export default BoxHeader
