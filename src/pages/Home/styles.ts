import { styled } from "../../../stitches.config";

export const Container = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 3fr 2fr'
})

export const NavBar = styled('div', {
  width: '232px',
  height: '95vh',
  margin: '1rem',
  padding: '1.5rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: "$gray700",
  border: '1px solid $black',
  borderRadius: '12px',
  'div:first-child': {
    'img': {
      marginBottom: '3rem'
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'flex-start',
    gap: '1.5rem',
  }
})

export const Button = styled('button', {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '$1',
  color: '$gray100',
  cursor: 'pointer',
  fontSize: '$sm',
  transition: "0.2s",
  "&:hover": {
    color: "$gray300",
  },
  "&::before": {
    content: "''",
    width: 4,
    height: 24,
    background: "$gradient-vertical",
    marginRight: "$4",
    borderRadius: "$full",
    transition: "0.2s",
    opacity: 0,
  },
  variants: {
    active: {
      true: {
        color: "$gray100",
        fontWeight: "$bold",

        "&::before": {
          opacity: 1,
        }
      }
    }
  }
})

export const ButtonLogin = styled('button', {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '$3',
  color: '$gray100',
  cursor: 'pointer',
  fontSize: '$md',
  'svg': {
    color: '$green100'
  }
})

export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '$10',
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
  padding: '7rem 4rem',
  gap: '$4',
  border: '1px solid red'
})

export const HeaderTrending = styled('div', {
  display: 'flex',
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