import Image from "next/image";

import UserAvatar from '../../../public/images/Avatar.png'

import { ContainerAvatar } from "./styles";
import { useSelector } from "react-redux";
import { UserState } from "@/store/reducers/userReducer";

export default function Avatar({ userId }) {
  const users = useSelector(UserState)
  const userSelected = users.find(user => user.id === userId)

  if (!userSelected)
    return
  else {
    return (
      <ContainerAvatar>
        <Image src={userSelected.avatar_url} width={40} height={40} quality={80} alt={userSelected.name} loading="eager" />
      </ContainerAvatar>
    )
  }


}