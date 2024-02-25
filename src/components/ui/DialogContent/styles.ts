import * as Dialog from '@radix-ui/react-dialog'
import { styled } from '../../../../stitches.config'
import { keyframes } from '@stitches/react'
import { blackA, violet } from '@radix-ui/colors'

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
})

export const Container = styled(Dialog.Content, {
  backgroundColor: '$gray800',
  borderRadius: '$sm',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: 'fit-content',
  maxHeight: '85vh',
  padding: 25,
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  '&:focus': { outline: 'none' },
})

export const DialogTitle = styled(Dialog.Title, {
  margin: 0,
  marginBottom: '$4',
  paddingBottom: '$4',
  fontWeight: 500,
  borderBottom: '1px solid $gray700',
  color: '$cyan400',
  fontSize: 17,
})

export const DialogDescription = styled(Dialog.Description, {
  margin: '10px 0 20px',
  color: '$gray400',
  fontSize: '$sm',
  lineHeight: 1.5,
})

export const DialogOverlay = styled(Dialog.Overlay, {
  backgroundColor: blackA.blackA6,
  position: 'fixed',
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
})

export const IconButton = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: 25,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$gray400',
  position: 'absolute',
  top: 10,
  right: 10,

  '&:hover': { color: '$cyan500' },
  '&:focus': { boxShadow: `0 0 0 2px ${violet.violet7}` },
})
