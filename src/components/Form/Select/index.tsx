import { SelectHTMLAttributes } from 'react'
import { CSS } from '@stitches/react'
import { SelectContainer } from './styles'
import { Option } from './Option'

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  // icon?: ReactNode
  css?: CSS
  options: {
    label: string
    value: number
  }[]
}

export const Select = ({ options, css, ...props }: SelectProps) => {
  return (
    <SelectContainer css={css}>
      <select {...props}>
        {options.map((op) => {
          return <Option key={op.label} option={op} />
        })}
      </select>
      {/* {icon} */}
    </SelectContainer>
  )
}
