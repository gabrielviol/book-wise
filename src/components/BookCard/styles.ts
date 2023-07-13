import { styled } from "@stitches/react"

export const ContainerCard = styled('div', {
  width: '608px',
  minHeight: '280px',
  height: '100%',
  background: '$gray700',
  borderRadius: '8px',
  padding: '$8',
  variants: {
    'size': {
      'small': {
        width: '319px',
        height: '184px'
      }
    }
  }
})

export const HeaderComment = styled('div', {
  display: 'flex',
  gap: '$4',
  marginBottom: '$6',
  'img': {
    width: '98px',
    height: '134px',
    border: '1px solid red'
  }
})

export const TitleCard = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  'h2': {
    fontSize: '$md',
    fontWeight: '$medium',
    color: '$gray100',
    marginBottom: '$1'
  },
  'p': {
    fontSize: '$sm',
    fontWeight: '$regular',
    color: '$gray400',
  },
})

export const ContentCard = styled('div', {
  display: 'flex',
  height: '100%',
  gap: '$4',
  'p': {
    fontSize: '$xs',
    fontWeight: '$regular',
    lineHeight: '$tall',
    color: '$gray300'
  }
})
