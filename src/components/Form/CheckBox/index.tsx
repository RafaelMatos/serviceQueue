import { Check } from '@phosphor-icons/react'
import { ComponentProps } from '@stitches/react'
import { CheckboxContainer, CheckboxIndicator, Container } from './styles'
import { Text } from '@/components/Typography'

type CheckboxProps = ComponentProps<typeof CheckboxContainer> & {
  text?: string
}

export const Checkbox = ({ text, ...props }: CheckboxProps) => {
  return (
    <Container>
      <CheckboxContainer {...props}>
        <CheckboxIndicator>
          <Check weight="bold" />
        </CheckboxIndicator>
      </CheckboxContainer>
      {text && (
        <Text size="sm" color="gray-400">
          {text}
        </Text>
      )}
    </Container>
  )
}
