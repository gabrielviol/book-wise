import { styled } from "@stitches/react";

export const Container = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 3fr 2fr'
})

export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  margin: '$10',
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
  }
})


export const ContainerAnalytics = styled('div', {
  padding: '$10',
  marginTop: '$10',
})