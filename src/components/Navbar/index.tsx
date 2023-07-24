import Image from "next/image";
import Logo from '../../../public/images/Logo.png'
import { Binoculars, ChartLineUp, SignIn } from "@phosphor-icons/react";
import { Button, ButtonLogin, NavBar } from "./styles";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter()

  function handlePushExplorer() {
    router.push('/explore')
  }

  function handlePushHome() {
    router.push('/')
  }
  return (
    <NavBar>
      <div>
        <Image src={Logo} alt="Logo" />
        <Button onClick={handlePushHome} active><ChartLineUp size={24} />Início</Button>
        <Button onClick={handlePushExplorer}><Binoculars size={24} />Explorar</Button>
        <Button onClick={handlePushExplorer}><Binoculars size={24} />Explorar</Button>
      </div>
      <ButtonLogin>Fazer login <SignIn size={24} /></ButtonLogin>
    </NavBar>
  )
}