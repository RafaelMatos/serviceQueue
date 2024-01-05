import { ComponentProps, ElementRef, ReactNode, forwardRef } from 'react'
import { Input, TextInputContainer } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  icon?: ReactNode
  number?: boolean
}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  ({ icon, number = false, ...props }: TextInputProps, ref) => {
    return (
      <TextInputContainer typeNumber={number}>
        <Input ref={ref} {...props} />
        {icon}
      </TextInputContainer>
    )
  },
)

TextInput.displayName = 'Input'
