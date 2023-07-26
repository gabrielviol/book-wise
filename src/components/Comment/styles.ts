import { styled } from "../../../stitches.config"


export const ContainerComment = styled('div', {
  width: '608px',
  height: '280px',
  background: '$gray700',
  borderRadius: '8px',
  padding: '$6',
})

export const HeaderComment = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '$6',
})

export const TitleComment = styled('div', {
  display: 'flex',
  gap: '$4',
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

export const ContentComment = styled('div', {
  display: 'flex',
  height: '100%',
  gap: '1rem',
  'img': {
    minWidth: '108px',
    minHeight: '152px',
    borderRadius: '4px'
  }
})

export const InfoBook = styled('div', {
  'h2': {
    fontSize: '$md',
    color: '$gray100',
    marginBottom: '$1'
  },
  'h3': {
    fontSize: '$sm',
    fontWeight: '$regular',
    color: '$gray400',
    marginBottom: '$6'
  },
  'p': {
    fontSize: '$sm',
    fontWeight: '$regular',
    lineHeight: '$tall',
    color: '$gray300'
  }
})