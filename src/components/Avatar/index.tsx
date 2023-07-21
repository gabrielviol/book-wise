import Image from "next/image";

import UserAvatar from '../../../public/images/Avatar.png'

import { ContainerAvatar } from "./styles";

export default function Avatar() {
  return (
    <ContainerAvatar>
      <Image src={UserAvatar} alt="Avatar" />
    </ContainerAvatar>
  )
}