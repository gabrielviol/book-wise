import { signIn } from "next-auth/react";
import Image from 'next/image'

import Logo from '../../images/login-img.png';
import { RocketLaunch } from "@phosphor-icons/react";
import { Icon } from '@iconify/react';

import { Button, Container, Content, ContentImage } from "./styles";

export default function Login() {
  return (
    <Container>
      <ContentImage>
        <Image
          src={Logo}
          height={850}
          quality={100}
          alt="Imagem Login"
        />
      </ContentImage>
      <Content>
        <div>
          <span>Boas vindas!</span>
          <p>Faça seu login ou acesse como visitante.</p>
        </div>
        <Button onClick={() => signIn('google')}>
          <Icon
            icon="logos:google-icon"
            style={{ fontSize: '32px', border: 'none' }}
          />
          Entrar com Google
        </Button>
        <Button onClick={() => signIn('github')}>
          <Icon
            icon="akar-icons:github-fill"
            style={{ fontSize: '32px', border: 'none' }}
          />
          Entrar com Github
        </Button>
        <Button>
          <RocketLaunch color='#8381D9' size={32} />
          Acessar como visitante
        </Button>

      </Content>
    </Container>
  )
}