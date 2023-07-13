import { styled } from "../../../stitches.config";

export const Container = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 4fr'
})

export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '$10',
  margin: '$8',
  gap: '$4'
})

export const Header = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  'span': {
    display: 'flex',
    alignItems: 'center',
    fontSize: '$lg',
    color: '$gray100',
    gap: '$2',
    'svg': {
      color: '$green100'
    }
  }
})

export const Categories = styled('div', {
  display: 'flex',
  gap: '$3',
  margin: '$6 0'
})

export const Button = styled('button', {
  height: '34px',
  padding: '0 $4',
  border: '1px solid $purple100',
  borderRadius: '999px',
  cursor: 'pointer',
  color: '$purple100',
  fontSize: '$sm',

  '&:hover': {
    background: '$purple200',
    color: '$gray200',
    border: '1px solid $purple100',
  },
  variants: {
    'active': {
      true: {
        background: '$purple200',
        color: '$gray200',
        border: 'none',
      }
    }
  }
})

export const ListBooks = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: '$4'
})