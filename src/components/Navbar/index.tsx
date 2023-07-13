import Image from "next/image";
import Logo from '../../images/Logo.png'
import { Button, ButtonLogin, NavBar } from "./styles";
import { Binoculars, ChartLineUp, SignIn } from "@phosphor-icons/react";

export default function Navbar() {
  return (
    <NavBar>
      <div>
        <Image src={Logo} alt="Logo" />
        <Button active="true"><ChartLineUp size={24} />Início</Button>
        <Button><Binoculars size={24} />Explorar</Button>
      </div>
      <ButtonLogin>Fazer login <SignIn size={24} /></ButtonLogin>
    </NavBar>
  )
}