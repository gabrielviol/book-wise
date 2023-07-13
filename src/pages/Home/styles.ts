import { styled } from "../../../stitches.config";

export const Container = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 3fr 2fr'
})

export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '$10',
  margin: '$10',
  gap: '$4',
  'span:first-child': {
    display: 'flex',
    alignItems: 'center',
    fontSize: '$lg',
    color: '$gray100',
    gap: '$2',
    marginBottom: '$8',
    'svg': {
      color: '$green100'
    }
  },
  '> p ': {
    color: '$gray100',
    fontSize: '$sm'
  }
})

export const TrendingBooks = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: '$10',
  padding: '$4',
  gap: '$4',
})

export const HeaderTrending = styled('div', {
  display: 'flex',
  marginTop: '6rem',
  justifyContent: 'space-between',
  alignItems: 'center',
  'h2': {
    color: '$gray100',
    fontSize: '$sm',
    fontWeight: '$regular'
  },
  'button': {
    color: '$purple100',
    fontSize: '$sm',
    fontWeight: '$medium',
    cursor: 'pointer'
  }
})

export const BookCard = styled('div', {
  width: '324px',
  height: '130px',
  borderRadius: '8px',
  display: 'flex',
  background: '$gray700',
  padding: '$4',
  gap: '$4',
  'h2': {
    fontSize: '$md',
    fontWeight: '$bold',
    color: '$gray100'
  },
  'p': {
    marginTop: '$2',
    color: '$gray400',
    fontSize: '$sm',
    fontWeight: '$regular'
  },
  '> div': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  }
})