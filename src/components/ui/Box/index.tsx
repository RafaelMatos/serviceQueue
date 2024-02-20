import { styled } from '../../../../stitches.config'

export const Box = styled('div', {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  padding: '$4',
  border: '1px solid $gray700',
  // flexDirection: 'row',
  gap: '$2',
  variants: {
    flexDirection: {
      column: {
        flexDirection: 'column',
      },
      'column-reverse': {
        flexDirection: 'column-reverse',
      },
      inherit: {
        flexDirection: 'inherit',
      },
      initial: {
        flexDirection: 'initial',
      },
      revert: {
        flexDirection: 'revert',
      },
      row: {
        flexDirection: 'row',
      },
      'row-reverse': {
        flexDirection: 'row-reverse',
      },
      unset: {
        flexDirection: 'unset',
      },
    },
  },
  defaultVariants: {
    flexDirection: 'row',
  },
})
