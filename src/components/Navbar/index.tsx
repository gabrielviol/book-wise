import Image from "next/image";
import Logo from '../../../public/images/Logo.png'
import { Binoculars, ChartLineUp, SignIn, User } from "@phosphor-icons/react";
import { Button, ButtonLogin, NavBar } from "./styles";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Avatar from "../Avatar";

export default function Navbar() {
  const router = useRouter()
  const session = useSession()
  console.log(session)

  function handlePushHome() {
    router.push('/')
  }

  function handlePushExplorer() {
    router.push('/explore')
  }

  function handlePushProfile() {
    router.push('/profile')
  }

  return (
    <NavBar>
      <div>
        <Image src={Logo} alt="Logo" />
        <Button onClick={handlePushHome} active={router.pathname === "/"}>
          <ChartLineUp size={24} />
          Início
        </Button>
        <Button onClick={handlePushExplorer} active={router.pathname === "/explore"}>
          <Binoculars size={24} />
          Explorar
        </Button>
        {
          session.status === 'authenticated' ? (
            <Button onClick={handlePushProfile} active={router.pathname === "/profile"}>
              <User size={24} />
              Perfil
            </Button>) : (null
          )}

      </div>
      {
        session.status === 'authenticated' ? (
          <ButtonLogin>
            {/* <Avatar userId={ } /> */}
            <SignIn size={24} />
          </ButtonLogin>
        ) :
          (
            <ButtonLogin>
              Fazer login
              <SignIn size={24} />
            </ButtonLogin>
          )
      }
    </NavBar >
  )
}