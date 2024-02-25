import { ComponentProps } from '@stitches/react'
import {
  Container,
  DialogDescription,
  DialogOverlay,
  DialogTitle,
  IconButton,
} from './styles'
import { ReactNode } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { X } from '@phosphor-icons/react'

type DialogProps = ComponentProps<typeof Container> & {
  children: ReactNode
  title?: string
  description?: string
}

export const DialogContent = ({
  children,
  title,
  description,
  ...props
}: DialogProps) => {
  return (
    <>
      <DialogOverlay />
      <Container {...props}>
        {title && <DialogTitle>{title}</DialogTitle>}
        {description && <DialogDescription>{description}</DialogDescription>}
        {children}

        <Dialog.Close asChild>
          <IconButton aria-label="Close">
            <X />
          </IconButton>
        </Dialog.Close>
      </Container>
    </>
  )
}
