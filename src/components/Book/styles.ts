import { styled } from "../../../stitches.config"


export const ContainerCard = styled('div', {
  width: '320px',
  height: '184px',
  background: '$gray700',
  borderRadius: '8px',
  padding: '$4',
})

export const HeaderComment = styled('div', {
  display: 'flex',
  height: '100%',
  gap: '$6',
  'img': {
    maxWidth: '108px',
    maxHeight: '152px',
    borderRadius: '4px'
  }
})

export const TitleCard = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  'h2': {
    fontSize: '$md',
    fontWeight: '$bold',
    color: '$gray100',
  },
  'p': {
    fontSize: '$sm',
    fontWeight: '$regular',
    color: '$gray400',
  },
})

