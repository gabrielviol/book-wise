import Image from "next/image";

import UserAvatar from '../../images/Avatar.png'

import { ContainerAvatar } from "./styles";

export default function Avatar() {
  return (
    <ContainerAvatar>
      <Image src={UserAvatar} alt="Avatar" />
    </ContainerAvatar>
  )
}