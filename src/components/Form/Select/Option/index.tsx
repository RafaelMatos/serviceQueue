import { OptionHTMLAttributes, ReactNode } from 'react'
import { Container } from './styles'
// import { Text } from '@/components/Typography'
import { CSS } from '@stitches/react'

export type Option = {
  label: string
  value: number
  icon?: ReactNode
}

type OptionProps = OptionHTMLAttributes<HTMLOptionElement> & {
  css?: CSS
  option: Option
}
export const Option = ({ option, css, ...props }: OptionProps) => {
  return (
    <Container {...props} css={css}>
      {/* <Text>{option.label}</Text> */}
      {option.label}
      {option.icon}
    </Container>
  )
}
