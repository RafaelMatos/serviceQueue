import { ComponentProps, ElementRef, ReactNode, forwardRef } from 'react'
import { ButtonContainer } from './styles'

export interface ButtonProps extends ComponentProps<typeof ButtonContainer> {
  icon?: ReactNode
  text?: string
}

export const Button = forwardRef<
  ElementRef<typeof ButtonContainer>,
  ButtonProps
>(({ icon, text, ...props }: ButtonProps, ref) => {
  return (
    <ButtonContainer ref={ref} {...props}>
      {text}
      {icon}
    </ButtonContainer>
  )
})

Button.displayName = 'Button'
