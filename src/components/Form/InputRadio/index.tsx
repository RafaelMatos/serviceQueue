import { ComponentProps, ElementRef, ReactNode, forwardRef } from 'react'
import { Container, Input, InputRadioContainer } from './styles'

export interface InputRadioProps extends ComponentProps<typeof Input> {
  icon?: ReactNode
  text?: string
}

export const InputRadio = forwardRef<ElementRef<typeof Input>, InputRadioProps>(
  ({ icon, text, ...props }: InputRadioProps, ref) => {
    return (
      <Container>
        <InputRadioContainer>
          <Input type="radio" ref={ref} {...props} />
          {icon}
        </InputRadioContainer>
        {text}
      </Container>
    )
  },
)

InputRadio.displayName = 'Input'
