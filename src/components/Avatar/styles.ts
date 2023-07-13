import { styled } from "@stitches/react";

export const ContainerAvatar = styled('div', {
  background: '$gradient-horizontal',
  width: '40px',
  height: '40px',
  padding: '1px',
  borderRadius: "999px",
  'img': {
    borderRadius: "999px",
    objectFit: "cover",
    width: "100%",
    height: "100%"
  }
})