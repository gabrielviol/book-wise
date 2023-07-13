import { styled } from "../../../stitches.config"


export const Container = styled('div', {
  padding: '$10',
  marginTop: '$10',
  borderLeft: '1px solid $gray700'
})
export const Title = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$8'
})

export const UserName = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$2',
  'h2': {
    color: '$gray100',
    fontSize: '$lg',
    fontWeight: '$bold'
  },
  'p': {
    color: '$gray400',
    fontSize: '$xs',
    fontWeight: '$regular'
  }
})

export const Gap = styled('div', {
  content: "''",
  width: 32,
  height: 4,
  background: "$gradient-horizontal",
  marginRight: "$4",
  borderRadius: "$full",
  transition: "0.2s",
  opacity: 1,
  marginBottom: '$10'
})

export const Info = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$8',
  marginTop: '$4'
})

export const ContentInfo = styled('div', {
  display: 'flex',
  padding: '0 $8',
  gap: '$4',
  'h1': {
    fontSize: '$lg',
    color: "$gray200"
  },
  'h2': {
    fontSize: '$sm',
    color: "$gray200"
  },
  'svg': {
    color: "$green100"
  }
})