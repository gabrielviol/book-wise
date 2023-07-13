import { MagnifyingGlass } from "@phosphor-icons/react";
import { ContainerInput } from "./styles";

interface InputProps {
  placeholder: string
  size?: string
}

export default function Input({ placeholder }: InputProps) {
  return (
    <ContainerInput>
      <input type="text" placeholder={placeholder} />
      <MagnifyingGlass size={32} />
    </ContainerInput>
  )
}