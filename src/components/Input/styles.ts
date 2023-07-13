import { styled } from "../../../stitches.config";

export const ContainerInput = styled('div', {
  display: 'flex',
  alignItems: 'center',
  'input': {
    width: '100%',
    minWidth: '433px',
    height: '48px',
    background: '$gray800',
    border: '1px solid $gray500',
    borderRadius: '4px',
    padding: '1rem',
    color: '$white'
  },
  'input:focus': {
    outline: '1px solid $green200',
    background: '$gray700',
  },
  'svg': {
    marginLeft: '-$10',
    color: '$gray500'
  }
})