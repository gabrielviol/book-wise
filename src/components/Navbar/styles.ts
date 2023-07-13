import { styled } from "@stitches/react";

export const NavBar = styled('div', {
  width: '232px',
  height: '95vh',
  position: 'sticky',
  top: 0,
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
    color: "$gray400",
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
  transition: "0.2s",
  'svg': {
    color: '$green100'
  },
  "&:hover": {
    color: "$gray400",
    'svg': {
      color: '$green200'
    },
  }
})