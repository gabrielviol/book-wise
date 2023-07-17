import { styled } from "../../../stitches.config";

export const Container = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '100%',
  margin: '1rem'
})

export const ContentImage = styled('div', {
})

export const Content = styled('div', {
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  alignItems: 'center',
  lineHeight: '$tall',
  gap: '1rem',
  'div': {
    marginBottom: '10px'
  },
  'span': {
    fontWeight: '$medium',
    fontSize: '$2xl',
    textAlign: 'left',
  }
})

export const Button = styled('button', {
  display: 'flex',
  padding: '0 1.5rem',
  width: '18rem',
  height: '72px',
  gap: '1rem',
  alignItems: 'center',
  background: '$gray600',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: "0.2s",
  '&:hover': {
    background: '$gray500'
  }
})